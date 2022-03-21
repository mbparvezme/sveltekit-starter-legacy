<script context="module">
  export async function load({session}){
    // if(!session.authenticated){
    //   return{
    //     redirect : "/account",
    //     status : 302
    //   }
    // }
    return {
      props : {
        isLoggedIn : session.authenticated,
      }
    }
  }
</script>

<script>
  import {authenticated} from "$lib/stores"
  import { Button, Icon, Input, Slider, Card } from "$lib/components"
  export let isLoggedIn

  // if(!$authenticated) location.reload()

  let data = [
    {
      text: "Option 1",
      value: "option-1"
    },
    {
      text: "Option 2",
      value: "option-2"
    },
    {
      text: "Option 3",
      value: "option-3"
    }
  ]

  // let slider = [
  //   'https://source.unsplash.com/1500x500/?nature',
  //   'https://source.unsplash.com/1500x500/?water',
  //   'https://source.unsplash.com/1500x500/?night',
  //   'https://source.unsplash.com/1500x500/?building',
  //   'https://source.unsplash.com/1500x500/?girl-face',
  //   'https://source.unsplash.com/1500x500/?sexy-face',
  //   'https://source.unsplash.com/1500x500/?nude',
  // ]
</script>

<section class="grid grid-cols-3 gap-8">
  <Card bgColor="secondary">
    Hello
  </Card>
  <Card>
    Hello
  </Card>
  <Card>
    Hello
  </Card>
  <Card cls="col-span-3">
    Hello
  </Card>
</section>