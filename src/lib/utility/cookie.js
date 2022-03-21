import { v4 as uuid } from 'uuid'
import Slug from "slug"

export let set = (token = "", arg = {}) => {

  if(!arg['name'] && token == "" && !arg['delete']){
    return ""
  }

  // Initialize the cookie
  let cookieString = arg['name'] || import.meta.env.VITE_AUTH_COOKIE_NAME
      cookieString += "=" + token

  // Set the cookie Salt
  if(arg['salt'] && arg['salt'] == true){
    let salt = uuid() + uuid() + uuid() + uuid() + uuid()
        cookieString +=  "||" + Slug(salt)
  }
  cookieString += ";"

  // Set the cookie expiration
  let date = undefined
  if(arg['delete']){
    date = "Thu, 01 Jan 1970 00:00:00 GMT"
  }else{
    date = new Date()
    if(arg['durationUnit'] == "day"){
      date.setDate(date.getDate() + (arg['day'] || 2))
    }else{
      date.setHours(date.getHours() + (arg['hour'] || 4))
    }
  }
  cookieString += "expires=" + date + ";"

  // Set the cookie path
  cookieString += "path=" + (arg['path'] || '/') + ";"

  // Set the cookie access
  if(arg['httpOnly'] && arg['httpOnly'] != false){
    cookieString += "httpOnly=true;"
  }

  // // Set the cookie secure
  if(arg['secure'] && arg['secure'] != false){
    cookieString += "secure=true;"
  }

  return cookieString
}


export let get = (cookiesString, name = undefined) =>{
  if(cookiesString == null || cookiesString == "") return null

  let cookieArr = cookiesString.split(";")
  .map(function(cookieString) {
    return cookieString.trim().split("=");
  })
  .reduce(function(acc, curr) {
    acc[curr[0]] = curr[1];
    return acc
  }, {});

  return name ? (cookieArr[name] ? cookieArr[name] : false) : cookieArr

}