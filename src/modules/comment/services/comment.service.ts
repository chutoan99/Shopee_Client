import toast from 'react-hot-toast'
import FormData from 'form-data'
import instance from '../../../configs/configAxios'

export const CreateComment = async (payload: any) => {
	try {
		const token = localStorage.getItem('token-shopee')
		console.log(payload, 'payload')
		let data = new FormData()
		data.append('orderid', payload?.orderid)
		data.append('itemid', payload?.itemid)
		data.append('shopid', payload?.shopid)
		data.append('comment', payload?.comment)
		data.append('rating_star', payload?.rating_star)
		for (const img of payload?.images) {
			data.append('images', img)
		}
		data.append('model_name', payload?.model_name)
		data.append('options', payload?.options)
		const response = await instance({
			method: 'post',
			url: 'comment',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			},
			data: data
		})

		if (response?.status === 200) {
			return response.data
		}
	} catch (error: any) {
		toast.error(error.msg)
	}
}
