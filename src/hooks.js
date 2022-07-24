import { get } from "$lib/utility/cookie"

export async function handle({ event, resolve }) {
  let allCookies = event.request.headers.get('cookie');
  let authCookie = get(allCookies, import.meta.env.VITE_AUTH_COOKIE_NAME)

  event.locals.authenticated = !!authCookie
  event.locals.jwt = authCookie ? authCookie : null
  const response = await resolve(event)
  return response
}

export let getSession = (event) => {
  return {
    authenticated : event.locals.authenticated,
    notPermitted  : event.locals.notPermitted,
    JWT           : event.locals.jwt,
  }
}