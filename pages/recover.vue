<script setup>
  import { object, string, ref as yupRef } from "yup";
  
const supabase = useSupabaseClient();
let isError=ref(false);
let errMsg=ref('');
  
const recover = async(values, actions) => {
  const { error } = await supabase.auth.resetPasswordForEmail(values.email);
  if (error) { 
    isError = true;
    errMsg = error.message;
  } else  { 
    actions.resetForm()
    navigateTo("/"); }
}

const schema = object({
  email: string().required().email().label("Email Address"),
})

  const initialValues = {email: ""};
</script>

<template>
  <div class="flex w-3/4 min-h-full mx-auto my-10 bg-white">
    <div class=" flex flex-col justify-center px-4 py-12 flex-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <h2 class="text-3xl font-extrabold text-center text-orient-default">Recover you password</h2>
      <p class="text-center text-orient-default">You'll receive an email to recover your password.</p>
      <div class="mt-6">
        <!-- v-slot="{meta: formMeta}" -->
        <VForm 
          :validation-schema="schema"
          :initial-values="initialValues"
          class="space-y-6"
          @submit="recover">
            <VTextInput type="email" name="email" label="Email" placeholder="Email"/>
            <div>
              <button type="submit" class="sign-in-btn">
                Send
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