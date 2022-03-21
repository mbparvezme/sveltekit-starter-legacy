<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link rel="icon" href="/favicon.png" />
  <link rel="shortcut icon" href="/favicon.ico?v=2">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2">
  <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#4050f0">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#4050f0">

  <link rel="manifest" crossorigin="use-credentials" href="/manifest.json">

  <script>
    function setLocals(){
      // Sidebar size
      if (localStorage.sidebar) {
        document.documentElement.classList.add('mini-bar')
      }
    }
    setLocals();
  </script>
</svelte:head>