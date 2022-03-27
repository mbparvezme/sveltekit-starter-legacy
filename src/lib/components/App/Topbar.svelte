<script>
  import {session} from "$app/stores"
  import { S } from "$lib/stores"
  import { getToken } from "$lib/utility"
  import { Navbar, ToggleTheme, Button, Toast, addToast } from "$lib/components"

  let logout = async () => {
    const data = await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "content-type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({JWT: $session.JWT})
    })
    .then((res)=>res.json())
    .then(r => {
      if (r.success) {
        addToast(r.message , 'success')
        setTimeout(() => {
          location.replace("/account")
        }, 500)
      }
    })
    .catch(e => {
      addToast("Something went wrong!" , 'error')
    })
  }
</script>

<Navbar bgColor="primary" bgDarkColor="secondary" height="sm" miniNavScrollAmount={false}>
  <h4 class="font-bold">{$S.dashboardTitle}</h4>
  <div class="ml-auto mr-8 flex items-center">
    <a class="text-default p-2 hover:bg-primary dark:hover:bg-secondary" href="/messages" aria-label="open messages" class:rounded={$S.isRounded}>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon stroke-default/60 fill-[none]" viewBox="0 0 24 24" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path></svg>
    </a>
  </div>
  <Button label="LOGOUT" size="sm" on:click={()=>logout()} />
  <ToggleTheme/>      
</Navbar>

<Toast/>