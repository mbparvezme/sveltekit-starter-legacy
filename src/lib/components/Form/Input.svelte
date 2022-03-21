<script>
  import { S } from "$lib/stores"
  import { background, border, text, round } from "$lib/utility/classname"
  import { Label } from "$lib/components"

  export let  style = "default", // default, flat
              label = undefined,
              type = "text",
              name = undefined,
              placeholder = undefined,
              required = true,
              readonly = false,
              value = "",
              cls = "",
              direction = "col",
              animateSpeed = "normal",  // {normal: 300, fast: 100, slow: 500}
              rows = 3, // Textarea
              data = undefined // Select

  export let  size = "md",
              mb = 8,
              grow = false,
              rounded = "md",

              textColor = undefined,
              textFocucColor = undefined,
              textDarkColor = undefined,
              textDarkFocucColor = undefined,

              bgColor = "transparent",
              bgFocucColor = undefined,
              bgDarkColor = "transparent",
              bgDarkFocucColor = undefined,

              borderOpacity = 25,
              borderFocucOpacity = undefined,
              borderDarkOpacity = undefined,
              borderDarkFocucOpacity = undefined,

              outline = "dark",
              outlineFocus = undefined,
              outlineDark = "tertiary",
              outlineDarkFocus = undefined,

              outlineOpacity = "dark",
              outlineFocusOpacity = undefined,
              outlineDarkOpacity = "tertiary",
              outlineDarkFocusOpacity = undefined,

              labelColor = undefined,
              labelDarkColor = undefined,
              labelWeight = undefined,
              labelDarkWeight = undefined,
              labelFontSize = undefined,
              labelMdFontSize = undefined,
              labelLgFontSize = undefined,
              labelXlFontSize = undefined

  let textColorObj = {
    light: textColor,
    focus: textFocucColor,
    dark: textDarkColor,
    darkFocus: textDarkFocucColor
  }  
  let bgColorObj = {
    light: bgColor,
    focus: bgFocucColor,
    dark: bgDarkColor,
    darkFocus: bgDarkFocucColor
  }
  let bgOpacityObj = {
    light: borderOpacity,
    focus: borderFocucOpacity,
    dark: borderDarkOpacity,
    darkFocus: borderDarkFocucOpacity
  }
  let outlineObj = {
    light: outline,
    focus: outlineFocus,
    dark: outlineDark,
    darkFocus: outlineDarkFocus
  }
  let outlineOpacityObj = {
    light: outlineOpacity,
    focus: outlineFocusOpacity,
    dark: outlineDarkOpacity,
    darkFocus: outlineDarkFocusOpacity
  }

  let classes = text(textColorObj) + " " + background(bgColorObj) + " " +
                background(bgOpacityObj, "opacity")+" " +(outline ? border(outlineObj) : "")+" "+
                (outline ? border(outlineOpacityObj, 'opacity'):"") + " " +
                (animateSpeed == "fast" ? 'duration-100': (animateSpeed == "slow" ? 'duration-500': 'duration-300'))

  let labelClasses =  text({color : labelColor, darkColor : labelDarkColor}) + " " +
                      text({default : labelFontSize, md : labelMdFontSize, lg : labelLgFontSize, xl : labelXlFontSize}, "size") + " " +
                      text({light: labelWeight, dark : labelDarkWeight}, "weight")
</script>

<div
  class="flex {cls} {classes}"
  class:flex-col={direction == "col"}
  class:input-default = {style == "default"}
  class:input-flat = {style == "flat"}
  class:flex-grow={grow}
  class:mb-4={mb==4}
  class:mb-8={mb==8}
  class:mb-12={mb==12}

  class:input-xs={size=="xs"}
  class:input-sm={size=="sm"}
  class:input-md={size=="md"}
  class:input-lg={size=="lg"}
  class:input-xl={size=="xl"}
>

  {#if label}<Label classes={labelClasses} label={label} labelFor={name}/>{/if}
  {#if type === "text"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="text" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "password"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="password" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "email"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="email" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "url"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="url" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "number"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="number" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "date"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="date" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "datetime-local"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="datetime-local" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "month"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="month" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "search"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="search" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "tel"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="tel" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "time"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="time" name="{name}" placeholder="{placeholder}" {required} {readonly} bind:value>
  {:else if type === "textarea"}
    <textarea id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" name="{name}" placeholder="{placeholder}" {required} {readonly} rows={rows} bind:value></textarea>
  {:else if type === "select"}
    <select id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" name="{name}" {required} bind:value>
      {#if placeholder}<option value="" disabled>{placeholder}</option>{/if}
      {#if data}
        {#each data as d}
          <option value="{d.value||d.text||d}" selected="{d.selected || value==d.value || value==d.text || value == d}">{d.text||d}</option>
        {/each}
      {/if}
    </select>
  {/if}
</div>

<style lang="postcss">
  input, textarea, select{
    @apply transition-all ease-in-out;
  }
  .input-xs input, .input-xs textarea, .input-xs select{
    @apply p-1 text-xs;
  }
  .input-sm input, .input-sm textarea, .input-sm select{
    @apply px-3 py-2 text-sm;
  }
  .input-md input, .input-md textarea, .input-md select{
    @apply px-4 py-3 text-base;
  }
  .input-lg input, .input-lg textarea, .input-lg select{
    @apply px-6 py-3 text-lg;
  }
  .input-xl input, .input-xl textarea, .input-xl select{
    @apply px-8 py-4 text-xl;
  }

  .input-default input, .input-default textarea, .input-default select{
    @apply border focus-within:border-brand;
  }
  .input-flat input, .input-flat textarea, .input-flat select{
    @apply border-0 border-b-2 outline-0 px-0 focus:border-brand;
  }
</style>