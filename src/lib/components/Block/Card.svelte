<script>
  import { S }  from "$lib/stores"
  import { background, padding, shadow, round } from "$lib/utility/classname"

  export let cls = ""
  // Style
  export let px = 8,
             py = 8,
             mdPx = undefined,
             mdPy = undefined,

             bgColor = "primary",
             bgHoverColor = undefined,
             bgDarkColor = undefined,
             bgDarkHoverColor = undefined,

             bgOpacity = undefined,
             bgHoverOpacity = undefined,
             bgDarkOpacity = undefined,
             bgDarkHoverOpacity = undefined,

             rounded = "md"

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

  let classes = background(bgColorObj) + " " + background(bgOpacityObj,"opacity") + " " +
                padding({px, py, mdPx, mdPy}) + " "+ round({default: rounded}, $S.isRounded)
</script>

<div class="relative fill {cls} {classes}">
  <slot />
</div>
