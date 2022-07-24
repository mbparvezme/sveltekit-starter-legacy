import { writable } from 'svelte/store';

export let S = writable({
  isRounded       : false,
  navFixed        : false,
  darkTheme       : true,
  siteLang        : "en-US",
  toastPosition   : "top-right",
  siteTitle       : "My Site",
  hideNavOnScroll : false, // scroll amount to hide navbar || false to deactivate
  miniNavScrollAmount : 8, // Scroll amount || false to deactivate
  navbar : {
    bgLight : "primary",
    bgDark  : "secondary",
    theme   : "default",
  },
  // DASHBOARD SPECIFIC SETTINGS
  appSidebar      : "light",
  dashboardTitle  : "Dashboard",
})

// DASHBOARD SPECIFIC CONFIG
export let dashboardTitle = writable("DASHBOARD")
export let editorData = writable([])
export let blocked = writable(false)