<template>
  <AppLayout>
    <section class="w-full h-64 bg-gray-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-deepMaroon to-secondysButton opacity-70"></div>
      <div class="absolute inset-0 backdrop-blur-md flex items-center justify-center">
        <div class="text-center relative z-10 px-4">
          <h1 class="text-3xl md:text-4xl font-semibold text-white mb-2">My Account</h1>
          <p class="text-gray-100 max-w-2xl mx-auto">Manage your orders, personal information, and account settings</p>
        </div>
      </div>
    </section>

 
    <section class="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto -mt-16 pb-16">

      <div class="rounded-xl bg-white/80 backdrop-blur-lg shadow-xl border border-white/20 p-6 relative z-10">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="relative">
            <img class="w-24 h-24 rounded-full border-4 border-white/50 shadow-lg object-cover"
              src="https://cdn-icons-png.freepik.com/256/15232/15232242.png?uid=R102446229&ga=GA1.1.1386564851.1716744340&semt=ais_hybrid"
              alt="User" />
            <div class="absolute -bottom-2 -right-2 bg-deepMaroon rounded-full p-1 shadow-md">
              <Icon name="mdi:check-decagram" class="text-white text-lg" />
            </div>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-2xl font-semibold text-gray-900">
              {{ authStore?.user?.user?.name }}
            </h3>
            <p class="text-sm text-gray-500 mt-1">
              Member since {{ moment(customer?.created_at).format("MMMM YYYY") }}
            </p>
            <div class="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
              <span class="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                <Icon name="heroicons:shopping-bag" class="text-gray-600" />
                {{ customer?.combine_orders?.length || 0 }} orders
              </span>
              <span class="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                <Icon name="heroicons:map-pin" class="text-gray-600" />
                {{ customer?.addresses?.length || 0 }} addresses
              </span>
            </div>
          </div>
          <button @click="authStore?.logout" 
            class="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors">
            <Icon name="solar:logout-broken" class="text-current" />
            <span class="hidden md:inline">Sign Out</span>
          </button>
        </div>
      </div>

      <div class="mt-8">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8">
            <button 
              v-for="(tab, index) in tabs" 
              :key="index" 
              @click="activeTab = index" 
              :class="[
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                activeTab === index
                  ? 'border-deepMaroon text-deepMaroon'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              ]">
              {{ tab }}
            </button>
          </nav>
        </div>

        <div v-if="activeTab === 0" class="mt-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Order History</h2>
          
          <div v-if="customer?.combine_orders?.length" class="space-y-4">
            <div v-for="(order, i) in customer.combine_orders" :key="i"
              class="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
              <div class="p-5">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div class="flex items-start gap-4">
                    <div class="w-20 h-20 rounded-md bg-gray-100 overflow-hidden flex-shrink-0">
                      <img :src="order?.orders?.[0]?.order_details?.[0]?.product?.cover_image_url || 'https://via.placeholder.com/150'"
                        class="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 class="text-base font-medium text-gray-900 mb-1">
                        {{ order?.order_code }}
                      </h4>
                      <p class="text-sm text-gray-500">
                        {{ new Date(order?.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                      </p>
                      <div class="mt-2 flex flex-wrap gap-2">
                        <span :class="`text-xs px-2 py-1 rounded-full ${getStatusColor(order?.order_status)}`">
                          {{ order?.order_status }}
                        </span>
                        <span :class="`text-xs px-2 py-1 rounded-full ${getStatusColor(order?.payment_status)}`">
                          {{ order?.payment_status }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-lg font-semibold text-gray-900">
                      zł {{ order?.grand_total }}
                    </p>
                    <RouterLink :to="`/order-detail/${order?.id}`"
                      class="inline-flex items-center gap-1 text-sm text-deepMaroon hover:text-secondysButton mt-2">
                      View details
                      <Icon name="heroicons:chevron-right" class="w-3 h-3" />
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div v-else class="text-center py-12">
            <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="heroicons:shopping-bag" class="w-10 h-10 text-gray-400" />
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-1">No orders yet</h3>
            <p class="text-gray-500 max-w-md mx-auto">Your order history will appear here once you make purchases.</p>
            <RouterLink to="/products" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-deepMaroon hover:bg-blue-700 focus:outline-none">
              Start Shopping
            </RouterLink>
          </div>
        </div>

        <div v-if="activeTab === 1" class="mt-6">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-900">Personal Information</h3>
                <button @click="openEditModal" class="text-sm text-deepMaroon hover:text-secondysButton flex items-center gap-1">
                  <Icon name="heroicons:pencil" class="w-4 h-4" />
                  Edit
                </button>
              </div>
              
              <div v-if="customerLoading" class="space-y-4">
                <div class="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div class="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
              
              <div v-else class="space-y-3">
                <div class="flex items-start">
                  <div class="w-24 text-sm text-gray-500">Name</div>
                  <div class="flex-1 text-gray-900">{{ customer?.name || 'Not provided' }}</div>
                </div>
                <div class="flex items-start">
                  <div class="w-24 text-sm text-gray-500">Email</div>
                  <div class="flex-1 text-gray-900">{{ customer?.email || 'Not provided' }}</div>
                </div>
                <div class="flex items-start">
                  <div class="w-24 text-sm text-gray-500">Phone</div>
                  <div class="flex-1 text-gray-900">{{ customer?.phone || 'Not provided' }}</div>
                </div>
              </div>
            </div>


            <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-900">Default Address</h3>

              </div>
              
              <div v-if="customer?.addresses?.[0]" class="space-y-3">
                <div class="flex items-start">
                  <div class="w-24 text-sm text-gray-500">Address</div>
                  <div class="flex-1 text-gray-900">
                    {{ customer.addresses[0].street_address }}, {{ customer.addresses[0].city }}, 
                    {{ customer.addresses[0].state }} {{ customer.addresses[0].zip_code }}
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-24 text-sm text-gray-500">Country</div>
                  <div class="flex-1 text-gray-900">{{ customer.addresses[0].country }}</div>
                </div>
              </div>
              
              <div v-else class="text-center py-4">
                <div class="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-gray-400" />
                </div>
                <p class="text-gray-500 mb-3">No address saved</p>

              </div>
            </div>
          </div>

          <div class="mt-6 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-sm font-medium text-gray-900">Email Notifications</h4>
                  <p class="text-sm text-gray-500">Receive updates about your orders and promotions</p>
                </div>
                <button @click="toggleNotifications" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                  :class="notificationsEnabled ? 'bg-deepMaroon' : 'bg-gray-200'">
                  <span class="sr-only">Enable notifications</span>
                  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                    :class="notificationsEnabled ? 'translate-x-6' : 'translate-x-1'"></span>
                </button>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-sm font-medium text-gray-900">Change Password</h4>
                  <p class="text-sm text-gray-500">Update your account password</p>
                </div>
                <button class="text-sm text-deepMaroon hover:text-secondysButton flex items-center gap-1">
                  <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                  Change
                </button>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-sm font-medium text-gray-900">Delete Account</h4>
                  <p class="text-sm text-gray-500">Permanently remove your account</p>
                </div>
                <button @click="openDeleteModal" class="text-sm text-red-600 hover:text-red-800 flex items-center gap-1">
                  <Icon name="heroicons:trash" class="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900">Edit Profile</h3>
          <button @click="showEditModal = false" class="text-gray-400 hover:text-gray-500">
            <Icon name="heroicons:x-mark" class="w-6 h-6" />
          </button>
        </div>
        
        <form @submit.prevent="handleEditSubmit">
          <div class="space-y-4">
            <div>
              <label for="edit-name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                v-model="editForm.name" 
                id="edit-name" 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deepMaroon focus:border-deepMaroon"
                required
              >
            </div>
            
            <div>
              <label for="edit-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                v-model="editForm.email" 
                id="edit-email" 
                type="email" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deepMaroon focus:border-deepMaroon"
                required
              >
            </div>
            
            <div>
              <label for="edit-phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                v-model="editForm.phone" 
                id="edit-phone" 
                type="tel" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deepMaroon focus:border-deepMaroon"
              >
            </div>
          </div>
          
          <div class="mt-6 flex justify-end space-x-3">
            <button 
              type="button" 
              @click="showEditModal = false" 
              class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deepMaroon hover:bg-secondysButton focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deepMaroon"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Save Changes</span>
              <span v-else class="flex items-center justify-center">
                <Icon name="eos-icons:loading" class="w-4 h-4 mr-2" />
                Saving...
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-900">Delete Account</h3>
          <button @click="showDeleteModal = false" class="text-gray-400 hover:text-gray-500">
            <Icon name="heroicons:x-mark" class="w-6 h-6" />
          </button>
        </div>
        
        <p class="text-gray-600 mb-6">Are you sure you want to delete your account? This action cannot be undone. All your data will be permanently removed.</p>
        
        <div class="flex justify-end space-x-3">
          <button 
            @click="showDeleteModal = false" 
            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            @click="handleDeleteAccount" 
            class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            :disabled="isDeleting"
          >
            <span v-if="!isDeleting">Delete Account</span>
            <span v-else class="flex items-center justify-center">
              <Icon name="eos-icons:loading" class="w-4 h-4 mr-2" />
              Deleting...
            </span>
          </button>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { useAuthStore } from "../../stores/useAuthStore.js";
import { ref, onMounted, reactive } from "vue";
import moment from "moment";
import { inject } from "vue";
import useAxios from "@/composables/useAxios";
import { useRouter } from 'vue-router';
import { useToast } from "vue-toastification";
const router = useRouter();
const toast = useToast();
const data = inject("data");
const authStore = useAuthStore();
const tabs = ["Orders", "Profile"];
const { sendRequest } = useAxios();
const activeTab = ref(0);
const customer = ref(null);
const customerLoading = ref(false);

const showEditModal = ref(false);
const showDeleteModal = ref(false);
const isSubmitting = ref(false);
const isDeleting = ref(false);
const notificationsEnabled = ref(true);


// const newAddressForm = reactive({
//   street_address: '',
//   city: '',
//   state: '',
//   zip_code: '',
//   country: 'Poland', 
//   is_default: true
// });
const editForm = reactive({
  name: '',
  email: '',
  phone: '',
});

const getCustomer = async () => {
  customerLoading.value = true;
  try {
    const response = await sendRequest({
      url: `customer/customer/${authStore.user?.user?.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${authStore.user.token}`,
        Accept: "application/json",
      },
    });
    
    if (response) {
      customer.value = response.data;
      editForm.name = customer.value.name;
      editForm.email = customer.value.email;
      editForm.phone = customer.value.phone;
    }
  } catch (error) {
    console.error("Error fetching customer data:", error);
  } finally {
    customerLoading.value = false;
  }
};

const openEditModal = () => {
  showEditModal.value = true;
};

const openDeleteModal = () => {
  showDeleteModal.value = true;
};

const toggleNotifications = () => {
  notificationsEnabled.value = !notificationsEnabled.value;
};

const handleEditSubmit = async () => {
  isSubmitting.value = true;
  try {
    const response = await sendRequest({
      url: `customer/customer/${authStore.user?.user?.id}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authStore.user.token}`,
        Accept: "application/json",
      },
      data: editForm
    });
    
    if (response) {
      customer.value.name = editForm.name;
      customer.value.email = editForm.email;
      customer.value.phone = editForm.phone;
      
      
      if (authStore.user?.user) {
        authStore.user.user.name = editForm.name;
        authStore.user.user.email = editForm.email;
      }
      showEditModal.value = false;
      toast.success('Profile Successfully Updated')
    }
  } catch (error) {
    console.log('Error In your Porfile', error)
  } finally {
    isSubmitting.value = false;
  }
};

const handleDeleteAccount = async () => {

  isDeleting.value = true;
  try {
    const response = await sendRequest({
      url: `/customer/customer/${authStore.user?.user?.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authStore.user.token}`,
        Accept: "application/json",
      }
    });
    
    if (response) {
      toast.success('Account deleted successfully');
      await authStore.logout();
      router.push('/');
    }
  } catch (error) {
    console.error("Error deleting account:", error);
    toast.error(error.response?.data?.message || 'Failed to delete account');
  } finally {
    isDeleting.value = false;
    showDeleteModal.value = false;
  }
};

const getStatusColor = (status) => {
  const statusMap = {
    'completed': 'bg-green-100 text-green-800',
    'paid': 'bg-green-100 text-green-800',
    'pending': 'bg-yellow-100 text-yellow-800',
    'processing': 'bg-blue-100 text-secondysButton',
    'shipped': 'bg-purple-100 text-purple-800',
    'cancelled': 'bg-red-100 text-red-800',
    'failed': 'bg-red-100 text-red-800'
  };
  return statusMap[status.toLowerCase()] || 'bg-gray-100 text-gray-800';
};

onMounted(async () => {
  window.scrollTo(0, 0);
  await getCustomer();
});
</script>