//? LIBRARY
import { Toaster } from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
//? APPS
import { RootState } from '../../app/store'
import { useAppSelector } from '../../hooks/hooks'
import useAuth from '../../hooks/userAuth'
import { FooterComponent } from '../../components/footer'
import { HeaderComponent } from '../../modules/header'

export default function UserLayout({ children }: any): JSX.Element {
	useAuth()
	const { data: dataUser } = useAppSelector((state: RootState) => state.user)
	return (
		<>
			<Toaster position='top-right' reverseOrder={false} />
			<HeaderComponent />
			<div className='bg-[#f5f5f5]'>
				<div className='grid wide'>
					<div className='row pt-[150px] pb-[30px] '>
						<div className='col-lg-2'>
							<div>
								<div className=' max-w-sm mx-auto flex items-center space-x-4'>
									<div className='shrink-0'>
										<img className='h-12 w-12 rounded-full' src={dataUser.avatar} alt='userImg' />
									</div>
									<div>
										<div className='overflow-hidden text-ellipsis whitespace-nowrap min-h-[1rem] font-semibold text-[#333] mb-[5px]'>
											{dataUser.name}
										</div>
										<div className='text-[#888] capitalize no-underline flex'>
											<svg
												width={12}
												height={12}
												viewBox='0 0 12 12'
												xmlns='http://www.w3.org/2000/svg'
												style={{ marginRight: 4 }}>
												<path
													d='M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48'
													fill='#9B9B9B'
													fillRule='evenodd'
												/>
											</svg>
											Sửa hồ sơ
										</div>
									</div>
								</div>
							</div>
							<div className='flex gap-[15px]  flex-col mt-[30px]'>
								<NavLink to='/user/profile' className='relative'>
									<div className='text-right'>
										<div className='flex gap-[10px]'>
											<div className='flex items-center justify-center w-5 h-5 leading-5 text-center text-[#fff] shrink-0 mr-2.5 rounded-[50%]'>
												<img
													className='w-full h-full'
													src='https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4'
													alt='profile'
												/>
											</div>
											<div className='leading-4'>
												<span>Tài khoản của tôi</span>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to='/user/purchase' className='relative'>
									<div className='text-right'>
										<div className=' flex gap-[10px]'>
											<div className='flex items-center justify-center w-5 h-5 leading-5 text-center text-[#fff] shrink-0 mr-2.5 rounded-[50%]'>
												<img
													className='w-full h-full'
													src='https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078'
													alt='purchase'
												/>
											</div>
											<div className='leading-4'>
												<span>Đơn Mua</span>
											</div>
										</div>
									</div>
									<div className='stardust-dropdown__item-body stardust-dropdown__item-body--open'>
										<div className='Yu7gVR' />
									</div>
								</NavLink>
								<NavLink to='/user/notification' className='relative'>
									<div className='text-right'>
										<div className=' flex gap-[10px]'>
											<div className='flex items-center justify-center w-5 h-5 leading-5 text-center text-[#fff] shrink-0 mr-2.5 rounded-[50%]'>
												<img
													className='w-full h-full'
													src='https://down-vn.img.susercontent.com/file/e10a43b53ec8605f4829da5618e0717c'
													alt='notification'
												/>
											</div>
											<div className='leading-4'>
												<span>Thông báo</span>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to='/user/voucher' className='relative'>
									<div className='text-right'>
										<div className=' flex gap-[10px]'>
											<div className='flex items-center justify-center w-5 h-5 leading-5 text-center text-[#fff] shrink-0 mr-2.5 rounded-[50%]'>
												<img
													className='w-full h-full'
													src='https://down-vn.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748'
													alt='voucher'
												/>
											</div>
											<div className='leading-4'>
												<span>Kho Voucher</span>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
						</div>
						{children}
					</div>
				</div>
			</div>
			<FooterComponent />
		</>
	)
}
