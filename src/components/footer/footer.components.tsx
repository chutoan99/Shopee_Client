//? LIBRARY
import { useState, memo } from 'react'
import { NavLink } from 'react-router-dom'
//? APPS
import { data_footer, data_footer1, data_footer2, data_footer3 } from '../../utils/data_footer'

function FooterComponent(): JSX.Element {
	const [show, setShow] = useState(false)
	return (
		<footer className='pt-4 border-t-4 border-t-[#ee4d2d] border-solid'>
			<div className='grid wide '>
				<div className='grid wide'>
					<div className='row border-b-[#ccc] border-b border-solid pb-[50px]'>
						<div className='l-12 mo-12 mo-12 c-12'>
							{data_footer?.map((item, index: number) => (
								<div key={index}>
									<h2 className='text-sm text-[#333] font-semibold mt-2.5'>{item?.heading}</h2>
									<p className=' no-underline text-xs text-neutral-500 flex text-justify items-center leading-5 mt-2.5 px-0 py-0.5'>
										{item?.des}
									</p>
								</div>
							))}
							{show ? (
								<>
									<h2 className='text-sm text-[#333] font-semibold mt-2.5'>
										{data_footer3?.heading1}
									</h2>
									<p className=' no-underline text-xs text-neutral-500 flex text-justify items-center leading-5 mt-2.5 px-0 py-0.5'>
										{data_footer3?.des}
									</p>
									{data_footer3?.list?.map((item, index) => (
										<li
											className='text-xs text-neutral-500 flex text-justify items-center mt-[5px] pl-2.5 px-0 py-0.5'
											key={index}>
											{item}
										</li>
									))}
									<p className=' no-underline text-xs text-neutral-500 flex text-justify items-center leading-5 mt-2.5 px-0 py-0.5'>
										{data_footer3?.des2}
									</p>
									<h2 className='text-sm text-[#333] font-semibold mt-2.5'>
										{data_footer3?.heading2}
									</h2>
									<p className=' no-underline text-xs text-neutral-500 flex text-justify items-center leading-5 mt-2.5 px-0 py-0.5'>
										{data_footer3?.des3}
									</p>
									<h2 className='text-sm text-[#333] font-semibold mt-2.5'>
										{data_footer3?.heading3}
									</h2>
									<p className=' no-underline text-xs text-neutral-500 flex text-justify items-center leading-5 mt-2.5 px-0 py-0.5'>
										{data_footer3?.des4}
									</p>
									<p className=' no-underline text-xs text-neutral-500 flex text-justify items-center leading-5 mt-2.5 px-0 py-0.5;'>
										{data_footer3?.des5}
									</p>
								</>
							) : (
								<h2
									className='text-sm  font-semibold mt-2.5 text-[#ee4d2d] cursor-pointer flex gap-[5px] items-center'
									onClick={() => setShow(true)}>
									Xem Thêm<i className='fa-solid fa-angle-right'></i>
								</h2>
							)}
						</div>
					</div>
				</div>
				<div className='row pt-[50px]'>
					<div className='col l-2-4 mo-3 c-6'>
						<h3 className='text-sm text-[#333] mb-[5px]'>CHĂM SÓC KHÁCH HÀNG</h3>
						<ul className='pl-0' style={{ listStyle: 'none' }}>
							{data_footer2?.map((item, index) => (
								<li key={index}>
									<NavLink
										to={item?.link}
										className='text-left no-underline text-xs text-neutral-500 flex items-center px-0 py-0.5'>
										{item?.value}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className='col l-2-4 mo-3 c-6'>
						<h3 className='text-sm text-[#333] mb-[5px]'>VỀ SHOPEE</h3>
						<ul className='pl-0' style={{ listStyle: 'none' }}>
							{data_footer1?.map((item, index) => (
								<li key={index}>
									<NavLink
										to={item?.link}
										className='text-left no-underline text-xs text-neutral-500 flex items-center px-0 py-0.5'>
										{item?.value}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className='col l-2-4 mo-3 c-6 '>
						<div>
							<h3 className='text-sm text-[#333] mb-[5px]'>THANH TOÁN</h3>
							<div className='flex flex-wrap w-[190px]'>
								<img src='/assets/Img/pay1.PNG' className='w-[55px] h-[29px] m-1' alt='pay' />
								<img src='/assets/Img/pay2.PNG' className='w-[55px] h-[29px] m-1' alt='pay' />
								<img src='/assets/Img/pay3.PNG' className='w-[55px] h-[29px] m-1' alt='pay' />
								<img src='/assets/Img/pay4.PNG' className='w-[55px] h-[29px] m-1' alt='pay' />
								<img src='/assets/Img/pay5.PNG' className='w-[55px] h-[29px] m-1' alt='pay' />
							</div>
						</div>
						<div>
							<h3 className='text-sm text-[#333] mb-[5px] py-[15px]'>ĐƠN VỊ VẬN CHUYỂN</h3>
							<div className='flex flex-wrap w-[190px]'>
								<img src='/assets/Img/ship1.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
								<img src='/assets/Img/ship2.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
								<img src='/assets/Img/ship3.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
								<img src='/assets/Img/ship4.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
								<img src='/assets/Img/ship5.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
								<img src='/assets/Img/ship6.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
								<img src='/assets/Img/ship7.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
								<img src='/assets/Img/ship8.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
								<img src='/assets/Img/ship9.PNG' className='w-[55px] h-[29px] m-1' alt='ship' />
							</div>
						</div>
					</div>
					<div className='col l-2-4 mo-3 c-6'>
						<h3 className='text-sm text-[#333] mb-[5px]'>THEO DÕI CHÚNG TÔI TRÊN</h3>
						<ul className='pl-0' style={{ listStyle: 'none' }}>
							<li>
								<NavLink
									to='https://www.facebook.com/ShopeeVN'
									className=' no-underline text-xs text-neutral-500 flex items-center px-0 '>
									<span className='text-base ml-0 mr-2  mb-0'>
										<i className='fa-brands fa-facebook-square'></i>
									</span>
									Facebook
								</NavLink>
							</li>
							<li>
								<NavLink
									to='https://www.instagram.com/Shopee_VN/'
									className=' no-underline text-xs text-neutral-500 flex items-center px-0'>
									<span className='text-base ml-0 mr-2 mb-0'>
										<i className='fa-brands fa-instagram-square'></i>
									</span>
									Instagram
								</NavLink>
							</li>
							<li>
								<NavLink
									to='https://www.linkedin.com/company/shopee'
									className=' no-underline text-xs text-neutral-500 flex items-center px-0'>
									<span className='text-base ml-0 mr-2 mb-0'>
										<i className='fa-brands fa-linkedin'></i>
									</span>
									Linkedin
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='col l-2-4 mo-3 c-6'>
						<h3 className='text-sm text-[#333] mb-[5px]'>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
						<div className='flex'>
							<NavLink to='# ' className='no-underline text-transparent bg-[initial]'>
								<img
									src='/assets/Img/qr-code.png'
									className=' w-20 h-20 border rounded-[3px] border-solid border-[#ccc]'
									alt=''
								/>
							</NavLink>
							<div className='flex ml-[16px] flex-col justify-around'>
								<NavLink to='# ' className='no-underline text-transparent'>
									<img src='/assets/Img/gg-play.png' className='h-[16px]' alt='' />
								</NavLink>
								<NavLink to='# ' className='no-underline text-transparent'>
									<img src='/assets/Img/app-store.png' className='h-[16px]' alt='' />
								</NavLink>
								<NavLink to='# ' className='no-underline text-transparent'>
									<img src='/assets/Img/app-gallery.png' className='h-[16px]' alt='' />
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-neutral-100 mt-8 px-0 py-2'>
				<div className='grid wide'>
					<p className='text-base text-[#939393] text-center'>@2022 - Bản quyền thuộc về công ty CHU TOAN</p>
				</div>
			</div>
		</footer>
	)
}
export default memo(FooterComponent)
