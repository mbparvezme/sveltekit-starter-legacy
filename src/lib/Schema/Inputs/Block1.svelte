<script>
  import { Input } from "$lib/components"
  export let name
</script>

<Input name="multipleImageBlock[0][title]" label="Block title" />
<Input name="multipleImageBlock[1][title]" label="Block title" />

<Input name={`${name}[title]`} label="Block title" />
<Input name={`${name}[subtitle]`} label="Block sub-title" />
<Input name={`${name}[text]`} label="Block text" type="editor" />
<Input name={`${name}[image]`} label="Block image" type="media"/>