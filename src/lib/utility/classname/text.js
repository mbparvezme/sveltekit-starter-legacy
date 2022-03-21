import classnames from 'classnames'

let text = (arg, style = "color") => {
  if(style == "color"){
    return textColor(arg)
  }
  if(style == "opacity"){
    return textOpacity(arg)
  }
  if(style == "size"){
    return textSize(arg)
  }
  return ""
}

let textColor = (arg) => {
  let cls = {}

  if(arg.light){
    let light = {
      'text-brand'    : arg.light == "brand",
      'text-on-brand' : arg.light == "on-brand",
      'text-default'  : arg.light == "default",
      'text-muted'    : arg.light == "muted",
      'text-light'    : arg.light == "light",
      'text-dark'     : arg.light == "dark",
      'text-alt-t'    : arg.light == "alt",
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:text-brand'    : arg.focus == "brand",
      'focus:text-on-brand' : arg.focus == "on-brand",
      'focus:text-default'  : arg.focus == "default",
      'focus:text-muted'    : arg.focus == "muted",
      'focus:text-light'    : arg.focus == "light",
      'focus:text-dark'     : arg.focus == "dark",
      'focus:text-alt-t'    : arg.focus == "alt",
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.hover){
    let hover = {
      'hover:text-brand'    : arg.hover == "brand",
      'hover:text-on-brand' : arg.hover == "on-brand",
      'hover:text-default'  : arg.hover == "default",
      'hover:text-muted'    : arg.hover == "muted",
      'hover:text-light'    : arg.hover == "light",
      'hover:text-dark'     : arg.hover == "dark",
      'hover:text-alt-t'    : arg.hover == "alt",
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.dark){
    let dark = {
      'dark:text-brand'    : arg.dark == "brand",
      'dark:text-on-brand' : arg.dark == "on-brand",
      'dark:text-default'  : arg.dark == "default",
      'dark:text-muted'    : arg.dark == "muted",
      'dark:text-light'    : arg.dark == "light",
      'dark:text-dark'     : arg.dark == "dark",
      'dark:text-alt-t'    : arg.dark == "alt",
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:text-brand'    : arg.darkFocus == "brand",
      'dark:focus:text-on-brand' : arg.darkFocus == "on-brand",
      'dark:focus:text-default'  : arg.darkFocus == "default",
      'dark:focus:text-muted'    : arg.darkFocus == "muted",
      'dark:focus:text-light'    : arg.darkFocus == "light",
      'dark:focus:text-dark'     : arg.darkFocus == "dark",
      'dark:focus:text-alt-t'    : arg.darkFocus == "alt",
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:text-brand'    : arg.darkHover == "brand",
      'dark:hover:text-on-brand' : arg.darkHover == "on-brand",
      'dark:hover:text-default'  : arg.darkHover == "default",
      'dark:hover:text-muted'    : arg.darkHover == "muted",
      'dark:hover:text-light'    : arg.darkHover == "light",
      'dark:hover:text-dark'     : arg.darkHover == "dark",
      'dark:hover:text-alt-t'    : arg.darkHover == "alt",
    }
    cls = Object.assign(cls, darkHover)
  }

  return classnames(cls)
}

let textOpacity = (arg) => {
  let cls = {}

  if(arg.light){
    let light = {
      'text-opacity-0'    : arg.light == 0,
      'text-opacity-5'    : arg.light == 5,
      'text-opacity-10'   : arg.light == 10,
      'text-opacity-20'   : arg.light == 20,
      'text-opacity-25'   : arg.light == 25,
      'text-opacity-50'   : arg.light == 50,
      'text-opacity-75'   : arg.light == 75,
      'text-opacity-80'   : arg.light == 80,
      'text-opacity-90'   : arg.light == 90,
      'text-opacity-100'  : arg.light == 100,
    }
    cls = Object.assign(cls, light)
  }

  if(arg.focus){
    let focus = {
      'focus:text-opacity-0'    : arg.focus == 0,
      'focus:text-opacity-5'    : arg.focus == 5,
      'focus:text-opacity-10'   : arg.focus == 10,
      'focus:text-opacity-20'   : arg.focus == 20,
      'focus:text-opacity-25'   : arg.focus == 25,
      'focus:text-opacity-50'   : arg.focus == 50,
      'focus:text-opacity-75'   : arg.focus == 75,
      'focus:text-opacity-80'   : arg.focus == 80,
      'focus:text-opacity-90'   : arg.focus == 90,
      'focus:text-opacity-100'  : arg.focus == 100,
    }
    cls = Object.assign(cls, focus)
  }

  if(arg.hover){
    let hover = {
      'hover:text-opacity-0'    : arg.hover == 0,
      'hover:text-opacity-5'    : arg.hover == 5,
      'hover:text-opacity-10'   : arg.hover == 10,
      'hover:text-opacity-20'   : arg.hover == 20,
      'hover:text-opacity-25'   : arg.hover == 25,
      'hover:text-opacity-50'   : arg.hover == 50,
      'hover:text-opacity-75'   : arg.hover == 75,
      'hover:text-opacity-80'   : arg.hover == 80,
      'hover:text-opacity-90'   : arg.hover == 90,
      'hover:text-opacity-100'  : arg.hover == 100,
    }
    cls = Object.assign(cls, hover)
  }

  if(arg.dark){
    let dark = {
      'dark:text-opacity-0'    : arg.dark == 0,
      'dark:text-opacity-5'    : arg.dark == 5,
      'dark:text-opacity-10'   : arg.dark == 10,
      'dark:text-opacity-20'   : arg.dark == 20,
      'dark:text-opacity-25'   : arg.dark == 25,
      'dark:text-opacity-50'   : arg.dark == 50,
      'dark:text-opacity-75'   : arg.dark == 75,
      'dark:text-opacity-80'   : arg.dark == 80,
      'dark:text-opacity-90'   : arg.dark == 90,
      'dark:text-opacity-100'  : arg.dark == 100,
    }
    cls = Object.assign(cls, dark)
  }

  if(arg.darkFocus){
    let darkFocus = {
      'dark:focus:text-opacity-0'    : arg.darkFocus == 0,
      'dark:focus:text-opacity-5'    : arg.darkFocus == 5,
      'dark:focus:text-opacity-10'   : arg.darkFocus == 10,
      'dark:focus:text-opacity-20'   : arg.darkFocus == 20,
      'dark:focus:text-opacity-25'   : arg.darkFocus == 25,
      'dark:focus:text-opacity-50'   : arg.darkFocus == 50,
      'dark:focus:text-opacity-75'   : arg.darkFocus == 75,
      'dark:focus:text-opacity-80'   : arg.darkFocus == 80,
      'dark:focus:text-opacity-90'   : arg.darkFocus == 90,
      'dark:focus:text-opacity-100'  : arg.darkFocus == 100,
    }
    cls = Object.assign(cls, darkFocus)
  }

  if(arg.darkHover){
    let darkHover = {
      'dark:hover:text-opacity-0'    : arg.darkHover == 0,
      'dark:hover:text-opacity-5'    : arg.darkHover == 5,
      'dark:hover:text-opacity-10'   : arg.darkHover == 10,
      'dark:hover:text-opacity-20'   : arg.darkHover == 20,
      'dark:hover:text-opacity-25'   : arg.darkHover == 25,
      'dark:hover:text-opacity-50'   : arg.darkHover == 50,
      'dark:hover:text-opacity-75'   : arg.darkHover == 75,
      'dark:hover:text-opacity-80'   : arg.darkHover == 80,
      'dark:hover:text-opacity-90'   : arg.darkHover == 90,
      'dark:hover:text-opacity-100'  : arg.darkHover == 100,
    }
    cls = Object.assign(cls, darkHover)
  }
  return classnames(cls)
}

// arg = {default, xs, sm, md, lg, xl, xxxl}
let textSize = (arg) => {
  let cls = {}

  if(arg.default){
    let common = {
      'text-xs'   : arg.default == "xs",
      'text-sm'   : arg.default == "sm",
      'text-base' : arg.default == "base",
      'text-lg'   : arg.default == "lg",
      'text-xl'   : arg.default == "xl",
      'text-2xl'  : arg.default == "2xl",
      'text-3xl'  : arg.default == "3xl",
      'text-4xl'  : arg.default == "4xl",
      'text-5xl'  : arg.default == "5xl",
      'text-6xl'  : arg.default == "6xl",
      'text-7xl'  : arg.default == "7xl",
      'text-8xl'  : arg.default == "8xl",
      'text-9xl'  : arg.default == "9xl",
    }
    cls = Object.assign(cls, common)
  }

  if(arg.xs){
    let xs = {
      'xs:text-xs'   : arg.xs == "xs",
      'xs:text-sm'   : arg.xs == "sm",
      'xs:text-base' : arg.xs == "base",
      'xs:text-lg'   : arg.xs == "lg",
      'xs:text-xl'   : arg.xs == "xl",
      'xs:text-2xl'  : arg.xs == "2xl",
      'xs:text-3xl'  : arg.xs == "3xl",
      'xs:text-4xl'  : arg.xs == "4xl",
      'xs:text-5xl'  : arg.xs == "5xl",
      'xs:text-6xl'  : arg.xs == "6xl",
      'xs:text-7xl'  : arg.xs == "7xl",
      'xs:text-8xl'  : arg.xs == "8xl",
      'xs:text-9xl'  : arg.xs == "9xl",
    }
    cls = Object.assign(cls, xs)
  }

  if(arg.sm){
    let sm = {
      'sm:text-xs'   : arg.sm == "xs",
      'sm:text-sm'   : arg.sm == "sm",
      'sm:text-base' : arg.sm == "base",
      'sm:text-lg'   : arg.sm == "lg",
      'sm:text-xl'   : arg.sm == "xl",
      'sm:text-2xl'  : arg.sm == "2xl",
      'sm:text-3xl'  : arg.sm == "3xl",
      'sm:text-4xl'  : arg.sm == "4xl",
      'sm:text-5xl'  : arg.sm == "5xl",
      'sm:text-6xl'  : arg.sm == "6xl",
      'sm:text-7xl'  : arg.sm == "7xl",
      'sm:text-8xl'  : arg.sm == "8xl",
      'sm:text-9xl'  : arg.sm == "9xl",
    }
    cls = Object.assign(cls, sm)
  }

  if(arg.md){
    let md = {
      'md:text-xs'   : arg.md == "xs",
      'md:text-sm'   : arg.md == "sm",
      'md:text-base' : arg.md == "base",
      'md:text-lg'   : arg.md == "lg",
      'md:text-xl'   : arg.md == "xl",
      'md:text-2xl'  : arg.md == "2xl",
      'md:text-3xl'  : arg.md == "3xl",
      'md:text-4xl'  : arg.md == "4xl",
      'md:text-5xl'  : arg.md == "5xl",
      'md:text-6xl'  : arg.md == "6xl",
      'md:text-7xl'  : arg.md == "7xl",
      'md:text-8xl'  : arg.md == "8xl",
      'md:text-9xl'  : arg.md == "9xl",
    }
    cls = Object.assign(cls, md)
  }

  if(arg.lg){
    let lg = {
      'lg:text-xs'   : arg.lg == "xs",
      'lg:text-sm'   : arg.lg == "sm",
      'lg:text-base' : arg.lg == "base",
      'lg:text-lg'   : arg.lg == "lg",
      'lg:text-xl'   : arg.lg == "xl",
      'lg:text-2xl'  : arg.lg == "2xl",
      'lg:text-3xl'  : arg.lg == "3xl",
      'lg:text-4xl'  : arg.lg == "4xl",
      'lg:text-5xl'  : arg.lg == "5xl",
      'lg:text-6xl'  : arg.lg == "6xl",
      'lg:text-7xl'  : arg.lg == "7xl",
      'lg:text-8xl'  : arg.lg == "8xl",
      'lg:text-9xl'  : arg.lg == "9xl",
    }
    cls = Object.assign(cls, lg)
  }

  if(arg.xl){
    let xl = {
      'xl:text-xs'   : arg.xl == "xs",
      'xl:text-sm'   : arg.xl == "sm",
      'xl:text-base' : arg.xl == "base",
      'xl:text-lg'   : arg.xl == "lg",
      'xl:text-xl'   : arg.xl == "xl",
      'xl:text-2xl'  : arg.xl == "2xl",
      'xl:text-3xl'  : arg.xl == "3xl",
      'xl:text-4xl'  : arg.xl == "4xl",
      'xl:text-5xl'  : arg.xl == "5xl",
      'xl:text-6xl'  : arg.xl == "6xl",
      'xl:text-7xl'  : arg.xl == "7xl",
      'xl:text-8xl'  : arg.xl == "8xl",
      'xl:text-9xl'  : arg.xl == "9xl",
    }
    cls = Object.assign(cls, xl)
  }

  if(arg.xxxl){
    let xxxl = {
      'xxxl:text-xs'   : arg.xxxl == "xs",
      'xxxl:text-sm'   : arg.xxxl == "sm",
      'xxxl:text-base' : arg.xxxl == "base",
      'xxxl:text-lg'   : arg.xxxl == "lg",
      'xxxl:text-xl'   : arg.xxxl == "xl",
      'xxxl:text-2xl'  : arg.xxxl == "2xl",
      'xxxl:text-3xl'  : arg.xxxl == "3xl",
      'xxxl:text-4xl'  : arg.xxxl == "4xl",
      'xxxl:text-5xl'  : arg.xxxl == "5xl",
      'xxxl:text-6xl'  : arg.xxxl == "6xl",
      'xxxl:text-7xl'  : arg.xxxl == "7xl",
      'xxxl:text-8xl'  : arg.xxxl == "8xl",
      'xxxl:text-9xl'  : arg.xxxl == "9xl",
    }
    cls = Object.assign(cls, xxxl)
  }

  return classnames(cls)
}

export default text