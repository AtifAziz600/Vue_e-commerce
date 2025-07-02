<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import LoadingButton from "@/components/LoadingButton.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Input from "@/components/Input.vue";
import {useToast} from "vue-toastification";
import {onMounted, ref} from "vue";
import useAxios from "@/composables/useAxios.js";

const {sendRequest, loading, error} = useAxios();
const toast = useToast();
const user = ref({
  name: null,
  email:null,
  phone:null,
  user_password:null,
  type:'vendor',
  commission:null,
  minimumWithdraw:null,
})
const categories = ref([])
const iconImagePreview = ref(null)
const iconImage = (image) => {
  const file = image.target.files[0];
  user.value.icon = file;
  iconImagePreview.value = URL.createObjectURL(file);
}
const previewImage = ref(null)
const coverImage = (image) => {
  const file = image.target.files[0];
  user.value.image = file;
  previewImage.value = URL.createObjectURL(file);
}



const saveUser = async () => {
  const res = await sendRequest({
    url: '/v1/user',
    method: 'POST',
    data: user.value
  })
  user.value = {}
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
  <AppLayout>
    <Breadcrumbs
        :item="{name:'Vendor', path:'/vendor', icon:'solar:shop-bold-duotone'}"
        :links="[{name:'Index', path:'/vendor'},  {name:'Add Vendor', path:'/add-vendor'}]"
    />
    <div class="bg-white min-h-screen shadow-lg rounded-lg mt-4 p-4">
      <div class="flex items-center justify-between">
        <p class="font-bold">Create Vendor</p>
        <RouterLink to="/users"
                    class="px-2 py-1 rounded-md bg-primary-700 text-white flex items-center gap-2 hover:shadow-lg transition-all ease-in-out duration-300">
          <Icon name="solar:arrow-left-line-duotone"/>
          <span class="text-xs font-semibold">Back</span>
        </RouterLink>
      </div>
      <TransitionGroup name="fade" appear>
        <form @submit.prevent="saveUser" class="max-w-md mx-auto mb-20 mt-12 flex flex-col gap-5">
          <Input
              class="w-full"
              label="Name"
              labelName="Name"
              v-model="user.name"
              :error="error?.response?.data?.errors?.name"
              :loading="loading"
              type="text"
              required
              placeholder="e.g  john doh"
          />

          <div class="flex items-center gap-4">
            <Input
                class="w-full"
                label="Email"
                labelName="Email"
                v-model="user.email"
                :error="error?.response?.data?.errors?.email"
                :loading="loading"
                type="email"
                required
                placeholder="e.g  example@test.com"
            />

            <Input
                class="w-full"
                label="Password"
                labelName="Password"
                v-model="user.user_password"
                :error="error?.response?.data?.errors?.user_password"
                :loading="loading"
                type="password"
                required
                placeholder="Enter your Password"
            />
          </div>

          <Input
              class="w-full"
              label="Phone"
              labelName="Phone"
              v-model="user.phone"
              :error="error?.response?.data?.errors?.phone"
              :loading="loading"
              type="text"
              required
              placeholder="Enter your Phone"
          />

          <div class="flex items-center gap-4">
          <Input
              class="w-full"
              label="Commission Rate"
              labelName="Commission Rate"
              v-model="user.commission"
              :error="error?.response?.data?.errors?.commission"
              :loading="loading"
              type="text"
              required
              placeholder="e.g 25% sell commission rate fixed"
          />
            <Input
                class="w-full"
                label="Minimum Withdrew Balance"
                labelName="Minimum Withdrew Balance"
                v-model="user.minimumWithdraw"
                :error="error?.response?.data?.errors?.minimumWithdraw"
                :loading="loading"
                type="text"
                placeholder="e.g minimum withdrew balance"
            />
          </div>
          <LoadingButton :isLoading="loading">Save Vendor</LoadingButton>
        </form>
      </TransitionGroup>

    </div>
  </AppLayout>
</template>
