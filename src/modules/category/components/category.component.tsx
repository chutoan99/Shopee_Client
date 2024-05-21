//? LIBRARY
import Slider from 'react-slick'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useGetCategoryTreeQuery } from '../hooks'
import { categoryConfig } from '../configs'
import { ICategoryTree } from '../interfaces'

function CategoryComponent(): JSX.Element {
	const { data, isLoading } = useGetCategoryTreeQuery()
	return (
		<div className='col l-12 mo-12 c-12'>
			{!isLoading && (
				<div className='pt-[20px]'>
					<div className='bg-[#fff]'>
						<div className='p-[20px] text-left text-[1rem] text-[rgba(0, 0, 0, 0.54] font-medium'>
							DANH MỤC
						</div>
						<Slider {...categoryConfig.settings}>
							{data?.response?.map((category: ICategoryTree[], index: number) => (
								<div key={index}>
									{category?.map((ele: ICategoryTree, index: number) => (
										<NavLink
											to={`/categories/${ele.display_name}/${ele.id}`}
											className='flex flex-col justify-around items-center h-[150px] cursor-pointer transition-all duration-[0.5s] ease-[ease] delay-[0s] border-[0.5px] border-solid border-[rgba(0,0,0,.05)] px-[5px] hover:shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]'
											key={index}>
											<img
												src={`https://cf.shopee.vn/file/${ele.image}`}
												className='h-[4.375rem] w-[4.375rem] block m-auto rounded-[50%]'
												alt={ele.display_name}
											/>
											<div
												className='text-[rgba(0, 0, 0, 0.8)] text-sm no-underline leading-[0.781rem] h-[40px] flex overflow-hidden text-center mb-[6.25px]'
												style={{
													wordBreak: 'break-word',
													display: '-webkit-box',
													textOverflow: 'ellipsis',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: 2
												}}>
												{ele.display_name}
											</div>
										</NavLink>
									))}
								</div>
							))}
						</Slider>
					</div>
				</div>
			)}
		</div>
	)
}
export default memo(CategoryComponent)
