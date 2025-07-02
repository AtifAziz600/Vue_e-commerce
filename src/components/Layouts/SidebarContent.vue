<template>
  <div class="w-full h-full">
    <RouterLink to="/login" class="bg-secondary flex items-center justify-center gap-1 py-3">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="white" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
      </div>
      <p class="text-white text-sm md:text-2xl font-bold">Hello, Sign In</p>
    </RouterLink>
    <div class="max-h-[95vh] overflow-x-auto pb-10">
      <template v-for="(category, i) in props.categories">
        <div class="border-b border-gray-200 py-2"
             v-if="category?.children_recursive?.length"
             :key="`single-home-cat-${i}`">
          <p class="text-sm font-bold md:text-2xl px-8 py-5">{{ category?.name }}</p>
          <ul v-if="category?.children_recursive?.length">
            <li class="hover:bg-gray-200 transition-all ease-in-out duration-100 group" :v-for="recursiveCat in category?.children_recursive" >
              <RouterLink @click="emitEvent" :to="`/product?category=${recursiveCat?.slug}`">
                <div class="flex items-center justify-between px-8 py-2">
                  <p class="text-gray-700 font-normal text-sm md:text-lg capitalize">{{ recursiveCat?.name }}</p>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path class="fill-gray-400 group-hover:fill-gray-800" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                  </span>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </template>
      <div>
        <div class="py-2">
          <p class="text-sm font-bold md:text-2xl px-8 py-5">Help & Settings</p>
          <ul>
            <li class="hover:bg-gray-200 transition-all ease-in-out duration-100 group">
              <RouterLink class="" to="/login">
                <div class="flex items-center justify-between px-8 py-2">
                  <p class="text-gray-700 font-normal text-sm md:text-lg capitalize">Your Account</p>
                </div>
              </RouterLink>
            </li>
            <li class="hover:bg-gray-200 transition-all ease-in-out duration-100 group" :v-for="page in props.navPages">
              <RouterLink @click="emitEvent" :to="`/page/${page?.slug}`">
                <div class="flex items-center justify-between px-8 py-2">
                  <p class="text-gray-700 font-normal text-sm md:text-lg capitalize">{{ page?.title }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import useAxios from "@/composables/useAxios.js";
const { sendRequest, error, loading }= useAxios()
const props = defineProps({
  navPages:{
    type:Array,
    required:true
  },
  categories:{
    type:Array,
    required:true,
  }
})
const emit = defineEmits(['handmaiden'])
const emitEvent = () =>{
  emit('handmaiden', true)
}
</script>