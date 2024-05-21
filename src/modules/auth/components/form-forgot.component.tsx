//? LIBRARY
import { useState, memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
//? APPS
import { validateForgotPassword } from '../../../utils/validate'
import { useMutationForgotPassWord } from '../hooks'
import { LoadingDefaultComponent } from '../../../components/loading'
import { LoginFaceBookComponent } from './faceBook'
import { LoginGoogleComponent } from './google'
import { IForgotPasswordData } from '../interfaces'

function ForgotFormComponent(): JSX.Element {
	const [emailLogin, setEmailLogin] = useState('')
	const [validationMsg, setValidationMsg] = useState<any>({})
	const [payload, setPayload] = useState<IForgotPasswordData>({
		email: emailLogin
	})
	const { loading, refetch } = useMutationForgotPassWord(payload)

	useEffect(() => {
		setPayload(() => {
			return {
				email: emailLogin
			}
		})
	}, [emailLogin])

	const onLogin = async () => {
		const isValid = await validateForgotPassword(emailLogin, setValidationMsg)
		if (!isValid) return
		refetch()
	}

	const handelKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			onLogin()
		}
	}
	return (
		<>
			{loading && <LoadingDefaultComponent />}
			<div className='w-[500px] py-[1.25rem] bg-[#fff] box-border shadow-[0_3px_10px_0_rgba(0,0,0,0.14)] rounded overflow-hidden'>
				<div className='px-[2rem] py-0'>
					<div className='flex items-center justify-between mt-2.5 px-3 py-0'>
						<h3 className='text-[1.37rem] font-normal text-[#333]'>Đăng Nhập</h3>
						<NavLink
							to='/register'
							className='cursor-pointer text-base leading-6 font-normal text-[#ee4d2d]'>
							Đăng Ký
						</NavLink>
					</div>
					<div>
						<div>
							<input
								value={emailLogin}
								onChange={(e) => setEmailLogin(e.target.value)}
								type='text'
								placeholder='Email của bạn'
								className='w-full text-sm leading-10 mt-4 px-3 py-0 rounded-sm border-[#dbdbdb] border-[1px]  border-[solid] focus-visible:border-[0.5px] focus-visible:border-[rgb(136_136_136_/_0.5)] focus:border-[#dbdbdb]'
								onKeyDown={handelKeyDown}
							/>
							<span className='text-[#ee4d2d] text-xs ml-[15px]'>{validationMsg.emailLogin}</span>
						</div>
					</div>
					<div className='flex justify-end mt-5'>
						<NavLink to='/forgot-password' className='no-underline text-sm leading-5 text-[#ee4d2d]'>
							Quên mật khẩu
						</NavLink>
						<span className='mt-[-0.125rem] block h-[22px] mb-0 mx-4 border-l-[rgb(234_234_234_/_1)] border-l border-solid'></span>
						<NavLink to='# ' className='text-sm leading-5 text-[rgb(147_147_147_/_1)] no-underline'>
							Cần trợ giúp?
						</NavLink>
					</div>
					<div className='flex justify-end mt-20 gap-[10px]'>
						<NavLink
							to='/'
							className='overflow-hidden text-ellipsis flex-col text-sm box-border shadow-[0_1px_1px_0_rgba(0,0,0,0.09)] border flex items-center justify-center capitalize h-[34px] min-w-[124px] text-[0.9rem] leading-[1.6rem] no-underline px-3 py-0 rounded-sm border-solid border-[#ccc]'>
							TRỞ LẠI
						</NavLink>
						<button
							className='overflow-hidden text-ellipsis flex-col text-sm box-border text-[#fff]  h-[34px] min-w-[124px] text-[0.9rem] leading-[1.6rem] no-underline flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.09)] px-2.5 py-0 rounded-sm border-0 bg-[#ee4d2d]'
							onClick={onLogin}>
							XÁC NHẬN
						</button>
					</div>
				</div>
				<div className='flex justify-center gap-[0_20px] bg-neutral-100 mt-[22px] px-0 py-4'>
					<LoginFaceBookComponent />
					<LoginGoogleComponent />
				</div>
			</div>
		</>
	)
}
export default memo(ForgotFormComponent)
