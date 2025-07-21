<template>
  
    <router-view :key="routeKey"></router-view>

</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

  const route = useRoute();
  const routeKey = computed(() => route.path + '-' + JSON.stringify(route.query));
</script>