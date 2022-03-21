import classnames from 'classnames'

let background = (arg, style = "color") => {
  if(style == "color"){
    return bgColor(arg)
  }

  if(style == "opacity"){
    return bgOpacity(arg)
  }

  return "no-bg-class"
}

let bgColor = (arg) => {
  let cls = {}

  if(arg.light){
    let light = {
      'bg-brand'        : arg.light == "brand",
      'bg-primary'      : arg.light == "primary",
      'bg-secondary'    : arg.light == "secondary",
      'bg-tertiary'     : arg.light == "tertiary",
      'bg-alt-b'        : arg.light == "alt",
      'bg-dark'         : arg.light == "dark",
      'bg-light'        : arg.light == "light",
      'bg-transparent'  : arg.light == "transparent",
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:bg-brand'        : arg.focus == "brand",
      'focus:bg-primary'      : arg.focus == "primary",
      'focus:bg-secondary'    : arg.focus == "secondary",
      'focus:bg-tertiary'     : arg.focus == "tertiary",
      'focus:bg-alt-b'        : arg.focus == "alt",
      'focus:bg-dark'         : arg.focus == "dark",
      'focus:bg-light'        : arg.focus == "light",
      'focus:bg-transparent'  : arg.focus == "transparent",
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.hover){
    let hover = {
      'hover:bg-brand'        : arg.hover == "brand",
      'hover:bg-primary'      : arg.hover == "primary",
      'hover:bg-secondary'    : arg.hover == "secondary",
      'hover:bg-tertiary'     : arg.hover == "tertiary",
      'hover:bg-alt-b'        : arg.hover == "alt",
      'hover:bg-dark'         : arg.hover == "dark",
      'hover:bg-light'        : arg.hover == "light",
      'hover:bg-transparent'  : arg.hover == "transparent",
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.dark){
    let dark = {
      'dark:bg-brand'        : arg.dark == "brand",
      'dark:bg-primary'      : arg.dark == "primary",
      'dark:bg-secondary'    : arg.dark == "secondary",
      'dark:bg-tertiary'     : arg.dark == "tertiary",
      'dark:bg-alt-b'        : arg.dark == "alt",
      'dark:bg-dark'         : arg.dark == "dark",
      'dark:bg-light'        : arg.dark == "light",
      'dark:bg-transparent'  : arg.dark == "transparent",
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:bg-brand'        : arg.darkFocus == "brand",
      'dark:focus:bg-primary'      : arg.darkFocus == "primary",
      'dark:focus:bg-secondary'    : arg.darkFocus == "secondary",
      'dark:focus:bg-tertiary'     : arg.darkFocus == "tertiary",
      'dark:focus:bg-alt-b'        : arg.darkFocus == "alt",
      'dark:focus:bg-dark'         : arg.darkFocus == "dark",
      'dark:focus:bg-light'        : arg.darkFocus == "light",
      'dark:focus:bg-transparent'  : arg.darkFocus == "transparent",
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:bg-brand'        : arg.darkHover == "brand",
      'dark:hover:bg-primary'      : arg.darkHover == "primary",
      'dark:hover:bg-secondary'    : arg.darkHover == "secondary",
      'dark:hover:bg-tertiary'     : arg.darkHover == "tertiary",
      'dark:hover:bg-alt-b'        : arg.darkHover == "alt",
      'dark:hover:bg-dark'         : arg.darkHover == "dark",
      'dark:hover:bg-light'        : arg.darkHover == "light",
      'dark:hover:bg-transparent'  : arg.darkHover == "transparent",
    }
    cls = Object.assign(cls, darkHover)
  }

  return classnames(cls)
}

let bgOpacity = (arg) => {
  let cls = {}

  if(arg.light){
    let light = {
      'bg-opacity-0'    : arg.light == 0,
      'bg-opacity-5'    : arg.light == 5,
      'bg-opacity-10'   : arg.light == 10,
      'bg-opacity-20'   : arg.light == 20,
      'bg-opacity-25'   : arg.light == 25,
      'bg-opacity-50'   : arg.light == 50,
      'bg-opacity-75'   : arg.light == 75,
      'bg-opacity-80'   : arg.light == 80,
      'bg-opacity-90'   : arg.light == 90,
      'bg-opacity-100'  : arg.light == 100,
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:bg-opacity-0'    : arg.focus == 0,
      'focus:bg-opacity-5'    : arg.focus == 5,
      'focus:bg-opacity-10'   : arg.focus == 10,
      'focus:bg-opacity-20'   : arg.focus == 20,
      'focus:bg-opacity-25'   : arg.focus == 25,
      'focus:bg-opacity-50'   : arg.focus == 50,
      'focus:bg-opacity-75'   : arg.focus == 75,
      'focus:bg-opacity-80'   : arg.focus == 80,
      'focus:bg-opacity-90'   : arg.focus == 90,
      'focus:bg-opacity-100'  : arg.focus == 100,
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.hover){
    let hover = {
      'hover:bg-opacity-0'    : arg.hover == 0,
      'hover:bg-opacity-5'    : arg.hover == 5,
      'hover:bg-opacity-10'   : arg.hover == 10,
      'hover:bg-opacity-20'   : arg.hover == 20,
      'hover:bg-opacity-25'   : arg.hover == 25,
      'hover:bg-opacity-50'   : arg.hover == 50,
      'hover:bg-opacity-75'   : arg.hover == 75,
      'hover:bg-opacity-80'   : arg.hover == 80,
      'hover:bg-opacity-90'   : arg.hover == 90,
      'hover:bg-opacity-100'  : arg.hover == 100,
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.dark){
    let dark = {
      'dark:bg-opacity-0'    : arg.dark == 0,
      'dark:bg-opacity-5'    : arg.dark == 5,
      'dark:bg-opacity-10'   : arg.dark == 10,
      'dark:bg-opacity-20'   : arg.dark == 20,
      'dark:bg-opacity-25'   : arg.dark == 25,
      'dark:bg-opacity-50'   : arg.dark == 50,
      'dark:bg-opacity-75'   : arg.dark == 75,
      'dark:bg-opacity-80'   : arg.dark == 80,
      'dark:bg-opacity-90'   : arg.dark == 90,
      'dark:bg-opacity-100'  : arg.dark == 100,
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:bg-opacity-0'    : arg.darkFocus == 0,
      'dark:focus:bg-opacity-5'    : arg.darkFocus == 5,
      'dark:focus:bg-opacity-10'   : arg.darkFocus == 10,
      'dark:focus:bg-opacity-20'   : arg.darkFocus == 20,
      'dark:focus:bg-opacity-25'   : arg.darkFocus == 25,
      'dark:focus:bg-opacity-50'   : arg.darkFocus == 50,
      'dark:focus:bg-opacity-75'   : arg.darkFocus == 75,
      'dark:focus:bg-opacity-80'   : arg.darkFocus == 80,
      'dark:focus:bg-opacity-90'   : arg.darkFocus == 90,
      'dark:focus:bg-opacity-100'  : arg.darkFocus == 100,
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:bg-opacity-0'    : arg.darkHover == 0,
      'dark:hover:bg-opacity-5'    : arg.darkHover == 5,
      'dark:hover:bg-opacity-10'   : arg.darkHover == 10,
      'dark:hover:bg-opacity-20'   : arg.darkHover == 20,
      'dark:hover:bg-opacity-25'   : arg.darkHover == 25,
      'dark:hover:bg-opacity-50'   : arg.darkHover == 50,
      'dark:hover:bg-opacity-75'   : arg.darkHover == 75,
      'dark:hover:bg-opacity-80'   : arg.darkHover == 80,
      'dark:hover:bg-opacity-90'   : arg.darkHover == 90,
      'dark:hover:bg-opacity-100'  : arg.darkHover == 100,
    }
    cls = Object.assign(cls, darkHover)
  }
  return classnames(cls)
}

export default background