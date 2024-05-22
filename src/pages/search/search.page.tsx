//? LIBRARY
import { memo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IPostQuery } from '../../modules/post/interfaces'
import { useSearchProductQuery } from '../../modules/post/hooks'
import { LoadingDefaultComponent } from '../../modules/shared/loading'
import { PaginationComponent, SearchEmptyComponent } from '../../modules/shared'
import { SortBarsComponent, FilterComponent } from '../../modules/home/category/components'
import ProductListComponent from '../../modules/post/components/product-list.component'

//? APPS

function SearchPage(): JSX.Element {
	const { search } = useParams()
	const [totalPage, setTotalPage] = useState<number>(0)
	const [payload, setPayload] = useState<IPostQuery>({
		name: search,
		limit: 50,
		page: 1
	})
	const { data, isLoading } = useSearchProductQuery(payload)

	useEffect(() => {
		data?.totalPage && setTotalPage(data.totalPage)
	}, [data, payload])

	return (
		<>
			{isLoading && <LoadingDefaultComponent />}
			{data?.response.length === 0 ? (
				<SearchEmptyComponent />
			) : (
				<div className='row sm-gutter py-[30px]'>
					<div className='col l-2 col-sm-3 c-3'>
						<FilterComponent />
					</div>
					<div className='col l-10'>
						<div className='padding-search mob:pt-[50px] mob:hidden block'></div>
						<SortBarsComponent />
						<ProductListComponent
							col={'col l-2-4 mo-4 c-6'}
							loading={isLoading}
							items={data?.response || []}
						/>
						<PaginationComponent setPayload={setPayload} totalPage={totalPage || 0} />
					</div>
				</div>
			)}
		</>
	)
}
export default memo(SearchPage)
