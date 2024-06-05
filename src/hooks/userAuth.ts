import { toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { UserActions } from '../redux'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../modules/user-system/modules/account/interfaces'
import { GetCurrentUser } from '../modules/user-system/modules/account/services'

const useAuth = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const token = localStorage.getItem('token-shopee')
	const [dataUser, setDataUser] = useState<IUser>()

	useEffect(() => {
		const fetchDataCurrentUser = async () => {
			if (token) {
				try {
					const response = await GetCurrentUser()
					if (response.err === 0) {
						setDataUser(response.response)
						dispatch(
							UserActions.updateUser({
								data: response.response,
								isLogin: true
							})
						)
					} else {
						toast.error(response.msg)
					}
				} catch (error: any) {}
			} else {
				setTimeout(() => {
					navigate('/auth/login')
				}, 1000)
			}
		}

		fetchDataCurrentUser()
	}, [token, dispatch, navigate])

	return { dataUser }
}

export default useAuth
