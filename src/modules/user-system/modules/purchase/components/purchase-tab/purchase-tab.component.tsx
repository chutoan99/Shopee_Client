//? LIBRARY
import { Link, NavLink } from 'react-router-dom'
import { memo, useEffect, useState } from 'react'
import { LIST_TAB } from '../../resources'
import { ITabs } from '../../../../order/interfaces'
//? APPS


type PurchaseTabModel = {
	data: any
}

function PurchaseTabComponent({ data }: PurchaseTabModel): JSX.Element {
	const [borderBottom, setBorderBottom] = useState('Tất cả')
	const [tabs, setTabs] = useState<ITabs>()
	return (
		<div className='w-full mb-[12px] flex overflow-hidden bg-[#fff]'>
		{LIST_TAB(tabs).map((tab: any, index: number) => (
			<span
				className={`bg-[#fff] cursor-pointer select-none text-base leading-[1.188rem] text-center text-[rgba(0,0,0,0.8)] flex flex-1 overflow-hidden items-center justify-center transition-[color] duration-[0.2s] px-0 py-3 hover:text-[#ee4d2d] ${
					borderBottom === tab.content
						? 'text-[#ee4d2d] border-[#ee4d2d]  border-b-2  border-solid'
						: ''
				}`}
				style={{
					WebkitUserSelect: 'none',
					MozUserSelect: 'none'
				}}
				key={index}
				onClick={() => onChangeStatus(tab.content, index, tab.type)}>
				<span>
					{tab.content}
					<>
						{tab.total === 0 ? (
							<></>
						) : (
							<span className='text-sm text-[#ee4d2d] ml-1 mr-0 my-0'>({tab.total})</span>
						)}
					</>
				</span>
			</span>
		))}
	</div>
	)
}
export default memo(PurchaseTabComponent)
