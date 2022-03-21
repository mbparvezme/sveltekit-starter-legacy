import { set } from "$lib/utility/cookie"

export async function get(){
  let authCookie = await set("", {delete: true})
  let cookieObj = {'Set-Cookie': authCookie}
  return {headers: cookieObj, body: {error: false, success: true, message : "Logged out successfully"}}
}
