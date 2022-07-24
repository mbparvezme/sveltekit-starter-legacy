<script>
  import { Input } from "$lib/components"
  import Forms from "./Inputs/Block1.svelte";

  let name = "multipleImageBlock"

  let i = 0
</script>

<Input name="multipleImageBlock[title]" label="BLOCK TITLE" />
<Input type="editor" name="multipleImageBlock[text]" label="BLOCK TEXT" />
<Forms name="multipleImageBlock[{i}]" />