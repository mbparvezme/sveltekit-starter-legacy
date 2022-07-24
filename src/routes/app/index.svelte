<script context="module">
  import { post } from "$lib/utility/fetch"
  export async function load({ fetch, session }){
    // if(!session.authenticated){
    //   return{ redirect : '/account', status : 302 }
    // }

    // let res =  await fetch('/api/dashboard', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json', 'Accept': 'application/json' },
    //   body: JSON.stringify({JWT: session.JWT})
    // })

    let res = await post('', session.JWT||"")
    if(res == 'AUTH_ERROR'){
      return{ redirect : '/account', status : 302 }
    }
    let data = res?.error || !res?.success ? null : res?.data
    return {props : {data}}
  }
</script>

<script>
  import { session } from "$app/stores"
  import { Button, Icon, Input, Slider, Card } from "$lib/components"
  export let data

  // if(!$session.authenticated) location.reload()
</script>

<!-- {#if $session.authenticated} -->
<section class="grid grid-cols-3 gap-8">
  <Card bg="bg-primary dark:bg-secondary">
    Hello
  </Card>
  <Card bg="bg-primary dark:bg-secondary">
    Hello
  </Card>
  <Card bg="bg-primary dark:bg-secondary">
    Hello
  </Card>
  <Card bg="bg-primary dark:bg-secondary" cls="col-span-3">
    Hello
  </Card>
</section>
<!-- {/if} -->