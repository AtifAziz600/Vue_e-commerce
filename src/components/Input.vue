<template>
  <div class="">
    <label :for="labelName" class="flex items-center text-sm gap-2">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <input :type="type"
           :value="modelValue"
           :class="['border rounded-md focus:ring-0 w-full', error ? 'border-red-500' : 'border-primary-200', loading ? 'bg-gray-200' : '']"
           class="text-xs px-1 py-2 focus:outline-primary-400 text-primary-700"
           :disabled="loading"
           @input="$emit('update:modelValue', $event.target.value)"
           :placeholder="placeholder"
    />
    <p v-if="error" class="text-red-500 text-xs">{{ error[0] }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default:null,
      required: false,
    },
    modelValue: {
      type: [String, Number],
      default:null,
      required: false,
    },
    error: {
      type: [String, Array],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    labelName: {
      type: String,
      default:null,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
    },
  },
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
