import classnames from 'classnames'

let border = (arg, style = "color") => {
  if(style == "color"){
    return borderColor(arg)
  }
  if(style == "opacity"){
    return borderOpacity(arg)
  }
  return "no-bg-class"
}

let borderColor = (arg) => {

  let cls = {}

  if(arg.light){
    let light = {
      'border-brand'      : arg.light == "brand",
      'border-primary'    : arg.light == "primary",
      'border-secondary'  : arg.light == "secondary",
      'border-tertiary'   : arg.light == "tertiary",
      'border-dark'       : arg.light == "dark",
      'border-light'      : arg.light == "light",
      'border-muted'      : arg.light == "muted",
      'border-alt-b'      : arg.light == "alt-b",
      'border-alt-t'      : arg.light == "alt-t",
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:border-brand'      : arg.focus == "brand",
      'focus:border-primary'    : arg.focus == "primary",
      'focus:border-secondary'  : arg.focus == "secondary",
      'focus:border-tertiary'   : arg.focus == "tertiary",
      'focus:border-dark'       : arg.focus == "dark",
      'focus:border-light'      : arg.focus == "light",
      'focus:border-muted'      : arg.focus == "muted",
      'focus:border-alt-b'      : arg.focus == "alt-b",
      'focus:border-alt-t'      : arg.focus == "alt-t",
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.hover){
    let hover = {
      'hover:border-brand'      : arg.hover == "brand",
      'hover:border-primary'    : arg.hover == "primary",
      'hover:border-secondary'  : arg.hover == "secondary",
      'hover:border-tertiary'   : arg.hover == "tertiary",
      'hover:border-dark'       : arg.hover == "dark",
      'hover:border-light'      : arg.hover == "light",
      'hover:border-muted'      : arg.hover == "muted",
      'hover:border-alt-b'      : arg.hover == "alt-b",
      'hover:border-alt-t'      : arg.hover == "alt-t",
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.dark){
    let dark = {
      'dark:border-brand'      : arg.dark == "brand",
      'dark:border-primary'    : arg.dark == "primary",
      'dark:border-secondary'  : arg.dark == "secondary",
      'dark:border-tertiary'   : arg.dark == "tertiary",
      'dark:border-dark'       : arg.dark == "dark",
      'dark:border-light'      : arg.dark == "light",
      'dark:border-muted'      : arg.dark == "muted",
      'dark:border-alt-b'      : arg.dark == "alt-b",
      'dark:border-alt-t'      : arg.dark == "alt-t",
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:border-brand'      : arg.darkFocus == "brand",
      'dark:focus:border-primary'    : arg.darkFocus == "primary",
      'dark:focus:border-secondary'  : arg.darkFocus == "secondary",
      'dark:focus:border-tertiary'   : arg.darkFocus == "tertiary",
      'dark:focus:border-dark'       : arg.darkFocus == "dark",
      'dark:focus:border-light'      : arg.darkFocus == "light",
      'dark:focus:border-muted'      : arg.darkFocus == "muted",
      'dark:focus:border-alt-b'      : arg.darkFocus == "alt-b",
      'dark:focus:border-alt-t'      : arg.darkFocus == "alt-t",
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:border-brand'      : arg.darkHover == "brand",
      'dark:hover:border-primary'    : arg.darkHover == "primary",
      'dark:hover:border-secondary'  : arg.darkHover == "secondary",
      'dark:hover:border-tertiary'   : arg.darkHover == "tertiary",
      'dark:hover:border-dark'       : arg.darkHover == "dark",
      'dark:hover:border-light'      : arg.darkHover == "light",
      'dark:hover:border-muted'      : arg.darkHover == "muted",
      'dark:hover:border-alt-b'      : arg.darkHover == "alt-b",
      'dark:hover:border-alt-t'      : arg.darkHover == "alt-t",
    }
    cls = Object.assign(cls, darkHover)
  }

  return classnames(cls)
}

let borderOpacity = (arg) => {
  let cls = {}

  if(arg.light){
    let light = {
      'border-opacity-0'    : arg.light == 0,
      'border-opacity-5'    : arg.light == 5,
      'border-opacity-10'   : arg.light == 10,
      'border-opacity-25'   : arg.light == 25,
      'border-opacity-50'   : arg.light == 50,
      'border-opacity-75'   : arg.light == 75,
      'border-opacity-100'  : arg.light == 100,
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:border-opacity-0'    : arg.focus == 0,
      'focus:border-opacity-5'    : arg.focus == 5,
      'focus:border-opacity-10'   : arg.focus == 10,
      'focus:border-opacity-25'   : arg.focus == 25,
      'focus:border-opacity-50'   : arg.focus == 50,
      'focus:border-opacity-75'   : arg.focus == 75,
      'focus:border-opacity-100'  : arg.focus == 100,
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.dark){
    let dark = {
      'dark:border-opacity-0'    : arg.dark == 0,
      'dark:border-opacity-5'    : arg.dark == 5,
      'dark:border-opacity-10'   : arg.dark == 10,
      'dark:border-opacity-25'   : arg.dark == 25,
      'dark:border-opacity-50'   : arg.dark == 50,
      'dark:border-opacity-75'   : arg.dark == 75,
      'dark:border-opacity-100'  : arg.dark == 100,
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.hover){
    let hover = {
      'hover:border-opacity-0'    : arg.hover == 0,
      'hover:border-opacity-5'    : arg.hover == 5,
      'hover:border-opacity-10'   : arg.hover == 10,
      'hover:border-opacity-25'   : arg.hover == 25,
      'hover:border-opacity-50'   : arg.hover == 50,
      'hover:border-opacity-75'   : arg.hover == 75,
      'hover:border-opacity-100'  : arg.hover == 100,
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:border-opacity-0'    : arg.darkFocus == 0,
      'dark:focus:border-opacity-5'    : arg.darkFocus == 5,
      'dark:focus:border-opacity-10'   : arg.darkFocus == 10,
      'dark:focus:border-opacity-25'   : arg.darkFocus == 25,
      'dark:focus:border-opacity-50'   : arg.darkFocus == 50,
      'dark:focus:border-opacity-75'   : arg.darkFocus == 75,
      'dark:focus:border-opacity-100'  : arg.darkFocus == 100,
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:border-opacity-0'    : arg.darkHover == 0,
      'dark:hover:border-opacity-5'    : arg.darkHover == 5,
      'dark:hover:border-opacity-10'   : arg.darkHover == 10,
      'dark:hover:border-opacity-25'   : arg.darkHover == 25,
      'dark:hover:border-opacity-50'   : arg.darkHover == 50,
      'dark:hover:border-opacity-75'   : arg.darkHover == 75,
      'dark:hover:border-opacity-100'  : arg.darkHover == 100,
    }
    cls = Object.assign(cls, darkHover)
  }
  return classnames(cls)
}

export default border