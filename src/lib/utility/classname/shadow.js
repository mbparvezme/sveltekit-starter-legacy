import classnames from 'classnames'

let shadow = (arg, style = 'size') => {

  if(style == "size"){
    return shadowSize(arg)
  }

  if(style == "color"){
    return shadowColor(arg)
  }

}

let shadowSize = (arg) => {
  let cls = {}

  if(arg.light){
    let light = {
      'shadow-none'   : arg.light == "none",
      'shadow-sm'     : arg.light == "sm",
      'shadow'        : arg.light == "shadow",
      'shadow-md'     : arg.light == "md",
      'shadow-lg'     : arg.light == "lg",
      'shadow-xl'     : arg.light == "xl",
      'shadow-2xl'    : arg.light == "2xl",
      'shadow-inner'  : arg.light == "inner",
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:shadow-none'   : arg.focus == "none",
      'focus:shadow-sm'     : arg.focus == "sm",
      'focus:shadow'        : arg.focus == "shadow",
      'focus:shadow-md'     : arg.focus == "md",
      'focus:shadow-lg'     : arg.focus == "lg",
      'focus:shadow-xl'     : arg.focus == "xl",
      'focus:shadow-2xl'    : arg.focus == "2xl",
      'focus:shadow-inner'  : arg.focus == "inner",
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.hover){
    let hover = {
      'hover:shadow-none'   : arg.hover == "none",
      'hover:shadow-sm'     : arg.hover == "sm",
      'hover:shadow'        : arg.hover == "shadow",
      'hover:shadow-md'     : arg.hover == "md",
      'hover:shadow-lg'     : arg.hover == "lg",
      'hover:shadow-xl'     : arg.hover == "xl",
      'hover:shadow-2xl'    : arg.hover == "2xl",
      'hover:shadow-inner'  : arg.hover == "inner",
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.dark){
    let dark = {
      'dark:shadow-none'  : arg.dark == "none",
      'dark:shadow-sm'    : arg.dark == "sm",
      'dark:shadow'       : arg.dark == "shadow",
      'dark:shadow-md'    : arg.dark == "md",
      'dark:shadow-lg'    : arg.dark == "lg",
      'dark:shadow-xl'    : arg.dark == "xl",
      'dark:shadow-2xl'   : arg.dark == "2xl",
      'dark:shadow-inner' : arg.dark == "inner",
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:shadow-none'  : arg.darkFocus == "none",
      'dark:focus:shadow-sm'    : arg.darkFocus == "sm",
      'dark:focus:shadow'       : arg.darkFocus == "shadow",
      'dark:focus:shadow-md'    : arg.darkFocus == "md",
      'dark:focus:shadow-lg'    : arg.darkFocus == "lg",
      'dark:focus:shadow-xl'    : arg.darkFocus == "xl",
      'dark:focus:shadow-2xl'   : arg.darkFocus == "2xl",
      'dark:focus:shadow-inner' : arg.darkFocus == "inner",
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:shadow-none'  : arg.darkHover == "none",
      'dark:hover:shadow-sm'    : arg.darkHover == "sm",
      'dark:hover:shadow'       : arg.darkHover == "shadow",
      'dark:hover:shadow-md'    : arg.darkHover == "md",
      'dark:hover:shadow-lg'    : arg.darkHover == "lg",
      'dark:hover:shadow-xl'    : arg.darkHover == "xl",
      'dark:hover:shadow-2xl'   : arg.darkHover == "2xl",
      'dark:hover:shadow-inner' : arg.darkHover == "inner",
    }
    cls = Object.assign(cls, darkHover)
  }

  return classnames(cls)
}

let shadowColor = (arg) => {
  let cls = {}

  if(arg.light){
    let light = {
      'shadow-none' : arg.light == "brand",
      'shadow-sm'   : arg.light == "default",
      'shadow'      : arg.light == "muted",
      'shadow-md'   : arg.light == "light",
      'shadow-lg'   : arg.light == "dark",
      'shadow-xl'   : arg.light == "xl",
      'shadow-2xl'  : arg.light == "2xl",
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:shadow-none' : arg.focus == "brand",
      'focus:shadow-sm'   : arg.focus == "default",
      'focus:shadow'      : arg.focus == "muted",
      'focus:shadow-md'   : arg.focus == "light",
      'focus:shadow-lg'   : arg.focus == "dark",
      'focus:shadow-xl'   : arg.focus == "xl",
      'focus:shadow-2xl'  : arg.focus == "2xl",
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.hover){
    let hover = {
      'hover:shadow-none' : arg.hover == "brand",
      'hover:shadow-sm'   : arg.hover == "default",
      'hover:shadow'      : arg.hover == "muted",
      'hover:shadow-md'   : arg.hover == "light",
      'hover:shadow-lg'   : arg.hover == "dark",
      'hover:shadow-xl'   : arg.hover == "xl",
      'hover:shadow-2xl'  : arg.hover == "2xl",
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.dark){
    let dark = {
      'dark:shadow-none' : arg.dark == "brand",
      'dark:shadow-sm'   : arg.dark == "default",
      'dark:shadow'      : arg.dark == "muted",
      'dark:shadow-md'   : arg.dark == "light",
      'dark:shadow-lg'   : arg.dark == "dark",
      'dark:shadow-xl'   : arg.dark == "xl",
      'dark:shadow-2xl'  : arg.dark == "2xl",
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:shadow-none' : arg.darkFocus == "brand",
      'dark:focus:shadow-sm'   : arg.darkFocus == "default",
      'dark:focus:shadow'      : arg.darkFocus == "muted",
      'dark:focus:shadow-md'   : arg.darkFocus == "light",
      'dark:focus:shadow-lg'   : arg.darkFocus == "dark",
      'dark:focus:shadow-xl'   : arg.darkFocus == "xl",
      'dark:focus:shadow-2xl'  : arg.darkFocus == "2xl",
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:shadow-none' : arg.darkHover == "brand",
      'dark:hover:shadow-sm'   : arg.darkHover == "default",
      'dark:hover:shadow'      : arg.darkHover == "muted",
      'dark:hover:shadow-md'   : arg.darkHover == "light",
      'dark:hover:shadow-lg'   : arg.darkHover == "dark",
      'dark:hover:shadow-xl'   : arg.darkHover == "xl",
      'dark:hover:shadow-2xl'  : arg.darkHover == "2xl",
    }
    cls = Object.assign(cls, darkHover)
  }

  return classnames(cls)
}

export default shadow