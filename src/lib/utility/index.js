import slug from 'slug';

export let formData = (formInputs) => {
  const data = {}
  for (let field of formInputs) {
    const [key, value] = field
    if( value != "" ){
      if(!key.includes("[") ) {
        data[key] = value
      }else{
        let name = key
        name = name.split(']').join('');
        const keyArr = name.split("[")
        if(keyArr.length == 2){
          data.hasOwnProperty(keyArr[0]) ? data[keyArr[0]][keyArr[1]] = value : data[keyArr[0]] = {[keyArr[1]]: value}
        }else{
          if(data.hasOwnProperty(keyArr[0])){
            if( typeof data[keyArr[0]][keyArr[1]] === 'undefined' ){
              data[keyArr[0]][keyArr[1]] = {[keyArr[2]]: value}
            }else{
              data[keyArr[0]][keyArr[1]][keyArr[2]] = value
            }
          }else{
            data[keyArr[0]] = {[keyArr[1]]: {[keyArr[2]]: value}}
          }
        }
      }
    }
  }
  return data
}

export let randomNum = (min = 10, max = 99) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export let createUsername = (attribute) => {
  if(attribute.includes("@")) {
    let emailParts = attribute.split("@")
    return emailParts[0] + emailParts[1].substring(0, 2) + randomNum()
  } else {
    return slug(attribute) + randomNum()
  }
}

export let extractToken = ( string = "" ) => {
  let strParts = string.split("||")
  return strParts[0]
}

