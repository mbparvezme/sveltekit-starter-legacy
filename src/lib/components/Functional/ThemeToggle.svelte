<script>
  import { onMount } from "svelte"
  import { S } from "$lib/store"
  import { Button } from "$lib/components"
  export let tabindex = undefined

  let toggleTheme
  onMount(() => {
    toggleTheme = () => {
      if($S.darkTheme){
        localStorage.setItem("theme", localStorage.theme == "light" ? "dark" : "light")
        document.querySelector("html").classList.remove("dark", "light")
        document.querySelector("html").classList.add(localStorage.theme)
      }
    }
  })

</script>

<svelte:head>
  {#if $S.darkTheme}
  <script>
    function setTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    setTheme();
  </script>
  {/if}
</svelte:head>
{#if $S.darkTheme}
<Button size="xs" {tabindex} cls="bg-transparent text-default" on:click={()=>toggleTheme()}>
  <svelte:fragment slot="label">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-4 h-4">
      <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
    </svg>
  </svelte:fragment>
</Button>
{/if}