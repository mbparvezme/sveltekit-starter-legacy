import type { AnimateSpeed, BackgroundType, BackgroundVariant, OpacityType, RoundedType, ShadowColor, ShadowType } from "./types"

export let roundedClass = (setting: boolean, value: RoundedType) => {
  return  (setting && value=="sm") || value.includes('!') ? "rounded-sm" :
            (setting && value=="md") || value.includes('!') ? "rounded" :
              (setting && value=="lg") || value.includes('!') ? "rounded-lg":
                (setting && value=="xl") || value.includes('!') ? "rounded-xl":
                  (setting && value=="full") || value.includes('!') ? "rounded-full" : ""
}

export let animate = (speed: AnimateSpeed|boolean) => {
  let cls: string = ""
  if(speed !== false){
    cls = "transition-all ease-in-out "
    cls = cls + (speed=="fast" ? "duration-100" : speed=="slow" ? "duration-500" : "duration-300")
  }
  return cls
}

export let shadow = (light?: ShadowType, dark?: ShadowType, color?: ShadowColor) => {
  let cls: string = ""

  if(typeof light !== "undefined"){
    cls += light=="sm" ? "shadow-sm" : light=="lg" ? "shadow-lg" : light=="xl" ? "shadow-2xl" : "shadow"
  }

  if(typeof dark !== "undefined"){
    cls += light=="sm" ? "dark:shadow-sm" : light=="lg" ? "dark:shadow-lg" : light=="xl" ? "dark:shadow-2xl" : "dark:shadow"
  }

  if(typeof color !== "undefined"){
    cls += color=="secondary" ? "shadow-secondary" : color=="tertiary" ? "shadow-tertiary" : color=="black" ? "shadow-black" : color=="black-5" ? "shadow-black/5" : color=="black-10" ? "shadow-black/10" : color=="black-50" ? "shadow-black/50" : color=="brand" ? "shadow-brand" : color=="brand-5" ? "shadow-brand/5" : color=="brand-10" ? "shadow-brand/10" : color=="brand-50" ? "shadow-brand/50" : ""
  }
  
}

export let background = (light?: BackgroundType, focus?: BackgroundType, hover?: BackgroundType, dark?: BackgroundType, darkFocus?: BackgroundType, darkHover?: BackgroundType) => {
  let cls: string = ""

  if(typeof light !== "undefined"){
    cls += light=="transparent" ? "bg-transparent" : light=="primary" ? "bg-primary" : light=="secondary" ? "bg-secondary" : light=="tertiary" ? "bg-tertiary" : light=="brand" ? "bg-brand" : ""
  }

  if(typeof focus !== "undefined"){
    cls += focus=="transparent" ? "focus:bg-transparent" : focus=="primary" ? "focus:bg-primary" : focus=="secondary" ? "focus:bg-secondary" : focus=="tertiary" ? "focus:bg-tertiary" : focus=="brand" ? "focus:bg-brand" : ""
  }

  if(typeof hover !== "undefined"){
    cls += focus=="transparent" ? "hover:bg-transparent" : focus=="primary" ? "hover:bg-primary" : focus=="secondary" ? "hover:bg-secondary" : focus=="tertiary" ? "hover:bg-tertiary" : focus=="brand" ? "hover:bg-brand" : ""
  }

  if(typeof dark !== "undefined"){
    cls += dark=="transparent" ? "dark:bg-transparent" : dark=="primary" ? "dark:bg-primary" : dark=="secondary" ? "dark:bg-secondary" : dark=="tertiary" ? "dark:bg-tertiary" : dark=="brand" ? "dark:bg-brand" : ""
  }

  if(typeof darkFocus !== "undefined"){
    cls += darkFocus=="transparent" ? "dark:focus:bg-transparent" : darkFocus=="primary" ? "dark:focus:bg-primary" : darkFocus=="secondary" ? "dark:focus:bg-secondary" : darkFocus=="tertiary" ? "dark:focus:bg-tertiary" : darkFocus=="brand" ? "dark:focus:bg-brand" : ""
  }

  if(typeof darkHover !== "undefined"){
    cls += darkHover=="transparent" ? "dark:hover:bg-transparent" : darkHover=="primary" ? "dark:hover:bg-primary" : darkHover=="secondary" ? "dark:hover:bg-secondary" : darkHover=="tertiary" ? "dark:hover:bg-tertiary" : darkHover=="brand" ? "dark:hover:bg-brand" : ""
  }
  return cls
}