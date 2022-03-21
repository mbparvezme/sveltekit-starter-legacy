import classnames from 'classnames'

let fill = (arg) => {
  let cls = {}

  if(arg.light){
    let light = {
      'fill-brand'        : arg.light == "brand",
      'fill-on-brand'     : arg.light == "on-brand",
      'fill-default'      : arg.light == "default",
      'fill-muted'        : arg.light == "muted",
      'fill-primary'      : arg.light == "primary",
      'fill-secondary'    : arg.light == "secondary",
      'fill-tertiary'     : arg.light == "tertiary",
      'fill-alt-b'        : arg.light == "alt-b",
      'fill-alt-t'        : arg.light == "alt-t",
      'fill-dark'         : arg.light == "dark",
      'fill-light'        : arg.light == "light",
      'fill-transparent'  : arg.light == "transparent",
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:fill-brand'        : arg.focus == "brand",
      'focus:fill-on-brand'     : arg.focus == "on-brand",
      'focus:fill-default'      : arg.focus == "default",
      'focus:fill-muted'        : arg.focus == "muted",
      'focus:fill-primary'      : arg.focus == "primary",
      'focus:fill-secondary'    : arg.focus == "secondary",
      'focus:fill-tertiary'     : arg.focus == "tertiary",
      'focus:fill-alt-b'        : arg.focus == "alt-b",
      'focus:fill-alt-t'        : arg.focus == "alt-t",
      'focus:fill-dark'         : arg.focus == "dark",
      'focus:fill-light'        : arg.focus == "light",
      'focus:fill-transparent'  : arg.focus == "transparent",
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.hover){
    let hover = {
      'hover:fill-brand'        : arg.hover == "brand",
      'hover:fill-on-brand'     : arg.hover == "on-brand",
      'hover:fill-default'      : arg.hover == "default",
      'hover:fill-muted'        : arg.hover == "muted",
      'hover:fill-primary'      : arg.hover == "primary",
      'hover:fill-secondary'    : arg.hover == "secondary",
      'hover:fill-tertiary'     : arg.hover == "tertiary",
      'hover:fill-alt-b'        : arg.hover == "alt-b",
      'hover:fill-alt-t'        : arg.hover == "alt-t",
      'hover:fill-dark'         : arg.hover == "dark",
      'hover:fill-light'        : arg.hover == "light",
      'hover:fill-transparent'  : arg.hover == "transparent",
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.dark){
    let dark = {
      'dark:fill-brand'        : arg.dark == "brand",
      'dark:fill-on-brand'     : arg.dark == "on-brand",
      'dark:fill-default'      : arg.dark == "default",
      'dark:fill-muted'        : arg.dark == "muted",
      'dark:fill-primary'      : arg.dark == "primary",
      'dark:fill-secondary'    : arg.dark == "secondary",
      'dark:fill-tertiary'     : arg.dark == "tertiary",
      'dark:fill-alt-b'        : arg.dark == "alt-b",
      'dark:fill-alt-t'        : arg.dark == "alt-t",
      'dark:fill-dark'         : arg.dark == "dark",
      'dark:fill-light'        : arg.dark == "light",
      'dark:fill-transparent'  : arg.dark == "transparent",
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:fill-brand'        : arg.darkFocus == "brand",
      'dark:focus:fill-on-brand'     : arg.darkFocus == "on-brand",
      'dark:focus:fill-default'      : arg.darkFocus == "default",
      'dark:focus:fill-muted'        : arg.darkFocus == "muted",
      'dark:focus:fill-primary'      : arg.darkFocus == "primary",
      'dark:focus:fill-secondary'    : arg.darkFocus == "secondary",
      'dark:focus:fill-tertiary'     : arg.darkFocus == "tertiary",
      'dark:focus:fill-alt-b'        : arg.darkFocus == "alt-b",
      'dark:focus:fill-alt-t'        : arg.darkFocus == "alt-t",
      'dark:focus:fill-dark'         : arg.darkFocus == "dark",
      'dark:focus:fill-light'        : arg.darkFocus == "light",
      'dark:focus:fill-transparent'  : arg.darkFocus == "transparent",
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:fill-brand'        : arg.darkHover == "brand",
      'dark:hover:fill-on-brand'     : arg.darkHover == "on-brand",
      'dark:hover:fill-default'      : arg.darkHover == "default",
      'dark:hover:fill-muted'        : arg.darkHover == "muted",
      'dark:hover:fill-primary'      : arg.darkHover == "primary",
      'dark:hover:fill-secondary'    : arg.darkHover == "secondary",
      'dark:hover:fill-tertiary'     : arg.darkHover == "tertiary",
      'dark:hover:fill-alt-b'        : arg.darkHover == "alt-b",
      'dark:hover:fill-alt-t'        : arg.darkHover == "alt-t",
      'dark:hover:fill-dark'         : arg.darkHover == "dark",
      'dark:hover:fill-light'        : arg.darkHover == "light",
      'dark:hover:fill-transparent'  : arg.darkHover == "transparent",
    }
    cls = Object.assign(cls, darkHover)
  }

  return classnames(cls)
}

export default fill