import { get } from "$lib/utility/cookie"

export async function handle({ event, resolve }) {
  let allCookies = event.request.headers.get('cookie');
  let authCookie = get(allCookies, import.meta.env.VITE_AUTH_COOKIE_NAME)
  let response = null
  let origin = event.url.origin

  let unauthenticatedURLS = [
    "/account",
    "/api/auth/create",
    "/api/auth/login",
    "/api/request-reset",
    "/api/verify-reset",
    "/api/reset",
  ]

  event.locals.authenticated = !!authCookie
  event.locals.jwt = authCookie ? authCookie : null
  response = await resolve(event)

  if(!authCookie) {
    if(unauthenticatedURLS.includes(event.url.pathname)) {
      return response
    }
    return Response.redirect(origin + "/account", 303)
  }else{
    if(unauthenticatedURLS.includes(event.url.pathname)) {
      return Response.redirect(origin , 303)
    }else{
      return response
    }
  }
}

export let getSession = (event) => {
  return {
    authenticated : event.locals.authenticated,
    notPermitted  : event.locals.notPermitted,
    JWT           : event.locals.jwt,
  }
}