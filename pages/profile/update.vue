<script setup>
  import { object, string, ref as yupRef } from "yup";
  
const supabase = useSupabaseClient();
let isError=ref(false);
let errMsg=ref('');
  
const updatePassword = async(values, actions) => {
  const { error } = await supabase.auth.updateUser(values);
  if (error) { 
    isError = true;
    errMsg = error.message;
  } else  { 
    actions.resetForm()
    navigateTo("/"); }
}

const schema = object({
  email: string().required().email().label("Email Address"),
  password: string().required().min(6).label("Your Password"),
})

  const initialValues = {email: "", password: ""};
</script>

<template>
  <div class="flex w-3/4 min-h-full mx-auto my-10 text-blue-500 bg-white">
    <div class=" flex flex-col justify-center px-4 py-12 flex-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <h2 class="text-3xl font-extrabold text-center text-orient-default">Update your password</h2>
      <div class="mt-6">
        <!-- v-slot="{meta: formMeta}" -->
        <VForm 
          :validation-schema="schema"
          :initial-values="initialValues"
          class="space-y-6"
          @submit="updatePassword">
            <VTextInput type="email" name="email" label="Email" placeholder="Email"/>
            <VTextInput type="password" name="password" label=" New Password" placeholder="Password"/>
            <div>
              <button
                type="submit"
                class="sign-in-btn"
              >
                Update
              </button>
            </div>
            <div class="text-xs leading-3 text-red-500" v-if="isError">{{ errMsg }}</div>
        </VForm>
      </div>
    </div>
    <div class="relative justify-end flex-1 hidden w-0 lg:block">
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="~assets/img/angel.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped>
.sign-in-btn {
  @apply flex justify-center w-full px-4 py-2 mb-3 text-sm font-medium text-white bg-orient-default border border-transparent
                  rounded-md shadow-sm hover:bg-orient-default focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orient-default
}

</style>