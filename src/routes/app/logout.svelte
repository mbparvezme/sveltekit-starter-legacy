<script context="module">
  export async function load({fetch}){
    const data = await fetch("/api/auth/logout").then((res)=>res.json())
    return {props: {data}}
  }
</script>

<script>
  import {browser} from "$app/env"
  export let data
  if(browser && data.success){
    // localStorage.removeItem(import.meta.env.VITE_USER_INFO)
    location.replace("/account")
  }
</script>