<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";

const supabase = useSupabaseClient()
let isError=ref(false);
let errMsg=ref('');

const register = async(values, actions) => {
  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password
  });
  if (error) { 
    isError = true;
    errMsg = error.message;
   }
};
 
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const schema = object({
  fname: string().required().min(3).label("First Name"),
  lname: string().required().min(3).label("Last Name"),
  email: string().required().email().label("Email Address"),
  password: string().required().min(6).label("Your Password"),
  confirmed: string().required()
    .oneOf([yupRef("password")], "Passwords do not match") //Cross-Field Validation
    .label("Your Confirmation Password"),
  terms: string().required()
  
})

const initialValues = { fname: "", lname: "", email: "", password: "", confirmed: "", terms: "" };
</script>

<template>
  <div class="flex w-3/4 min-h-full mx-auto my-10 text-blue-500 bg-blue-50">
    <div class="flex flex-col justify-center px-4 py-12 flex-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <h2 class="text-3xl font-extrabold text-center text-orient-default">Sign up</h2>
      <div class="mt-6">
        <!-- v-slot="{meta: formMeta}" -->
        <VForm 
          :validation-schema="schema"
          :initial-values="initialValues"
          class="space-y-6"
          @submit="register">

          <VTextInput type="text" name="fname" label="First Name" placeholder="e.g. Maria"/>
          <VTextInput type="text" name="lname" label="Last Name" placeholder="e.g. Tănase"/>
          <VTextInput type="email" name="email" label="Email" placeholder="Email"/>
          <VTextInput type="password" name="password" label="Password" placeholder="Password"/>
          <VTextInput type="password" name="confirmed" label="Confirm Password" placeholder="Password"/>
          
          <VField name="terms" v-slot="{ field }" type="checkbox" :value="false">
            <div class="flex items-center justify-between px-3 pt-3">
              <div class="flex items-center">
                    <input name="terms" v-bind="field" type="checkbox" :value="false"
                      class="w-4 h-4 accent-orient-default"
                    />
                    <label for="remember-me" class="block ml-2 text-sm text-orient-default">
                      I have read and accept the
                    </label>
              </div>
              <div class="pl-1 text-sm">
                  <nuxt-link to="/terms" class="font-medium text-orient-default">
                    Terms and Conditions
                  </nuxt-link>
                </div>
            </div>
            <VErrorMessage name="terms" as="div" class="pt-1 pl-2 text-xs leading-3 text-red-500" />
          </VField>

          <div>
            <button type="submit" class="sign-up-btn">
              Sign up
            </button>
          </div>
          <div class="text-xs leading-3 text-red-500" v-if="isError">{{ errMsg }}</div>
        </VForm>
        <div class="space-y-2 text-sm font-medium text-center text-blue-600">
          <p class="text-orient-default">or</p>
          <p class="text-orient-default">Sign in with</p>
          <div class="grid grid-cols-3 gap-3 pt-2">
            <div>
              <nuxt-link
                to="#"
                class="social-links">
                <span class="sr-only">Sign in with Facebook</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </nuxt-link>
            </div>

            <div>
              <nuxt-link
                to="#"
                class="social-links">
                <span class="sr-only">Sign in with Twitter</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </nuxt-link>
            </div>

            <div>
              <nuxt-link
                to="#"
                class="social-links">
                <span class="sr-only">Sign in with GitHub</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative justify-end flex-1 hidden w-0 lg:block">
      <nuxt-img
        class="absolute inset-0 object-cover w-full h-full"
        src="angel.jpg"
        alt="angel"
        format="webp"
      />
    </div>
  </div>
</template>


<style scoped>
.sign-up-btn {
  @apply flex justify-center w-full px-4 py-2 mb-3 text-sm font-medium text-white bg-orient-default border border-transparent
                  rounded-md shadow-sm hover:bg-orient-default focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orient-default
}
.social-links {
  @apply inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-orient-default bg-white border border-gray-300
                  rounded-md shadow-sm hover:bg-gray-50
}
</style>