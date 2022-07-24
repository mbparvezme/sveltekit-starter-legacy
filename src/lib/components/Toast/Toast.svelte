<!-- https://www.sarcevic.dev/blog/toasting-in-svelte -->
<script>
  import { fade, fly } from "svelte/transition"
  import { flip } from "svelte/animate"
  import { S } from "$lib/store"
  import { toasts, removeToast } from "./Store"
</script>

{#if $toasts.length}
<ul class={$S.toastPosition}>
  {#each $toasts as toast (toast.id)}
  <li animate:flip>
    <div class={toast.type} in:fly={{ y: -16 }} out:fade class:rounded-lg={$S.isRounded} on:click="{() => {removeToast(toast.id)}}">
      <span role="status">{@html toast.msg}</span>
      <!-- <button on:click="{() => {removeToast(toast.id)}}">❌</button> -->
    </div>
  </li>
  {/each}
</ul>
{/if}

<style lang="postcss">
  ul {
    @apply fixed list-none flex flex-col items-center w-full bottom-4 z-50;
  }
  div {
    @apply p-4 mt-4 shadow-2xl shadow-black/50 bg-brand text-on-brand;
  }
  .success {
    @apply bg-green;
  }
  .error {
    @apply bg-red;
  }
</style>