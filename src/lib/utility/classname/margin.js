import classnames from 'classnames'

let margin = (arg) => {
  let cls = {}

  if(arg.mx){
    let mx = {
      'mx-0'      : arg.mx == 0,
      'mx-2'      : arg.mx == 2,
      'mx-3'      : arg.mx == 3,
      'mx-4'      : arg.mx == 4,
      'mx-6'      : arg.mx == 6,
      'mx-8'      : arg.mx == 8,
      'mx-16'     : arg.mx == 16
    }
    cls = Object.assign(cls, mx)
  }

  if(arg.my){
    let my = {
       'my-0' : arg.my  == 0,
       'my-2' : arg.my  == 2,
       'my-3' : arg.my  == 3,
       'my-4' : arg.my  == 4,
       'my-6' : arg.my  == 6,
       'my-8' : arg.my  == 8,
      'my-16' : arg.my  == 16,
      'my-24' : arg.my  == 24,
      'my-32' : arg.my  == 32,
      'my-40' : arg.my  == 40,
      'my-48' : arg.my  == 48,
    }
    cls = Object.assign(cls, my)
  }

  if(arg.mdMx){
    let mdMx = {
      'md:mx-0'      : arg.mdMx == 0,
      'md:mx-2'      : arg.mdMx == 2,
      'md:mx-3'      : arg.mdMx == 3,
      'md:mx-4'      : arg.mdMx == 4,
      'md:mx-6'      : arg.mdMx == 6,
      'md:mx-8'      : arg.mdMx == 8,
      'md:mx-16'     : arg.mdMx == 16
    }
    cls = Object.assign(cls, mdMx)
  }

  if(arg.mdMy){
    let mdMy = {
       'md:my-0' : arg.mdMy  == 0,
       'md:my-2' : arg.mdMy  == 2,
       'md:my-3' : arg.mdMy  == 3,
       'md:my-4' : arg.mdMy  == 4,
       'md:my-6' : arg.mdMy  == 6,
       'md:my-8' : arg.mdMy  == 8,
      'md:my-16' : arg.mdMy  == 16,
      'md:my-24' : arg.mdMy  == 24,
      'md:my-32' : arg.mdMy  == 32,
      'md:my-40' : arg.mdMy  == 40,
      'md:my-48' : arg.mdMy  == 48,
    }
    cls = Object.assign(cls, mdMy)
  }

  return classnames(cls)

}

export default margin