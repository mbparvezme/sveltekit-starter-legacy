<script>
  import {S} from "$lib/stores"
  import { formData } from "$lib/utility"
  import { Button, Input, ToggleTheme, Toast, addToast } from "$lib/components"
  let activeForm = "login"

  let registration = (e) => {
    e.preventDefault()
    let data = formData(new FormData(e.target))

    if(data.name == "" || data.mobile == "" || data.acc_password == "" || data.confirm_password == "") {
      addToast('Please complete your form properly' , 'error')
      return
    }

    if(data.acc_password !== data.confirm_password) {
      addToast('Passwords do not match' , 'error')
      return
    }

    let res = fetch("/api/auth/create", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })

    if(res.error || !res.success){
      addToast(res.message , 'error')
      return
    }
    location.reload()
  }

  let login = (e) => {
    e.preventDefault()
    let data = formData(new FormData(e.target))
    if(data.id == "" && data.password == "") {
      addToast('Please enter your ID and password' , 'error')
      return
    }
    if(data.id == "") {
      addToast('Please enter your user ID' , 'error')
      return
    }
    if(data.password == "") {
      addToast('Please enter your password' , 'error')
      return
    }

    let res = fetch("/api/auth", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })

    if(res.error == true || res.success == false){
      addToast(res.message , 'error')
      return
    }
    location.reload()
  }
</script>

<a class="fixed top-8 left-8 text-sm font-medium text-muted" href="">&larr; BACK TO SITE</a>
<p class="fixed top-8 right-8 dark:text-muted"><ToggleTheme space=0/></p>
<section>
  <div class="userForm" class:rounded-lg={$S.isRounded} class:regiForm={activeForm == "registration"} class:authForm={activeForm != "registration"}>
    <div class:hidden={activeForm !== "registration"}>
      <h2 class="title">CREATE ACCOUNT</h2>
      <form on:submit={(e)=>registration(e)} class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input label="FULL NAME" name="name" placeholder="Enter full name" mb=0 cls="md:col-span-2"/>
        <Input label="MOBILE NUMBER" name="mobile" placeholder="Active mobile number" mb=0/>
        <Input label="EMAIL" type="email" name="email" placeholder="Email" required={false} mb=0/>
        <Input label="PASSWORD" type="password" name="acc_password" placeholder="Password" mb=0/>
        <Input label="CONFIRM PASSWORD" type="password" name="confirm_password" placeholder="Retype Password" mb=0/>
        <Button type="submit" label="SUBMIT" width="full" cls="md:col-span-2"></Button>
        <div class="md:col-span-2">
          <p class="text-center text-xs dark:font-normal border-b border-dark/10 dark:border-secondary dark:text-muted pb-2">By clicking on "SUBMIT" button, you agree to our <a class="text-primary dark:text-secondary" href="/terms">Terms of Use</a> and <a class="text-primary dark:text-secondary" href="/privacy">Privacy Policy</a>.</p>
          <p class="text-sm pt-4 text-center flex items-center justify-center dark:text-muted">
            Already have an account?&nbsp;&nbsp;
            <Button on:click={()=>activeForm="login"} bgColor="transparent" textColor="brand" label="Login now" spaceZero={true}/>
          </p>
        </div>
      </form>
    </div>
    <div class:hidden={activeForm !== "login"}>
      <h2 class="title">LOGIN</h2>
      <form on:submit={(e)=>login(e)} method="post">
        <Input type="text" name="id" placeholder="Mobile number / Email" mb=4/>
        <p class="mb-2 text-xs flex items-center justify-end">
          <Button on:click={()=>activeForm="reset"} bgColor="transparent" textColor="brand" label="Forgot password?" spaceZero={true}/>
        </p>
        <Input type="password" name="password" placeholder="Password"/>
        <Button type="submit" label="SUBMIT" width="full"></Button>
        <p class="text-sm pt-6 text-center flex items-center justify-center dark:text-muted">
          Don't have an account?&nbsp;&nbsp;
          <Button on:click={()=>activeForm="registration"} bgColor="transparent" textColor="brand" label="Join now" spaceZero={true}/>
        </p>
      </form>
    </div>
    <div class:hidden={activeForm !== "forgot"}>
      <h2 class="title">RECOVER PASSWORD</h2>
      <form>
        <Input type="text" name="userid" placeholder="Enter Email / Mobile number"/>
        <Button type="submit" label="START RECOVERY" width="full"></Button>
        <p class="text-sm pt-8 text-center flex items-center justify-center dark:text-muted">
          <Button on:click={()=>activeForm="login"} bgColor="transparent" textColor="brand" label="&larr; Back to login" spaceZero={true}/>
        </p>
      </form>
    </div>
    <div class:hidden={activeForm !== "reset"}>
      <h2 class="title">RESET PASSWORD</h2>
      <form>
        <Input label="NEW PASSWORD" type="password" name="new_password" placeholder="Password"/>
        <Input label="CONFIRM NEW PASSWORD" type="password" name="confirm_new_password" placeholder="Retype Password"/>
        <Button type="submit" label="RESET PASSWORD" width="full"></Button>
        <p class="text-sm pt-8 text-center flex items-center justify-center dark:text-muted">
          <Button on:click={()=>activeForm="login"} bgColor="transparent" textColor="brand" label="&larr; Back to login" spaceZero={true}/>
        </p>
      </form>
    </div>
  </div>
  <p class="pt-12 text-sm text-muted font-normal text-center">&copy;All rights reserved<br>Developed by <a href="https://www.gosoft.io" target="_blank" class=" font-medium">Gosoft</a> | Media Partner <a href="https://www.bipby.com" target="_blank" class=" font-medium">BIPBY</a></p>
</section>

<Toast/>

<style lang="postcss">
  section{
    @apply flex flex-col items-center justify-center py-24 bg-secondary min-h-screen px-8;
  }
  .userForm{
    @apply bg-primary shadow-2xl shadow-black/10 dark:shadow-black/25 p-12 relative z-[1];
  }
  .userForm.authForm{
    @apply w-full sm:w-3/5 md:w-2/5 xl:w-1/3;
  }
  .userForm.regiForm{
    @apply w-full sm:w-4/5 lg:w-3/5;
  }
  .userForm .title{
    @apply text-xl font-semibold mb-8;
  }
</style>