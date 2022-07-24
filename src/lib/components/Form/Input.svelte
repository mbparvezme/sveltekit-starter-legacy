<script lang="ts">
  import { S } from "$lib/store"
  import { Label } from "$lib/components"
  import { round } from "$lib/utility/classname"

  import { roundedClass } from "$lib/utility/classmaker"
  import { AnimateSpeed, BackgroundType, BackgroundVariant, InputType, OpacityType } from "$lib/utility/types"

  // Input attributes
  export let type: InputType = "text"
  export let label: string|boolean = false
  export let name: string
  export let placeholder?: string
  export let readonly: boolean = false
  export let required: boolean = true
  export let tabindex: number|boolean = false
  export let value: string = ""
  export let data?: Object
  export let rows: number = 3

  export let animateSpeed: AnimateSpeed = "normal"
  export let rounded: RoundedType = "md"
  export let size: "xs" | "sm" | "md" | "lg" | "xl" = "md"

  export let bgLight: BackgroundType = "transparent"
  export let bgDark: BackgroundType = "primary"
  export let grow: boolean = false
  export let mb: 4 | 8 | 12 = 8

  export let containerCls?: string
  export let inputCls?: string
  export let apparence: "default" | "flat" = "default"

  let background = (light: BackgroundType, dark: BackgroundType) => {    
    let cls: string = ""
    if(typeof light !== "undefined"){
      cls += light=="transparent" ? "bg-transparent" : light=="primary" ? "bg-primary" : light=="secondary" ? "bg-secondary" : light=="tertiary" ? "bg-tertiary" : light=="brand" ? "bg-brand" : ""
    }
    if(typeof dark !== "undefined"){
      cls += dark=="transparent" ? "dark:bg-transparent" : dark=="primary" ? "dark:bg-primary" : dark=="secondary" ? "dark:bg-secondary" : dark=="tertiary" ? "dark:bg-tertiary" : dark=="brand" ? "dark:bg-brand" : ""
    }
    return cls
  }

  let classes: string = "border-opacity-25 border-dark dark:border-tertiary" + " " + inputCls + " " + background(bgLight, bgDark) + " " + animate(animateSpeed) + " " + roundedClass($S.isRounded, rounded)

  let labelClasses: string = "text-default text-xs font-semibold uppercase"

  let setType => (node) {
		node.type = type;
	}

</script>

<div
  class="flex flex-col {containerCls}"
  class:input-default = {apparence == "default"}
  class:input-flat = {apparence == "flat"}
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
  {#if type === "textarea"}
  <textarea id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" name="{name}" placeholder="{placeholder}" {required} {readonly} rows={rows} {tabindex} bind:value></textarea>
  {:else}
  <input bind:value {name} use:setType {id} class={inputClass} {placeholder} {required} {disabled} {readonly} />
  {/if}


  <!-- {#if type === "text"}
    <input id="{name}" use:setType class="{classes} {round({default: rounded}, $S.isRounded)}" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "password"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="password" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "email"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="email" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "url"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="url" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "number"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="number" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "date"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="date" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "datetime-local"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="datetime-local" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "month"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="month" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "search"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="search" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "tel"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="tel" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "time"}
    <input id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" type="time" name="{name}" placeholder="{placeholder}" {required} {readonly} {tabindex} bind:value>
  {:else if type === "textarea"}
    <textarea id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" name="{name}" placeholder="{placeholder}" {required} {readonly} rows={rows} {tabindex} bind:value></textarea>
  {:else if type === "select"}
    <select id="{name}" class="{classes} {round({default: rounded}, $S.isRounded)}" name="{name}" {required} {tabindex} bind:value>
      {#if placeholder}<option value="" disabled>{placeholder}</option>{/if}
      {#if data}
        {#each data as d}
          <option value="{d.value||d.text||d}" selected="{d.selected || value==d.value || value==d.text || value == d}">{d.text||d}</option>
        {/each}
      {/if}
    </select>
  {/if} -->
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