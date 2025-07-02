<!--
<template>
  <router-view :key="routeKey"></router-view>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Use useRoute to access the current route object
const route = useRoute();

// Compute a unique key based on the route path and query parameters
const routeKey = computed(() => route.path + '-' + JSON.stringify(route.query));
</script>

-->
<template>
  <Component :is="currentLayout" v-if="$route">
    <RouterView :key="$route.fullPath" />
  </Component>
</template>

<script setup>
import { useRoute, RouterView } from 'vue-router'
import { computed } from 'vue'

import DefaultLayout from '@/components/Layouts/AppLayout.vue'
import VendorLayout from "@/Layouts/Vendor/VendorLayout.vue";

const layouts = new Map([
  [ 'defaultLayout', DefaultLayout ],
  [ 'vendorLayout', VendorLayout ]
])

const route = useRoute()
let currentLayout = computed(() =>
    layouts.get(`${route.meta.layout || 'default'}Layout`)
)
</script>