<script>
  import { S }  from "$lib/store"
  // import { background, padding, shadow, round } from "$lib/utility/classname"

  export let bg = "bg-primary"
  export let padding = "p-8"
  export let rounded = "md"

  // let classes = background(bgColorObj) + " " + background(bgOpacityObj,"opacity") + " " +
  //               padding({px, py, mdPx, mdPy}) + " "+ round({default: rounded}, $S.isRounded)
</script>

<div class="relative {bg} {padding}"
  class:rounded-sm={$S.isRounded && rounded=="sm"}
  class:rounded-md={$S.isRounded && rounded=="md"}
  class:rounded-lg={$S.isRounded && rounded=="lg"}
  class:rounded-xl={$S.isRounded && rounded=="xl"}
  class:rounded-full={$S.isRounded && rounded=="full"}
  >
  <slot />
</div>
