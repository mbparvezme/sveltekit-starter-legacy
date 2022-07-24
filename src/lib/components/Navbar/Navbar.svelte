<script>
  import { onMount } from "svelte"
  import { session } from "$app/stores"
  import { S } from "$lib/store"
  import { background, padding } from "$lib/utility/classname"

  export let segment = "/"
  export let cls = "", px = 8, mdPx = false, height = "lg"

  let classes = background({light: $S.navbar.bgLight, dark: $S.navbar.bgDark}) + " " + padding({px, mdPx})

  onMount(() => {
    let scrollPos = 0
    let navbar = document.querySelector(".navbar")
    window.addEventListener("scroll", () => {
      if($S.miniNavScrollAmount !== false){
        if (window.pageYOffset >= $S.miniNavScrollAmount) {
          navbar.classList.add("navbar-mini")
        } else {
          navbar.classList.remove("navbar-mini")
        }
      }
      if($S.hideNavOnScroll !== false)
        scrollPos = window.pageYOffset >= $S.hideNavOnScroll ? document.body.getBoundingClientRect().top : 0
    })
  })
</script>

<nav  class="navbar {cls} {classes}"
      class:fixed={$S.navFixed}
      class:height-sm={height == "sm"}
      class:height-md={height == "md"}
      class:height-lg={height == "lg"}
      class:height-xl={height == "xl"}
      class:px-4= {px == 4}
      class:px-8= {px == 8}
      class:px-12={px == 12}
      class:px-16={px == 16}
      class:md:px-8={mdPx == 8}
      class:md:px-16={mdPx == 16}
>
<slot></slot>
</nav>

<style lang="postcss">
  .navbar{
    @apply w-full max-w-screen-2xl flex items-center top-0 transition-all z-10;
  }
  .navbar.height-sm{
    @apply py-2;
  }
  .navbar.height-md{
    @apply py-4;
  }
  .navbar.height-lg,.navbar.height-xl{
    @apply py-6;
  }
  :global(.navbar.navbar-mini) {
    @apply shadow-black/10 shadow-2xl py-2 md:py-3 md:px-8 bg-primary;
  }
  :global(.navbar.navbar-hidden) {
    @apply -top-full;
  }
</style>