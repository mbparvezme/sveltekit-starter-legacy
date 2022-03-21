<script>
  import { fill } from "$lib/utility/classname"
  export let name = undefined
  export let size = 1
  export let focusable = false

  export let cls = ""
  export let color = "current",
             hoverColor = undefined,
             darkColor = undefined,
             darkHoverColor = undefined
</script>

<svg {focusable} width="{1 * size||1}rem" height="{1 * size||1}rem"
  class="{cls} {fill({light:color, hover:hoverColor, dark:darkColor, darkHover:darkHoverColor})}">
  <use href={`#${name}`}/>
</svg>

<svg aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <symbol id="icon-warning" viewBox="0 0 20 20">
      <path d="M19.511 17.98l-8.907-16.632c-0.124-0.215-0.354-0.348-0.604-0.348s-0.481 0.133-0.604 0.348l-8.906 16.632c-0.121 0.211-0.119 0.471 0.005 0.68 0.125 0.211 0.352 0.34 0.598 0.34h17.814c0.245 0 0.474-0.129 0.598-0.34 0.124-0.209 0.126-0.469 0.006-0.68zM11 17h-2v-2h2v2zM11 13.5h-2v-6.5h2v6.5z">
      </path>
    </symbol>
  </defs>
</svg>
