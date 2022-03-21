<script>
  import { S } from "$lib/stores";
  import { Input } from "$lib/components"

  let category = [
    {
      text : "Cow",
      value : "cow"
    },
    {
      text : "Goat",
      value : "coat"
    },
  ]
</script>

<div class="grid grid-cols-3 gap-8">
  <div class="bg-primary p-8 col-span-2" class:rounded-md={$S.isRounded}>
    <Input label="AD TITLE" placeholder="Title of the ad" />
    <div class="grid grid-cols-2 gap-8">
      <Input label="CATEGORY" type="select" data={category} placeholder="Select type" />
      <Input label="PRICE" placeholder="Enter price" />
    </div>
    <label class="inline-flex items-center text-base font-medium select-none shrink"><input type="checkbox" name="deliver" id="" class="mr-2"> I will deliver it to the customer</label>
  </div>
</div>