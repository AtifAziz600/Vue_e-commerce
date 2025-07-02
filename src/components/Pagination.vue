<template>
  <template>
    <div class="flex justify-between mx-0 my-1 pt-1">
      <div class="w-full md:w-1/2" v-if="!props.notShowNumber">
        <div class="text-shadow">
          Showing {{ from ?? '--' }} to {{ to ?? '--' }} of {{ total ?? '--' }} entries
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <ul class="pagination flex justify-end">
          <li
              class="paginate_button page-item"
              v-for="link in links"
              :key="link?.label"
              :class="{ 'active' : link?.active }"
          >
            <button
                @click="clicked(link)"
                class="page-link px-3 py-1 border border-gray-300 rounded-md mx-1"
                :class="{ 'bg-blue-500 text-white': link?.active, 'bg-white text-blue-500': !link?.active }"
                v-html="link?.label"
            />
          </li>
        </ul>
      </div>
    </div>
  </template>
</template>

<script setup>
    const props = defineProps({
        links: {
            type: Array
        },
        from: {
            type: Number,
            default: 0
        },
        to: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        },
        notShowNumber:{
            type:Boolean,
            default:false,
        }
    })

    const emit = defineEmits(['someEvent'])
    const clicked = (path) => emit('someEvent', path?.url)
</script>
