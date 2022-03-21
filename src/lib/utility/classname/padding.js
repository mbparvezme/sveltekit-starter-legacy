import classnames from 'classnames'

let padding = (arg) => {
  let cls = {}

  if(arg.px){
    let px = {
      'px-0'      : arg.px == 0,
      'px-2'      : arg.px == 2,
      'px-3'      : arg.px == 3,
      'px-4'      : arg.px == 4,
      'px-6'      : arg.px == 6,
      'px-8'      : arg.px == 8,
      'px-16'     : arg.px == 16
    }
    cls = Object.assign(cls, px)
  }

  if(arg.py){
    let py = {
       'py-0' : arg.py  == 0,
       'py-2' : arg.py  == 2,
       'py-3' : arg.py  == 3,
       'py-4' : arg.py  == 4,
       'py-6' : arg.py  == 6,
       'py-8' : arg.py  == 8,
      'py-16' : arg.py  == 16,
      'py-24' : arg.py  == 24,
      'py-32' : arg.py  == 32,
      'py-40' : arg.py  == 40,
      'py-48' : arg.py  == 48,
    }
    cls = Object.assign(cls, py)
  }

  if(arg.mdPx){
    let mdPx = {
      'md:px-0'      : arg.mdPx == 0,
      'md:px-2'      : arg.mdPx == 2,
      'md:px-3'      : arg.mdPx == 3,
      'md:px-4'      : arg.mdPx == 4,
      'md:px-6'      : arg.mdPx == 6,
      'md:px-8'      : arg.mdPx == 8,
      'md:px-16'     : arg.mdPx == 16
    }
    cls = Object.assign(cls, mdPx)
  }

  if(arg.mdPy){
    let mdPy = {
       'md:py-0' : arg.mdPy  == 0,
       'md:py-2' : arg.mdPy  == 2,
       'md:py-3' : arg.mdPy  == 3,
       'md:py-4' : arg.mdPy  == 4,
       'md:py-6' : arg.mdPy  == 6,
       'md:py-8' : arg.mdPy  == 8,
      'md:py-16' : arg.mdPy  == 16,
      'md:py-24' : arg.mdPy  == 24,
      'md:py-32' : arg.mdPy  == 32,
      'md:py-40' : arg.mdPy  == 40,
      'md:py-48' : arg.mdPy  == 48,
    }
    cls = Object.assign(cls, mdPy)
  }

  return classnames(cls)

}

export default padding