<script>
  import { Navbar, ToggleTheme, Button } from "$lib/components"
  import {Toast, addToast } from "$lib/components"
  let logout = () => {
    let res = fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(r => r.json())
    .then(r => {
      console.log("RES BLOCK", r)
      if(r.success == true) {
        addToast('Successfuly logged out!' , 'success')
        // window.location = "/account"
        // setTimeout(() => {
        //   window.location = "/account"
        // }, 1000)
      }
    })
  }
</script>

<Toast/>

<Button label="Logout BTN" size="sm" on:click={()=>logout()} />