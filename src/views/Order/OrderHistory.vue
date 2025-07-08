<template>
    <AppLayout>
        <section class="bg-gray-100 py-8 antialiased md:py-16 min-h-screen">
            <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div class="mx-auto max-w-5xl">
                    <!-- Header -->
                    <div class="gap-4 sm:flex sm:items-center sm:justify-between mb-8">
                        <h2 class="text-3xl font-extrabold sm:text-4xl flex items-center gap-2">
                            My Orders
                        </h2>
                        <div class="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                            <div>
                                <label for="order-type" class="sr-only mb-2 block text-sm font-medium text-gray-900">Select order type</label>
                                <select id="order-type" class="block w-full min-w-[8rem] rounded-lg border bg-white p-2.5 text-sm shadow">
                                    <option selected>All orders</option>
                                    <option value="pre-order">Pre-order</option>
                                    <option value="transit">In transit</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                            <span class="inline-block font-semibold"> from </span>
                            <div>
                                <label for="duration" class="sr-only mb-2 block text-sm font-medium text-gray-900">Select duration</label>
                                <select id="duration" class="block w-full rounded-lg border bg-white p-2.5 text-sm shadow">
                                    <option selected>this week</option>
                                    <option value="this month">this month</option>
                                    <option value="last 3 months">the last 3 months</option>
                                    <option value="last 6 months">the last 6 months</option>
                                    <option value="this year">this year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 flow-root sm:mt-8">
                        <div class="divide-y rounded-xl bg-white shadow-lg overflow-hidden">
                            <div
                                v-for="order in orders"
                                :key="order.id"
                                class="flex flex-wrap items-center gap-y-4 py-8 px-6 transition"
                            >
                                <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt class="text-base font-medium text-gray-600">Order ID:</dt>
                                    <dd class="mt-1.5 text-base font-semibold text-gray-900">
                                        <a href="#" class="hover:underline">{{ order.id }}</a>
                                    </dd>
                                </dl>
                                <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt class="text-base font-medium text-gray-600">Date:</dt>
                                    <dd class="mt-1.5 text-base font-semibold text-gray-900">{{ order.date }}</dd>
                                </dl>
                                <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt class="text-base font-medium text-gray-600">Price:</dt>
                                    <dd class="mt-1.5 text-base font-semibold text-gray-900">{{ order.price }}</dd>
                                </dl>
                                <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                    <dt class="text-base font-medium text-gray-600">Status:</dt>
                                    <dd
                                        class="me-2 mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium"
                                        :class="statusClass(order.status)"
                                    >
                                        <span class="mr-1">
                                            <Icon :icon="statusIcons[order.status]" class="w-4 h-4" />
                                        </span>
                                        {{ order.status }}
                                    </dd>
                                </dl>
                                <div class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                    <button
                                        v-if="order.status === 'Pre-order' || order.status === 'In transit'"
                                        type="button"
                                        class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 transition"
                                    >
                                        Cancel order
                                    </button>
                                    <button
                                        v-else
                                        type="button"
                                        class="w-full rounded-lg border border-green-700 px-3 py-2 text-center text-sm font-medium text-green-700 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 transition"
                                    >
                                        Order again
                                    </button>
                                    <a
                                        href="#"
                                        class="w-full rounded-lg border border-blue-700 px-3 py-2 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                                    >
                                        View details
                                    </a>
                                </div>
                            </div>
                            <!-- End v-for -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import { Icon } from '@iconify/vue'

// Icon names for each status
const statusIcons = {
    'Pre-order': 'mdi:clock-outline',
    'In transit': 'mdi:truck-delivery-outline',
    'Confirmed': 'mdi:check-circle-outline',
    'Cancelled': 'mdi:close-circle-outline'
}

// Example orders data
const orders = [
    {
        id: '#FWB127364372',
        date: '20.12.2023',
        price: '$4,756',
        status: 'Pre-order'
    },
    {
        id: '#FWB125467980',
        date: '11.12.2023',
        price: '$499',
        status: 'In transit'
    },
    {
        id: '#FWB139485607',
        date: '08.12.2023',
        price: '$85',
        status: 'Confirmed'
    },
    {
        id: '#FWB137364371',
        date: '16.11.2023',
        price: '$119',
        status: 'Confirmed'
    },
    {
        id: '#FWB134567890',
        date: '02.11.2023',
        price: '$2,056',
        status: 'Confirmed'
    },
    {
        id: '#FWB146284623',
        date: '26.09.2023',
        price: '$180',
        status: 'Cancelled'
    },
    {
        id: '#FWB145967376',
        date: '17.07.2023',
        price: '$756',
        status: 'Confirmed'
    },
    {
        id: '#FWB148756352',
        date: '30.06.2023',
        price: '$235',
        status: 'Confirmed'
    },
    {
        id: '#FWB159873546',
        date: '04.06.2023',
        price: '$90',
        status: 'Cancelled'
    },
    {
        id: '#FWB156475937',
        date: '11.02.2023',
        price: '$1,845',
        status: 'Confirmed'
    }
]

// Status color classes
function statusClass(status) {
    switch (status) {
        case 'Pre-order':
            return 'bg-blue-100 text-blue-800'
        case 'In transit':
            return 'bg-yellow-100 text-yellow-800'
        case 'Confirmed':
            return 'bg-green-100 text-green-800'
        case 'Cancelled':
            return 'bg-red-100 text-red-800'
        default:
            return 'bg-gray-100 text-gray-800'
    }
}
</script>

<style scoped>
@media (max-width: 1023px) {
    .box + .box {
        margin-top: 1.5rem;
    }
}
</style>
