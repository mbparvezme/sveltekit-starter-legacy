import { writable } from 'svelte/store';

export let S = writable({
  isRounded   : false,
  navFixed    : false,
  darkTheme   : true,
  siteLang    : "en-US",
  appSidebar  : "light",
  dashboardTitle : "Dashboard",
})

export let authenticated = writable(false)
export let permitted = writable(true)
export let blocked = writable(false)
export let jwt = writable(null)