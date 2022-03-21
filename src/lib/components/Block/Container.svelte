<script>
  import { background, padding } from "$lib/utility/classname"

  export let cls = ""
  // Style
  export let px = 8,
             py = 24,
             mdPx = 16,
             mdPy = undefined,

             bgColor = "transparent",
             bgHoverColor = undefined,
             bgDarkColor = undefined,
             bgDarkHoverColor = undefined,

             bgOpacity = undefined,
             bgHoverOpacity = undefined,
             bgDarkOpacity = undefined,
             bgDarkHoverOpacity = undefined,

             bgPosition = "center",
             mouseParallax  = false,
             scrollParallax = false

  let bgColorObj = {
    light: bgColor,
    hover: bgHoverColor,
    dark: bgDarkColor,
    darkHover: bgDarkHoverColor
  }

  let bgOpacityObj = {
    light: bgOpacity,
    hover: bgHoverOpacity,
    dark: bgDarkOpacity,
    darkHover: bgDarkHoverOpacity,
  }

  let classes = background(bgColorObj)+" "+background(bgOpacityObj,"opacity")+" "+padding({px,py,mdPx,mdPy})
</script>

<section class="relative {cls} {classes}"
  class:bg-center={bgPosition=="center"}
  class:bg-right={bgPosition=="right"}
  class:scrollParallaxGroup={scrollParallax}
  class:mouseParallaxGroup={mouseParallax}
>
  <slot></slot>
</section>