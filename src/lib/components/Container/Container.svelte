<script>
  // import { background, padding } from "$lib/utility/classname"

  export let bg = "bg-center"
  export let padding = "px-8 py-24 md:px-16"
  // Style
  export let mouseParallax  = false,
             scrollParallax = false
</script>

<section class="relative {bg} {padding}"
  class:scrollParallaxGroup={scrollParallax}
  class:mouseParallaxGroup={mouseParallax}
>
  <slot></slot>
</section>