<script lang="ts">
  import { S } from "$lib/store"
  import { animate, roundedClass, shadow } "$lib/utility/classmaker"
  import { AnimateSpeed, ButtonTheme, RoundedType, ShadowColor, ShadowType } from "$lib/utility/types"

  export let label: string = ""
  export let type: string = "button"
  export let disabled: boolean = false
  export let href?: string|undefined
  export let tabindex?: number|undefined

  // Style
  export let animateSpeed: AnimateSpeed = "normal"
  export let spaceZero: boolean = false
  export let rounded: RoundedType = "md"
  export let size: "xs" | "sm" | "md" | "lg" | "xl" = "md"
  export let themeLight : ButtonTheme   = "brand"
  export let themeDark?: ButtonTheme
  export let shadowLight?: ShadowType
  export let shadowDark?: ShadowType
  export let shadowColor?: ShadowColor

  let themeClass = (light: ButtonTheme, dark: ButtonTheme): string => {
    let theme: string = ""
    if(light == "brand")  theme = "bg-brand text-on-brand"
    if(light == "dark")   theme = "bg-dark text-light"
    if(light == "light")  theme = "bg-light text-dark"
    if(light == "red")    theme = "bg-red text-light"
    if(light == "green")  theme = "bg-green text-light"
    if(light == "yellow") theme = "bg-yellow text-dark"
    if(light == "alt")    theme = "bg-alt-b text-alt-t"
    if(light == "transparent")        theme = "bg-transparent text-default"
    if(light == "transparent-brand")  theme = "bg-transparent text-brand"

    if(light == "brand-outline")  theme = "border border-brand text-brand hover:bg-brand hover:text-on-brand"
    if(light == "dark-outline")   theme = "border border-dark text-dark hover:bg-dark hover:text-light"
    if(light == "light-outline")  theme = "border border-light text-light hover:bg-light hover:text-dark"
    if(light == "red-outline")    theme = "border border-red text-red hover:bg-red hover:text-light"
    if(light == "green-outline")  theme = "border border-green text-green hover:bg-green hover:text-light"
    if(light == "yellow-outline") theme = "border border-yellow text-yellow hover:bg-yellow hover:text-dark"
    if(light == "alt-outline")    theme = "border border-alt-b text-default hover:bg-alt-b hover:text-alt-t"

    if(dark == "brand")  theme += "dark:bg-brand dark:text-on-brand"
    if(dark == "dark")   theme += "dark:bg-dark dark:text-light"
    if(dark == "light")  theme += "dark:bg-light dark:text-dark"
    if(dark == "red")    theme += "dark:bg-red dark:text-light"
    if(dark == "green")  theme += "dark:bg-green dark:text-light"
    if(dark == "yellow") theme += "dark:bg-yellow dark:text-dark"
    if(dark == "alt")    theme += "dark:bg-alt-b dark:text-alt-t"
    if(dark == "transparent")       theme = "dark:bg-transparent dark:ext-default"
    if(dark == "transparent-brand") theme = "dark:bg-transparent dark:text-brand"

    if(dark == "brand-outline")  theme += "border dark:border-brand dark:text-brand dark:hover:bg-brand dark:hover:text-on-brand"
    if(dark == "dark-outline")   theme += "border dark:border-dark dark:text-dark dark:hover:bg-dark dark:hover:text-light"
    if(dark == "light-outline")  theme += "border dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark"
    if(dark == "red-outline")    theme += "border dark:border-red dark:text-red dark:hover:bg-red dark:hover:text-light"
    if(dark == "green-outline")  theme += "border dark:border-green dark:text-green dark:hover:bg-green dark:hover:text-light"
    if(dark == "yellow-outline") theme += "border dark:border-yellow dark:text-yellow dark:hover:bg-yellow dark:hover:text-dark"
    if(dark == "alt-outline")    theme += "border dark:border-alt-b dark:text-defau;t dark:hover:bg-alt-b dark:hover:text-alt-t"

    return theme
  }

  let finalClass: string = "flex items-center justify-center gap-2 " +
                    themeClass(themeLight, themeDark)+" "+roundedClass($S.isRounded, rounded)+" "+
                    shadow(shadowLight, shadowDark, shadowColor)+" "+animate(animateSpeed)

</script>

{#if !href}
<button class="{finalClass}" {tabindex} {disabled} {type}
  on:blur on:click on:focus on:dblclick on:pointerdown
  class:btn-xs={size=="xs"}
  class:btn-sm={size=="sm"}
  class:btn-md={size=="md"}
  class:btn-lg={size=="lg"}
  class:btn-xl={size=="xl"}
  class:space-0={spaceZero}
>
  <slot name="leftItem"></slot>
  <slot name="label">{label}</slot>
  <slot name="rightItem"></slot>
</button>
{:else}
<a sveltekit:prefetch href={href} class="{finalClass}" {tabindex} {disabled}
  on:blur on:click on:focus on:dblclick on:pointerdown
  class:btn-xs={size=="xs"}
  class:btn-sm={size=="sm"}
  class:btn-md={size=="md"}
  class:btn-lg={size=="lg"}
  class:btn-xl={size=="xl"}
  class:space-0={spaceZero}
>
  <slot name="leftItem"></slot>
  <slot name="label">{label??""}</slot>
  <slot name="rightItem"></slot>
</a>
{/if}

<style lang="postcss">
  .btn-xs:not(.space-0){
    @apply p-1 text-xs;
  }
  .btn-sm:not(.space-0){
    @apply px-3 py-2 text-sm;
  }
  .btn-md:not(.space-0){
    @apply px-4 py-2.5 text-base;
  }
  .btn-lg:not(.space-0){
    @apply px-6 py-3 text-lg;
  }
  .btn-xl:not(.space-0){
    @apply px-8 py-4 text-xl;
  }
</style>