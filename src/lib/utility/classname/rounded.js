import classnames from 'classnames'

// arg {default, xs, sm, md, lg, xl, xxxl}
let rounded = (arg) => {
  let cls = {}

  if(arg.default){
    let common = {
      'rounded-none'  : arg.default == "none",
      'rounded-sm'    : arg.default == "sm",
      'rounded'       : arg.default == "default",
      'rounded-md'    : arg.default == "md",
      'rounded-lg'    : arg.default == "lg",
      'rounded-xl'    : arg.default == "xl",
      'rounded-2xl'   : arg.default == "2xl",
      'rounded-3xl'   : arg.default == "3xl",
    }
    cls = Object.assign(cls, common)
  }

  if(arg.xs){
    let xs = {
      'xs:rounded-none'  : arg.xs == "none",
      'xs:rounded-sm'    : arg.xs == "sm",
      'xs:rounded'       : arg.xs == "default",
      'xs:rounded-md'    : arg.xs == "md",
      'xs:rounded-lg'    : arg.xs == "lg",
      'xs:rounded-xl'    : arg.xs == "xl",
      'xs:rounded-2xl'   : arg.xs == "2xl",
      'xs:rounded-3xl'   : arg.xs == "3xl",
    }
    cls = Object.assign(cls, xs)
  }

  if(arg.sm){
    let sm = {
      'sm:rounded-none'  : arg.sm == "none",
      'sm:rounded-sm'    : arg.sm == "sm",
      'sm:rounded'       : arg.sm == "default",
      'sm:rounded-md'    : arg.sm == "md",
      'sm:rounded-lg'    : arg.sm == "lg",
      'sm:rounded-xl'    : arg.sm == "xl",
      'sm:rounded-2xl'   : arg.sm == "2xl",
      'sm:rounded-3xl'   : arg.sm == "3xl",
    }
    cls = Object.assign(cls, sm)
  }

  if(arg.md){
    let md = {
      'md:rounded-none'  : arg.md == "none",
      'md:rounded-sm'    : arg.md == "sm",
      'md:rounded'       : arg.md == "default",
      'md:rounded-md'    : arg.md == "md",
      'md:rounded-lg'    : arg.md == "lg",
      'md:rounded-xl'    : arg.md == "xl",
      'md:rounded-2xl'   : arg.md == "2xl",
      'md:rounded-3xl'   : arg.md == "3xl",
    }
    cls = Object.assign(cls, md)
  }

  if(arg.lg){
    let lg = {
      'lg:rounded-none'  : arg.lg == "none",
      'lg:rounded-sm'    : arg.lg == "sm",
      'lg:rounded'       : arg.lg == "default",
      'lg:rounded-md'    : arg.lg == "md",
      'lg:rounded-lg'    : arg.lg == "lg",
      'lg:rounded-xl'    : arg.lg == "xl",
      'lg:rounded-2xl'   : arg.lg == "2xl",
      'lg:rounded-3xl'   : arg.lg == "3xl",
    }
    cls = Object.assign(cls, lg)
  }

  if(arg.xl){
    let xl = {
      'xl:rounded-none'  : arg.xl == "none",
      'xl:rounded-sm'    : arg.xl == "sm",
      'xl:rounded'       : arg.xl == "default",
      'xl:rounded-md'    : arg.xl == "md",
      'xl:rounded-lg'    : arg.xl == "lg",
      'xl:rounded-xl'    : arg.xl == "xl",
      'xl:rounded-2xl'   : arg.xl == "2xl",
      'xl:rounded-3xl'   : arg.xl == "3xl",
    }
    cls = Object.assign(cls, xl)
  }

  if(arg.xxxl){
    let xxxl = {
      'xxxl:rounded-none'  : arg.xxxl == "none",
      'xxxl:rounded-sm'    : arg.xxxl == "sm",
      'xxxl:rounded'       : arg.xxxl == "default",
      'xxxl:rounded-md'    : arg.xxxl == "md",
      'xxxl:rounded-lg'    : arg.xxxl == "lg",
      'xxxl:rounded-xl'    : arg.xxxl == "xl",
      'xxxl:rounded-2xl'   : arg.xxxl == "2xl",
      'xxxl:rounded-3xl'   : arg.xxxl == "3xl",
    }
    cls = Object.assign(cls, xxxl)
  }

  return classnames(cls)
}

export default rounded