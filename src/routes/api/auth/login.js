import { set } from "$lib/utility/cookie"

export async function post( req ) {
  let body = await req.request.json()
  // let res = await fetch(import.meta.env.VITE_API + "/login", {
  //   method : "POST",
  //   headers : {"Content-Type": "application/json"},
  //   body: JSON.stringify(body),
  // })
  // .then(value => value.json())
  // .catch((err) => {
  //   console.log(err);
  // })

  // if(res.error) {return {body: {error:true, message: res.error.message}}}

  let authCookie = await set("secret_cookie_token", {salt : true, httpOnly : true, secure : true})

  let cookieObj = {'Set-Cookie': authCookie}
  return {headers: cookieObj, body: {error: false, success: true, message : "Login Successful"}}
}