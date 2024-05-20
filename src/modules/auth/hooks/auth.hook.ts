//? LIBRARY
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import {
	ApiForgotPassword,
	ApiLogin,
	ApiRegister,
	ApiResetPassword
} from '../services'

//? TYPE & SERVICES
import {
	ALERT_FORGOT_PASSWORD_SUCCESS,
	ALERT_LOGIN_SUCCESS,
	ALERT_RESET_PASSWORD_SUCCESS
} from '../../../constants/msg'
import { ILoginREsponse, IRegisterResponse } from '../interfaces'

export const useMutationLogin = (payload: any) => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)

	const onRefetch = async () => {
		try {
			setLoading(true)
			const response: ILoginREsponse = await ApiLogin(payload)
			if (response.err === 0) {
				toast.success(ALERT_LOGIN_SUCCESS)
				localStorage.setItem(
					'token-shopee',
					response?.access_token ?? ''
				)
				setTimeout(() => {
					navigate('/')
				}, 2000)
			} else {
				toast.error(response.msg)
			}
		} catch (error: any) {
			toast.error(error.msg)
		} finally {
			setLoading(false)
		}
	}

	const refetch = () => {
		onRefetch()
	}

	return { loading, refetch }
}

export const useMutationRegister = (payload: any) => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)

	const onRefetch = async () => {
		try {
			setLoading(true)
			const reponse: IRegisterResponse = await ApiRegister(payload)
			if (reponse.err === 0) {
				toast.success('Đăng ký thành công')
				setTimeout(() => {
					navigate('/login')
				}, 2000)
			} else {
				toast.error(reponse.msg)
			}
		} catch (error: any) {
			toast.error(error.msg)
		} finally {
			setLoading(false)
		}
	}

	const refetch = () => {
		onRefetch()
	}

	return { loading, refetch }
}

export const useMutationForgotPassWord = (payload: any) => {
	const [loading, setLoading] = useState(false)

	const onRefetch = async () => {
		try {
			setLoading(true)
			const response = await ApiForgotPassword(payload)
			if (response.err === 0) {
				toast.success(ALERT_FORGOT_PASSWORD_SUCCESS)
			} else {
				toast.error(response.msg)
			}
		} catch (error: any) {
			toast.error(error.msg)
		} finally {
			setLoading(false)
		}
	}

	const refetch = () => {
		onRefetch()
	}

	return { loading, refetch }
}

export const useMutationResetPassWord = (payload: any) => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const onRefetch = async () => {
		try {
			setLoading(true)
			const data = await ApiResetPassword(payload)
			if (data.err === 0) {
				toast.success(ALERT_RESET_PASSWORD_SUCCESS)
				setTimeout(() => {
					navigate('/login')
				}, 2000)
			} else {
				toast.error(data.msg)
			}
		} catch (error: any) {
			toast.error(error.msg)
		} finally {
			setLoading(false)
		}
	}

	const refetch = () => {
		onRefetch()
	}

	return { loading, refetch }
}
