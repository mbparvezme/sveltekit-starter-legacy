import { extractToken } from "./index"

export let get = async (url) => {
  let res =  await fetch(url, {
    method: "GET",
    headers: {"Content-Type": "application/json", "Accept": "application/json",}
  })
  .then(res => res.json())
  .then(res => generateResponse(res))
  .catch(err =>{
    return {res: "ERROR", msg: err}
  })
}

export let openPost = async (url, data) => {
  let res =  await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json",},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => generateResponse(res))
  .catch(err =>{
    return {res: "ERROR", msg: err}
  })
}

export let post = async (url, token, data = []) => {
  let res =  await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json",},
    body: JSON.stringify( {token: extractToken(token)}, ...data)
  })
  .then(res => res.json())
  .then(res => generateResponse(res))
  .catch(err =>{
    return {res: "ERROR", msg: err}
  })
}

let generateResponse = (res) => {
  if(res.message && res.message == "Unauthorized") {
    window.location.href = "/account"
    return "AUTH_ERROR"
  }
  return res
}