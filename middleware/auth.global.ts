export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path == '/') {
        return navigateTo('/sign-in', { redirectCode: 301 })    
        // return   
    } else if(to.path == '/admin') {
        return navigateTo('/admin/dashboard', { redirectCode: 301 })    
    }
})