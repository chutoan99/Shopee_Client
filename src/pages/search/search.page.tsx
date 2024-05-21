//? LIBRARY
import { memo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//? APPS
import { useSearchProductQuery } from '../../modules/post/hooks'
import CategoryFilterComponent from '../../modules/category/components/category-filter.component'
import ProductListComponent from '../../modules/post/components/product-list.component'
import { LoadingDefaultComponent } from '../../components/loading'
import { SearchEmptyComponent } from '../../components/searchEmpty'
import { SortBarsComponent } from '../../modules/sortBars'
import { PaginationComponent } from '../../modules/pagination'
import { IPostQuery } from '../../modules/post/interfaces'

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
		data?.totalPage && setTotalPage(data?.totalPage)
	}, [data, payload])

	if (isLoading) {
		return <LoadingDefaultComponent />
	}

	if (data?.response.length === 0) {
		return <SearchEmptyComponent />
	}

	return (
		<div className='row sm-gutter py-[30px]'>
			<div className='col l-2 col-sm-3 c-3'>
				<CategoryFilterComponent />
			</div>
			<div className='col l-10'>
				<div className='padding-search mob:pt-[50px] mob:hidden block'></div>
				<SortBarsComponent />
				<ProductListComponent items={data?.response || []} col={'col l-2-4 mo-4 c-6'} loading={isLoading} />
				<PaginationComponent setPayload={setPayload} totalPage={totalPage || 0} />
			</div>
		</div>
	)
}
export default memo(SearchPage)
