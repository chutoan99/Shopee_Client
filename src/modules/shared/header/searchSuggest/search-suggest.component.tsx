import { NavLink } from 'react-router-dom'
import { ISearchSuggest } from './interfaces'

type SuggestListModel = {
	data: ISearchSuggest[]
}

export default function SuggestListComponent({ data }: SuggestListModel): JSX.Element {
	return (
		<div className='w-full overflow-hidden flex'>
			<div className='h-[18px] text-[0.813rem] font-light overflow-y-visible flex-wrap relative mr-[55px] mt-[1.875px]'>
				{data?.map((item: ISearchSuggest) => {
					return (
						<NavLink
							key={item.id}
							to={`/search/${item.text}`}
							className='text-[#fff] no-underline h-[18px] text-[0.813rem] font-light overflow-y-visible relative mr-2.5 mt-[1.875px] hover:opacity-70 hover:text-[rgba(255,255,255,0.7)]'>
							{item?.text}
						</NavLink>
					)
				})}
			</div>
		</div>
	)
}
