//? LIBRARY
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ApiForgotPassword, ApiLogin, ApiRegister, ApiResetPassword } from '../services'

import {
	IForgotPasswordData,
	ILoginData,
	ILoginResponse,
	IRegisterData,
	IRegisterResponse,
	IResetPasswordData
} from '../interfaces'
import { useTranslation } from 'react-i18next'

export const useMutationLogin = (payload: ILoginData) => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	const [loading, setLoading] = useState(false)

	const onRefetch = async () => {
		try {
			setLoading(true)
			const response: ILoginResponse = await ApiLogin(payload)
			if (response.err === 0) {
				toast.success(t(`AUTH.MESSAGE.LOGIN_SUCCESS`))
				localStorage.setItem('token-shopee', response?.access_token ?? '')
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

export const useMutationRegister = (payload: IRegisterData) => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	const [loading, setLoading] = useState(false)

	const onRefetch = async () => {
		try {
			setLoading(true)
			const reponse: IRegisterResponse = await ApiRegister(payload)
			if (reponse.err === 0) {
				toast.success(t(`AUTH.MESSAGE.REGISTER_SUCCESS`))
				setTimeout(() => {
					navigate('/auth/login')
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

export const useMutationForgotPassWord = (payload: IForgotPasswordData) => {
	const [loading, setLoading] = useState(false)
	const { t } = useTranslation()
	const onRefetch = async () => {
		try {
			setLoading(true)
			const response = await ApiForgotPassword(payload)
			if (response.err === 0) {
				toast.success(t(`AUTH.MESSAGE.FORGOT_PASSWORD_SUCCESS`))
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

export const useMutationResetPassWord = (payload: IResetPasswordData) => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	const [loading, setLoading] = useState(false)
	const onRefetch = async () => {
		try {
			setLoading(true)
			const data = await ApiResetPassword(payload)
			if (data.err === 0) {
				toast.success(t(`AUTH.MESSAGE.RESET_PASSWORD_SUCCESS`))
				setTimeout(() => {
					navigate('/auth/login')
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
