
<script setup>
const props = defineProps({
    type: {
        type: String,
        default: "text",
    },
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: "",
    },
});
</script>

<template>
<div class="">
  <label class="label-field">{{ label }}</label>
  <div class="mt-1">
    <VField :name="name" v-slot="{ field, meta}">
          <input
            v-bind="field"
            :placeholder="placeholder"
            :type="type"
            class="input-field"
            :class="{ 
              'default-input-color': meta.valid && meta.touched,
              'error-input-color': !meta.valid && meta.touched
              }" 
          />
          <VErrorMessage :name="name" as="div" class="pt-1 pl-2 text-xs leading-3 text-red-500" />
    </VField>
  </div>
</div>
</template>

<style scoped>
.input-field {
    @apply block w-full px-2 py-2 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-600 focus:border-orient-default sm:text-sm;
}
.default-input-color {
    @apply border-orient-default text-orient-default placeholder-orient-light
}
.error-input-color {
    @apply border-red-500 text-red-500 placeholder-red-500;
}
.label-field {
    @apply block pl-2 text-sm font-medium text-neon-carrot-light;
}

</style>