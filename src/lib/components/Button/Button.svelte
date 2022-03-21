<script>
  import { S } from "$lib/stores"
  import { background, border, text, round } from "$lib/utility/classname"
  export let disabled = false
  export let label    = undefined
  export let href     = undefined

  export let animateSpeed = "normal" // {normal: 300, fast: 100, slow: 500}
  export let type = "button"
  export let cls = undefined
  export let spaceZero = false

  // Style
  export let  size = "md", //px = 4, py = 2, mdpx, mdpy,
              rounded = "md",

              textColor = "on-brand",
              textFocusColor = undefined,
              textHoverColor = undefined,
              textDarkColor = undefined,
              textDarkFocusColor = undefined,
              textDarkHoverColor = undefined,

              outline = undefined,
              outlineFocus = undefined,
              outlineHover = undefined,
              outlineDark = undefined,
              outlineDarkFocus = undefined,
              outlineDarkHover = undefined,

              bgColor = outline ? undefined : "brand",
              bgFocusColor = undefined,
              bgHoverColor = undefined,
              bgDarkColor = undefined,
              bgDarkFocusColor = undefined,
              bgDarkHoverColor = undefined,

              width = "auto",
              align = "center"

  let textColorObj = {
    light: textColor,
    focus: textFocusColor,
    hover: textHoverColor,
    dark: textDarkColor,
    darkFocus: textDarkFocusColor,
    darkHover: textDarkHoverColor
  }

  let bgColorObj = {
    light: bgColor,
    focus: bgFocusColor,
    hover: bgHoverColor,
    dark: bgDarkColor,
    darkfocus: bgDarkFocusColor,
    darkHover: bgDarkHoverColor
  }

  let borderColorObj = {
    light: outline,
    focus: outlineFocus,
    hover: outlineHover,
    dark: outlineDark,
    darkFocus: outlineDarkFocus,
    darkHover: outlineDarkHover
  }

  let classes = text(textColorObj) + " " + background(bgColorObj) + " " +
                (outline ? border(borderColorObj):"") + " " +
                round({default: rounded}, $S.isRounded) + " " +
                (animateSpeed == "fast" ? 'duration-100': (animateSpeed == "slow" ? 'duration-500': 'duration-300'))
</script>

{#if !href}
<button class="flex items-center transition-all ease-in-out gap-2 {cls} {classes}"

    class:space-0={spaceZero}
    class:w-auto={width=="auto"}
    class:w-full={width=="full"}

    class:btn-xs={size=="xs"}
    class:btn-sm={size=="sm"}
    class:btn-md={size=="md"}
    class:btn-lg={size=="lg"}
    class:btn-xl={size=="xl"}

    class:justify-start={align=="start"}
    class:justify-center={align=="center"}
    class:justify-end={align=="end"}
    class:justify-between={align=="between"}

    class:rounded-sm={$S.isRounded && rounded=="sm"}
    class:rounded-md={$S.isRounded && rounded=="md"}
    class:rounded-lg={$S.isRounded && rounded=="lg"}
    class:rounded-xl={$S.isRounded && rounded=="xl"}
    class:rounded-full={$S.isRounded && rounded=="full"}

    class:border={outline}

    {disabled}

    {type}

    on:blur
    on:click
    on:focus
    on:dblclick
    on:pointerdown
  >
    <slot name="leftItem"></slot>
    <slot name="label">{label??""}</slot>
    <slot name="rightItem"></slot>
  </button>
  {:else}
  <a href={href} class="flex items-center {cls} {classes}"

    class:rounded-sm={$S.isRounded && rounded=="sm"}
    class:rounded-md={$S.isRounded && rounded=="md"}
    class:rounded-lg={$S.isRounded && rounded=="lg"}
    class:rounded-xl={$S.isRounded && rounded=="xl"}
    class:rounded-full={$S.isRounded && rounded=="full"}

    class:btn-xs={size=="xs"}
    class:btn-sm={size=="sm"}
    class:btn-md={size=="md"}
    class:btn-lg={size=="lg"}
    class:btn-xl={size=="xl"}

    class:w-auto={width=="auto"}
    class:w-full={width=="full"}

    class:justify-start={align=="start"}
    class:justify-center={align=="center"}
    class:justify-end={align=="end"}
    class:justify-between={align=="between"}

    class:border={outline}
    {disabled}

    on:blur
    on:click
    on:focus
    on:dblclick
    on:pointerdown
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
    @apply px-4 py-3 text-base;
  }
  .btn-lg:not(.space-0){
    @apply px-6 py-3 text-lg;
  }
  .btn-xl:not(.space-0){
    @apply px-8 py-4 text-xl;
  }
</style>