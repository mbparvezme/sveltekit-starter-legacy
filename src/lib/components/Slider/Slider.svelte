<script>
  import { S } from "$lib/store"
  import { onMount } from "svelte"
  // import { round } from "$lib/utility/classname"

  export let  data = {},
              containerCls = "",
              sliderCls = "",
              opt = {},
              responsiveSlider = false,
              md    = {gutter:  8, items: 2},
              lg    = {gutter: 16, items: 3},
              xl    = {gutter: 24, items: 4},
              xxl   = {gutter: 24, items: 5},
              xxxl  = {gutter: 24, items: 6}

  let defaultOpt = {
    animateIn: "jello",
    animateOut: "rollOut",
    arrowKeys: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    axis : "horizontal",
    container: '.my-slider',
    controls: true,
    controlsPosition: "bottom", // top
    controlsText: ["<", ">"],
    edgePadding: 0,
    gutter: 24,
    items: 1,
    lazyload: true,
    lazyloadSelector: ".tns-lazy-img",
    loop: true,
    mode : "carousel",
    mouseDrag: true,
    nav: false,
    navPosition: "bottom", // top
    navAsThumbnails: false,
    nextButton: false, // ".next"
    prevButton: false, // ".prev"
    rewind: false,
    slideBy: 1, // page
    startIndex: 0,
    swipeAngle: 15,
    touch: false,
  }

  let sliderOpt = {...defaultOpt, ...opt}

  let responsive = {
     768: Object.assign({gutter:  8, items: 2},   md),
    1024: Object.assign({gutter: 16, items: 3},   lg),
    1280: Object.assign({gutter: 24, items: 4},   xl),
    1536: Object.assign({gutter: 24, items: 5},  xxl),
    1920: Object.assign({gutter: 24, items: 6}, xxxl),
  }

  if(responsiveSlider) {
    sliderOpt.responsive = responsive
  }

  onMount(async () => {
    const { tns } = await import("tiny-slider");
    let slider = tns(sliderOpt);
  })

</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
  <!--[if (lt IE 9)]><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.helper.ie8.js"></script><![endif]-->
</svelte:head>

<section class="my-slider overflow-hidden {containerCls}">
  {#each data as item}
    <div class="overflow-hidden {sliderCls}">
      <div>
        <img src="{item}" alt="{item}">
      </div>
    </div>
  {/each}
</section>

<style lang="postcss">
  
</style>



