export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.client) {
    const getToken = sessionStorage.getItem('token');
    
    if (!getToken &&  to.path !== '/') {
      return navigateTo('/');
    }
  }
});
