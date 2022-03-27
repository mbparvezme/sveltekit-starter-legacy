import { getToken } from "$lib/utility"
import { set } from "$lib/utility/cookie"

export async function post(req){
  let body = await req.request.json()
  let url = `${import.meta.env.VITE_API}${import.meta.env.VITE_API_VERSION}/logout`

  let res = await fetch(url, {
    method : "GET",
    headers : {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${ getToken(body.JWT) }`
    }
  })
  .then(value => value.json())
  .catch((err) => {return {body: {error:true, message: err}}})

  let authCookie = await set("", {delete: true})
  let cookieObj = {'Set-Cookie': authCookie}
  return {
    headers: cookieObj,
    body: {error: false, success: true, message : "Logged out successfully"}
  }
}
