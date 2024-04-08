//? LIBRARY
import { useEffect, memo, useState } from 'react'
import { useParams } from 'react-router-dom'
//? APPS
import { useSearchCategoriesQuery } from '../../modules/post/hooks'
import CategoryFilterComponent from '../../modules/category/components/category-filter.component'
import ProductListComponent from '../../modules/post/components/product-list.component'
import { SortBarsComponent } from '../../components/sortBars'
import { Pagination } from 'react-rainbow-components'
import { SearchEmptyComponent } from '../../components/searchEmpty'
import { LoadingComponent } from '../../components/loading'

function CategoryPage(): JSX.Element {
  const params = useParams()
  const [totalPage, setTotalPage] = useState(10)
  const [payload, setPayload] = useState({
    params: params,
    limit: 50,
    page: 1
  })
  const { data, isLoading } = useSearchCategoriesQuery(payload)

  useEffect(() => {
    data?.totalPage && setTotalPage(data?.totalPage)
  }, [payload, data])

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {data?.response?.length === 0 ? (
            <SearchEmptyComponent />
          ) : (
            <div className='row sm-gutter pt-[30px]'>
              <div className='col l-2 col-smo-3 c-3'>
                <CategoryFilterComponent />
              </div>
              <div className='col l-10'>
                <div className='padding-search mob:pt-[50px] mob:hidden block'></div>
                <SortBarsComponent />
                <ProductListComponent items={data?.response || []} col={'col l-2-4 mo-4 c-6'} loading={isLoading} />
                <Pagination setPayload={setPayload} totalPage={totalPage} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
export default memo(CategoryPage)
