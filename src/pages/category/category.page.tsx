//? LIBRARY
import { useEffect, memo, useState } from 'react'
import { useParams } from 'react-router-dom'
//? APPS
import { SearchEmptyComponent } from '../../components/searchEmpty'
import { LoadingDefaultComponent } from '../../components/loading'
import { SortBarsComponent } from '../../modules/sortBars'
import { PaginationComponent } from '../../modules/pagination'
import { CONSTANT } from '../../modules/category/resources'
import { ICategoryQuery } from '../../modules/category/interfaces'
import { useSearchCategoriesQuery } from '../../modules/category/hooks'
import ProductListComponent from '../../modules/post/components/product-list.component'
import CategoryFilterComponent from '../../modules/category/components/category-filter.component'

function CategoryPage(): JSX.Element {
	const { display_name } = useParams()
	const [totalPage, setTotalPage] = useState<number>(0)
	const [payload, setPayload] = useState<ICategoryQuery>({
		category_name: encodeURIComponent(display_name as string),
		limit: CONSTANT.LIMIT,
		page: CONSTANT.PAGE
	})
	const { data, isLoading } = useSearchCategoriesQuery(payload)

	useEffect(() => {
		data?.totalPage && setTotalPage(data?.totalPage)
	}, [payload, data])

	if (isLoading) {
		return <LoadingDefaultComponent />
	}

	if (data?.response.length === 0) {
		return <SearchEmptyComponent />
	}
	return (
		<div className='row sm-gutter pt-[30px]'>
			<div className='col l-2 col-smo-3 c-3'>
				<CategoryFilterComponent />
			</div>
			<div className='col l-10'>
				<div className='padding-search mob:pt-[50px] mob:hidden block'></div>
				<SortBarsComponent />
				<ProductListComponent col={'col l-2-4 mo-4 c-6'} items={data?.response || []} loading={isLoading} />
				<PaginationComponent setPayload={setPayload} totalPage={totalPage || 0} />
			</div>
		</div>
	)
}
export default memo(CategoryPage)
