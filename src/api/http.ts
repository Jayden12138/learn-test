import { messageError, messageRedirectToSignIn } from '@/composables/message'
import { goToLogin } from '@/composables/goto'
import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

export const http: AxiosInstance = axios.create({
	baseURL: '/api',
	timeout: 10000,
	headers: { 'Content-Type': 'application/json' },
})

http.interceptors.request.use(config => {
	// config.headers.Authorization = `Bearer ${getToken()}`

	return config
})

http.interceptors.response.use(
	(response: AxiosResponse) => {
		return response
	},
	error => {
		if (error.response.status) {
			switch (error.response.status) {
				case 401:
					messageRedirectToSignIn(goToLogin)
					break
			}
			return Promise.reject(error)
		}
	}
)
