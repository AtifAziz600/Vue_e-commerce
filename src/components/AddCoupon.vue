<template>
  <AppLayout>
  <section class="bg-gray-50 py-12 px-4">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Apply Coupon Code</h2>

      <form @submit.prevent="applyCoupon" class="flex flex-col sm:flex-row gap-4">
        <input
          v-model="enteredCode"
          type="text"
          placeholder="Enter coupon code"
          class="flex-1 border border-gray-300 px-4 py-2 rounded-lg text-gray-700 focus:outline-rose-500"
        />
<RouterLink to="/cart-order">
            <button
          type="submit"
          class="bg-primarysButton hover:bg-secondysButton text-white px-5 py-2 rounded-lg font-semibold"
        >
          Apply
        </button>
</RouterLink>
      </form>

      <p v-if="message" :class="messageType" class="mt-4 text-sm font-medium">
        {{ message }}
      </p>

      <div class="mt-8">
        <h3 class="text-lg font-semibold mb-2 text-gray-700">Available Coupons</h3>
        <ul class="space-y-2">
          <li
            v-for="coupon in availableCoupons"
            :key="coupon.code"
            @click="selectCoupon(coupon)"
            :class="[
             'border p-4 rounded-lg transition cursor-pointer',
              coupon.code === enteredCode ? 'bg-indigo-100 border-indigo-400' : 'bg-gray-100 hover:bg-gray-200']"
          >
            <div class="flex items-center justify-between">
              <span class="font-semibold text-gray-800">{{ coupon.code }}</span>
              <span class="text-sm text-gray-600">{{ coupon.description }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useCouponCode } from "../stores/useCouponCode"
const toast = useToast()

const enteredCode = ref('')
const message = ref('')
const messageType = ref('')
const couponStore = useCouponCode()
const availableCoupons = ref([
  { code: 'SAVE10', description: 'Get 10% off your order' },
  { code: 'FREESHIP', description: 'Free shipping on all orders' },
  { code: 'WELCOME', description: 'Flat zł5 discount for new users' },
])

function applyCoupon(codeToApply = enteredCode.value) {
  const code = codeToApply?.trim().toLowerCase()

  const found = availableCoupons.value.find(
    c => c.code.toLowerCase() === code
  )

  if (found) {
    toast.success(`Coupon "${found.code}" applied successfully!`)
    message.value = `${found.description}`
    messageType.value = 'text-green-600'
    couponStore.applyCoupon(found.code)
  } else {
    toast.error('Invalid coupon code.')
    message.value = 'Invalid or expired coupon.'
    messageType.value = 'text-red-600'
    couponStore.clearCoupon()
  }
}
function selectCoupon(coupon) {
  enteredCode.value = coupon.code
  message.value = `Selected coupon: ${coupon.description}`
  messageType.value = 'text-blue-600'
  applyCoupon(coupon.code)
}
</script>

<style scoped>
</style>
