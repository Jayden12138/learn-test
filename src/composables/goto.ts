import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/const'
import { getRouterInstance } from '@/router'

export function useGoto() {
	const router = useRouter()

	function gotoHome() {
		router.push({
			name: RouteNames.HOME,
		})
	}

	return {
		gotoHome,
	}
}

// 服务于在 setup 之外调用的场景
export function goToLogin() {
	return getRouterInstance().replace({
		name: RouteNames.LOGIN,
	})
}
