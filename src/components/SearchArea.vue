<template>
  <div class="relative" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
    <input  type="text"
        v-model="searchQuery"
        @focus="showDropdown = true"
        @blur="handleBlur"
        class="w-full px-4 py-2 border border-gray-300 rounded"
        placeholder="Search..."
    />
    <div :id="props.areaId"
        v-show="showDropdown"
        class="absolute w-full bg-white border shadow-sm rounded mt-1 p-2 z-10 max-h-[60vh] overflow-x-auto"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
    >
      <div>
        <h2>Showing {{ items?.data?.products?.total }} results for Search <span v-if="searchQuery">"{{ searchQuery }}"</span></h2>
        <p v-if="loading">Loading.....</p>
      </div>

      <div class="flex items-center justify-center min-h-[10rem]" v-if="items?.data?.length">
        <h2>No product found</h2>
      </div>
      <ul class="flex flex-col gap-2">
        <li
            v-for="(item, index) in items?.data?.products?.data"
            :key="index"
        >
          <SearchItem :item="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount,watch } from 'vue';
import axios from "axios";
import {debounce} from "lodash";
import useAxios from "@/composables/useAxios.js";
import SearchItem from "@/components/SearchItem.vue";

const searchQuery = ref('');
const showDropdown = ref(false);
const items = ref([]);
const isClickingInside = ref(false);

const {sendRequest, loading, error} = useAxios();
const props = defineProps({
  areaId:String,
  default:"area"
})

watch(searchQuery, debounce(async function (val) {
  if (val.length) {
    items.value = await sendRequest({
      url: '/product-filter',
      params: {
        search: val
      }
    })
  }
}, 300));


const filteredItems = computed(() =>
    items.value.filter(item =>
        item.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
);

const handleBlur = () => {
  setTimeout(() => {
    if (!isClickingInside.value) {
      showDropdown.value = false;
    }
  }, 100); // Delay to allow item click before hiding
};

const selectItem = (item) => {
  searchQuery.value = item;
  showDropdown.value = false;
};

const handleMouseDown = () => {
  isClickingInside.value = true;
};

const handleMouseUp = () => {
  setTimeout(() => {
    isClickingInside.value = false;
  }, 100);
};

const handleClickOutside = (event) => {
  const area = document.getElementById(props.areaId);
  if (area && !area.contains(event.target) && !event.target.matches('input')) {
    showDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<style scoped>
/* Add any necessary styles */
</style>
