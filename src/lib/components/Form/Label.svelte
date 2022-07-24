<script>
  export let label = undefined, labelFor = undefined, classes = ""
</script>
<label class="{classes}" for="{labelFor}">{label}</label>
<style lang="postcss">
  label{
    @apply inline-block mb-2 dark:font-normal;
  }
</style>