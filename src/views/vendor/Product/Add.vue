<script setup>
import LoadingButton from "@/components/LoadingButton.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Input from "@/components/Input.vue";
import {useToast} from "vue-toastification";
import {onMounted, ref} from "vue";
import useAxios from "@/composables/useAxios.js";
// import Editor from "@/components/Editor.vue";

const {sendRequest, loading, error} = useAxios();
const toast = useToast();
const product = ref({
  title: null,
  category_id: null,
  brand_id: null,
  price: null,
  stock: null,
  description:null,
  details: null,
  thumbnail: null,
  images: [],

})
const categories = ref([])
const iconImagePreview = ref(null)
const iconImage = (image) => {
  const file = image.target.files[0];
  product.value.thumbnail = file;
  iconImagePreview.value = URL.createObjectURL(file);
}
const previewImage = ref(null)
const coverImage = (image) => {
  const file = image.target.files[0];
  product.value.image = file;
  previewImage.value = URL.createObjectURL(file);
}

const uploadImages = (event) => {
  for (let i = 0; i < event.target.files.length; i++) {
    product.value.images.push({
      url: URL.createObjectURL(event.target.files[i]),
      file: event.target.files[i],
    });
  }
};
const saveUser = async () => {
  const res = await sendRequest({
    url: '/v1/product',
    method: 'POST',
    data: product.value
  })
  product.value = {}
  previewImage.value = null;
  toast.success(res.data)
}

const getAllCats = async () => {
  const res = await sendRequest({
    url: '/v1/get-recursive-categories',
    method: 'GET'
  })
  categories.value = res.data
}
onMounted(() => getAllCats())


</script>


<template>
  <div>
    <Breadcrumbs
        :item="{name:'Product', path:'/products', icon:'solar:palette-round-bold-duotone'}"
        :links="[{name:'Index', path:'/products'},  {name:'Add Product', path:'/add-product'}]"
    />
    <div class="bg-white min-h-screen shadow-lg rounded-lg mt-4 p-4">
      <div class="flex items-center justify-between">
        <p class="font-bold">Create Product</p>
        <RouterLink to="/users"
                    class="px-2 py-1 rounded-md bg-primary-700 text-white flex items-center gap-2 hover:shadow-lg transition-all ease-in-out duration-300">
          <Icon name="solar:arrow-left-line-duotone"/>
          <span class="text-xs font-semibold">Back</span>
        </RouterLink>
      </div>
      <TransitionGroup name="fade" appear>
        <form @submit.prevent="saveUser" class="w-full mb-20 justify-around mt-12 items-start flex">
          <div class="w-1/3 flex flex-col gap-3">
            <Input
                class="w-full"
                label="Title"
                labelName="Title"
                v-model="product.title"
                :error="error?.response?.data?.errors?.title"
                :loading="loading"
                type="text"
                required
                placeholder="Product title"
            />
            <div>
              <label class="text-sm block mb-2">Category</label>
              <Select
                  class="disabled:bg-gray-200"
                  :disabled="loading"
                  label="name"
                  :options="categories"
                  :reduce="item => item.id"
                  v-model="product.category_id"
                  placeholder="Select category"
              >
              </Select>
              <small class="text-red-500" v-if="error?.response?.data?.errors?.category_id">
                {{ error?.response?.data?.errors?.category_id[0] }}
              </small>
            </div>
            <div>
              <label class="text-sm block mb-2">Brand</label>
              <Select
                  class="disabled:bg-gray-200"
                  :disabled="loading"
                  label="name"
                  :options="[{name:'Samsung', id:1}, {name:'Vivo', id:2}]"
                  :reduce="item => item.id"
                  v-model="product.brand_id"
                  placeholder="Select brand"
              >
              </Select>
              <small class="text-red-500" v-if="error?.response?.data?.errors?.brand_id">
                {{ error?.response?.data?.errors?.brand_id[0] }}
              </small>
            </div>
            <div class="flex gap-5 items-center">

              <Input
                  class="w-full"
                  label="Price"
                  labelName="Price"
                  v-model="product.price"
                  :error="error?.response?.data?.errors?.price"
                  :loading="loading"
                  type="text"
                  required
                  placeholder="Enter Product Price"
              />

              <Input
                  class="w-full"
                  label="Stock"
                  labelName="Stock"
                  v-model="product.stock"
                  :error="error?.response?.data?.errors?.stock"
                  :loading="loading"
                  type="text"
                  required
                  placeholder="Enter Product Stock"
              />
            </div>
            <div class="flex-col flex">
              <textarea
                  rows="7"
                  v-model="product.description"
                  :class="['border rounded-md focus:ring-0 w-full', error?.response?.data?.errors?.description ? 'border-red-500' : 'border-primary-200', loading ? 'bg-gray-200' : '']"
                  class="text-xs focus:border-primary-500 text-primary-700"></textarea>

              <small class="text-red-500 text-left" v-if="error?.response?.data?.errors?.description">
                {{ error?.response?.data?.errors?.description[0] }}
              </small>
            </div>
            <LoadingButton :isLoading="loading">Save Product</LoadingButton>
          </div>
          <div class="w-1/2 flex flex-col gap-10">
            <div class="flex gap-5">
              <div class="flex flex-col items-start justify-center w-full">
                <div class="flex items-center justify-center w-full">
                  <label for="iconImage"
                         class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                <span v-if="iconImagePreview" class="p-2 w-full h-full rounded-lg">
                  <img class="w-full h-full object-cover rounded-lg" :src="iconImagePreview" alt=""/>
                </span>
                    <span v-else class="flex flex-col items-center justify-center pt-5 pb-6">
                <Icon name="solar:cloud-upload-line-duotone" class="w-12 h-12"/>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                    class="font-semibold">Click to upload </span></p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 1024kb)</p>
              </span>
                    <input id="iconImage" @input="iconImage" type="file" class="hidden" label-name="file"/>
                  </label>

                </div>
                <small class="text-red-500 text-left" v-if="error?.response?.data?.errors?.image">
                  {{ error?.response?.data?.errors?.image[0] }}
                </small>
              </div>
              <div class="flex flex-col items-start justify-center w-full">
                <div class="flex items-center justify-center w-full">
                  <label for="dropzone-file"
                         class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                    <span v-if="product.images.length" class="p-2 w-full flex gap-4 items-start rounded-lg">
                      <img :v-for="(image, index) in product.images"  :src="image.url" class="w-10 h-auto" alt="">
<!--                      <img class="w-full h-full object-cover rounded-lg" :src="previewImage"/>-->
                    </span>
                    <span v-else class="flex flex-col items-center justify-center pt-5 pb-6">
                      <Icon name="solar:cloud-upload-line-duotone" class="w-12 h-12"/>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                          class="font-semibold">Click to upload </span></p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 1024kb)</p>
                    </span>
                    <input id="dropzone-file" multiple @input="uploadImages" type="file" class="hidden" label-name="file"/>
                  </label>
                </div>
                <small class="text-red-500 text-left" v-if="error?.response?.data?.errors?.image">
                  {{ error?.response?.data?.errors?.image[0] }}
                </small>
              </div>
            </div>
<!--            <div>-->
<!--              <Editor v-model="product.details" class="h-80"/>-->
<!--            </div>-->
          </div>

        </form>
      </TransitionGroup>

    </div>
  </div>
</template>
<style>
.note-editable {
  min-height: 12rem !important;
}
</style>