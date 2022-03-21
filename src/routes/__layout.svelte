<script context="module">
  export async function load({url, session}) {
    // Get Custom Settings by Users
    return {
      props : {
        settings : {
          isRounded : true,
        },
        segment : url.pathname,
        isLoggedIn : session.authenticated,
      }
    }
  }
</script>

<script>
  import {onMount} from "svelte"
  import "../app.css"
  import {S, authenticated, permitted, blocked}  from "$lib/stores"
  import {Auth, Container, Head, Sidebar, Topbar} from "$lib/components"

  export let settings, segment, isLoggedIn
  $S = {...$S, ...settings}

  $authenticated = isLoggedIn
  $permitted = isLoggedIn
  $blocked = isLoggedIn
</script>

{#if $authenticated}
  <Head/>
  <section class="flex bg-primary dark:bg-secondary">
    <Sidebar {segment}/>
    <section class="dashbord-content min-h-screen flex flex-col w-full grow bg-primary">
      <Topbar/>
      <Container py=8 px=8 mdPx="">
        <slot></slot>
      </Container>
    </section>
  </section>
{:else}
<slot></slot>
{/if}
