<script>
  import { S } from "$lib/store"
  export let segment
  let sidebar = () => {
    if(document.querySelector("html").classList.contains("mini-bar")){
      localStorage.removeItem("sidebar")
    }else{
      localStorage.setItem("sidebar", "mini-bar")
    }
    document.querySelector("html").classList.toggle("mini-bar")
  }
</script>

<section id="appSidebar" class="bg-primary dark:bg-secondary border-black/5 dark:border-black/30" class:bg-dark={$S.appSidebar=="dark"}>
  <section class="primary-bar grow">
    <div class="profile pt-6 flex items-start">
      <a href="/profile" class="flex text-default font-semibold">
        <img src="https://randomuser.me/api/portraits/women/55.jpg" alt=" ">
      </a>
      <a href="/profile" class="flex text-default font-semibold flex-col link-label">
        M B Parvez
        <span class="text-brand text-xs italic font-medium">#123454</span>
      </a>
    </div>

    <nav class="select-none overflow-x-hidden overflow-y-auto pt-12 pb-8 mb-auto">
      <a href="/" class="sidebar-link" class:active={segment === "/"}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/></svg>
        <span class="link-label mr-auto">Dashboard</span>
      </a>
    </nav>

    <div class="bottomNav">
      <button class="flex items-center p-0 w-5 h-5" on:click={()=>sidebar()}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-stroke w-full h-full" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h8m-8 6h16"/></svg>
      </button>
      <a href="/settings" aria-label="open settings" class="focus:outline-none focus:ring-2 ring-tertiary p-1" class:rounded={$S.isRounded}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon w-4 h-4" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>
      </a>
    </div>
  </section>
</section>

<style lang="postcss">
  /* COMMON DESIGN FOR ALL : STARTS */
  :global(#appSidebar){
    @apply w-64;
  }
  :global(.mini-bar #appSidebar){
    @apply w-16;
  }
  :global(.mini-bar #appSidebar .link-label){
    @apply hidden;
  }
  :global(#appSidebar .profile){
    @apply justify-start px-6;
  }
  :global(.mini-bar #appSidebar .profile){
    @apply justify-center px-0;
  }
  :global(#appSidebar .profile img){
    @apply w-12 h-12 mr-4 rounded-lg;
  }
  :global(.mini-bar #appSidebar .profile img){
    @apply w-10 h-10 mr-0 rounded-full;
  }
  :global(#appSidebar .sidebar-link){
    @apply px-6;
  }
  :global(.mini-bar #appSidebar .sidebar-link){
    @apply px-0;
  }
  :global(#appSidebar .bottomNav){
    @apply px-6 py-4;
  }
  :global(.mini-bar #appSidebar .bottomNav){
    @apply px-0 pt-4 pb-6 h-28 flex-col-reverse shrink-0;
  }
  #appSidebar{
    @apply h-screen flex overflow-x-hidden overflow-y-auto shrink-0 border-r;
  }
  #appSidebar .icon{
    @apply fill-default/60;
  }
  #appSidebar .active .icon{
    @apply fill-brand;
  }
  #appSidebar .icon.icon-stroke{
    @apply stroke-default/60 fill-[none];
  }
  #appSidebar .active .icon.icon-stroke{
    @apply stroke-brand fill-[none];
  }
  #appSidebar .sidebar-link.active{
    @apply bg-brand/10 dark:bg-brand/20;
  }
  #appSidebar .sidebar-link .icon{
    @apply w-4 h-4;
  }

  #appSidebar .primary-bar{
    @apply flex flex-col justify-between;
  }
  
  #appSidebar .sidebar-link{
    @apply flex justify-center items-center text-default cursor-pointer uppercase text-xs font-medium;
    @apply py-3 mb-1;
  }
  #appSidebar .sidebar-link .link-label{
    @apply ml-4;
  }
  #appSidebar .sidebar-link .badge{
    @apply w-2 h-2 bg-brand rounded-full flex-grow-0;
  }
  #appSidebar .bottomNav{
    @apply flex mt-auto w-full items-center justify-between border-t border-black/5 dark:border-black/30;
  }
</style>
