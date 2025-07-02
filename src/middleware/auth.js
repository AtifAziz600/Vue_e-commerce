import {useAuthStore} from "@/stores/useAuthStore.js";

export default (to, from, next) => {
	const auth = useAuthStore()

	let exceptionalRoutes = ['login', 'register', 'forgot-password']
	let isGoingExceptionalRoutes = exceptionalRoutes.includes(to.name)

	let authProtected = ['dashboard', 'customer.order', 'payment', 'checkout']
	let isAuthProtected = authProtected.includes(to.name)
	if (!auth.isLoggedIn && isAuthProtected) {
	// 	// if (isGoingExceptionalRoutes) {
	// 	// 	next()
	// 	// 	return
	// 	// } else {
	// 	// 	next({ name: 'login' })
	// 	// 	return
	// 	// } 
		console.log(to.params)
		next({
			name: 'login',
			query:to?.query
		})
	}else if (auth.isLoggedIn && isGoingExceptionalRoutes) {
		next({ name: 'dashboard', query: { 'redirect-reason': 'already logged' } })
	} else {
		next()
	}
}
