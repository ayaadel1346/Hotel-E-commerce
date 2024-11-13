export default defineNuxtRouteMiddleware((to, from) => {
    const calculateDepth = (path) => {
      return path.split('/').filter(segment => segment.length > 0).length;
    };
  
    const toPathDepth = calculateDepth(to.path);
    const fromPathDepth = calculateDepth(from.path);
  
    if (toPathDepth > fromPathDepth) {
      to.meta.pageTransition = { name: 'page-left' };
      from.meta.pageTransition = { name: 'page-left' };
    } else {
      to.meta.pageTransition = { name: 'page-right' };
      from.meta.pageTransition = { name: 'page-right' };
    }
  });
  