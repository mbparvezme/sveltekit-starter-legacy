<script context="module">
  export async function load({url, fetch}) {

    let defaults = {
      settings : {
        isRounded : true,
      },
    }

    return {
      props : {
        settings : defaults.settings,
        segment : url.pathname,
      }
    }

  }
</script>

<script>
  import "../app.css"
  import { onMount } from "svelte"
  import { S } from "$lib/store"
  import { Container, Navbar } from "$lib/components"
  import Head from "$lib/components/Misc/SiteHead.svelte"

  export let settings, segment
  $S = {...$S, ...settings}
</script>

<Head />
<Navbar {segment} />
<slot></slot>
