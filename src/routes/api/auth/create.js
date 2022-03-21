import { set } from "$lib/utility/cookie"
import { randomNum } from "$lib/utility"

export let post = async (req) => {
  let body = await req.request.json()

  body.pin = randomNum(100000, 999999)

  // let res = await fetch(import.meta.env.VITE_API + "/register", {
  //   method : "POST",
  //   headers : {"Content-Type": "application/json"},
  //   body: JSON.stringify(body),
  // })
  // .then(value => value.json())
  // .catch((err) => {
  //   console.log(err);
  // })

  // if(res.error) {return {body: {error:true, message: res.error.message}}}

  let authCookie = set("secret_cookie_token", {salt : true, httpOnly : true, secure : true})
  let cookieObj = {'Set-Cookie': authCookie}
  return {headers: cookieObj, body: {error: false, success: true, message : "Registration Successful"}}

}

