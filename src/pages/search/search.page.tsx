//? LIBRARY
import { memo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//? APPS
import { useSearchProductQuery } from '../../modules/post/hooks'
import CategoryFilterComponent from '../../modules/category/components/category-filter.component'
import ProductListComponent from '../../modules/post/components/product-list.component'
import { LoadingComponent } from '../../components/loading'
import { SearchEmptyComponent } from '../../components/searchEmpty'
import { Pagination } from 'react-rainbow-components'
import { SortBarsComponent } from '../../components/sortBars'

function SearchPage(): JSX.Element {
	const params = useParams()
	const [payload, setPayload] = useState({
		params: params,
		limit: 50,
		page: 1
	})
	const [totalPage, setTotalPage] = useState(10)
	const { data, isLoading } = useSearchProductQuery(payload)

	useEffect(() => {
		data?.totalPage && setTotalPage(data?.totalPage)
	}, [data, payload])

	return (
		<>
			{isLoading ? (
				<LoadingComponent />
			) : (
				<>
					{data === null ? (
						<LoadingComponent />
					) : (
						<>
							{data === null ? (
								<SearchEmptyComponent />
							) : (
								<div className='row sm-gutter py-[30px]'>
									<div className='col l-2 col-sm-3 c-3'>
										<CategoryFilterComponent />
									</div>
									<div className='col l-10'>
										<div className='padding-search mob:pt-[50px] mob:hidden block'></div>
										<SortBarsComponent />
										<ProductListComponent
											items={data?.response || []}
											col={'col l-2-4 mo-4 c-6'}
											loading={isLoading}
										/>
										<Pagination
											setPayload={setPayload}
											totalPage={totalPage}
										/>
									</div>
								</div>
							)}
						</>
					)}
				</>
			)}
		</>
	)
}
export default memo(SearchPage)
