//? LIBRARY
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useGetItemsShopQuery, useGetShopIdQuery } from '../../modules/shop/hooks'
import { LoadingCustomComponent } from '../../modules/shared/loading'
import { ShopInfoComponent } from '../../modules/shop'
import { IShop } from '../../modules/shop/interfaces'
import ProductListComponent from '../../modules/post/components/product-list.component'
//? APPS

function ShopPage(): JSX.Element {
	const params = useParams()
	const { data: dataInfoShop } = useGetShopIdQuery(Number(params.shopid))
	const { data: dataItemsShop, isLoading } = useGetItemsShopQuery(Number(params.shopid))

	return (
		<>
			{isLoading ? (
				<LoadingCustomComponent />
			) : (
				<>
					<ShopInfoComponent data={dataInfoShop?.response as IShop} />
					<div className='bg-[#f5f5f5] overflow-hidden pb-[50px]'>
						<div className='grid wide'>
							<div className='row sm-gutter pt-[16px]'>
								<ProductListComponent
									col={'col l-2-4 mo-4 c-6'}
									items={dataItemsShop?.response || []}
									loading={isLoading}
								/>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}
export default memo(ShopPage)
