//? LIBRARY
import { memo } from 'react'
import { useParams } from 'react-router-dom'
//? APPS
import { useGetItemsShopQuery, useGetShopIdQuery } from '../../modules/shop/hooks'
import { ShopPageInfoComponent } from '../../modules/shop/components'
import { ProductListComponent } from '../../modules/post/components'
import { LoadingCustomComponent } from '../../components/loading'

function ShopPage(): JSX.Element {
	const params = useParams()
	const { data: dataInfoShop } = useGetShopIdQuery(Number(params.shopid))
	const { data: dataItemsShop, isLoading: loadingQueyItemsShop } = useGetItemsShopQuery(Number(params.shopid))

	if (loadingQueyItemsShop) {
		return <LoadingCustomComponent />
	}
	return (
		<>
			{dataInfoShop?.response && <ShopPageInfoComponent data={dataInfoShop?.response} />}
			<div className='bg-[#f5f5f5] overflow-hidden pb-[50px]'>
				<div className='grid wide'>
					<div className='row sm-gutter pt-[16px]'>
						<ProductListComponent
							items={dataItemsShop?.response || []}
							col={'col l-2-4 mo-4 c-6'}
							loading={loadingQueyItemsShop}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
export default memo(ShopPage)
