<template>
    <section class="bg-white py-8 antialiased md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <!-- Header -->
            <div class="flex items-center gap-2">
                <h2 class="text-2xl font-semibold text-gray-900">Reviews</h2>
                <div class="mt-2 flex items-center gap-2 sm:mt-0">
                    <div class="flex items-center gap-0.5">
                        <Icon icon="mdi-star" v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-300" />
                    </div>
                    <p class="text-sm font-medium leading-none text-gray-500">({{ averageRating }})</p>
                    <RouterLink to="/review"
                        class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline">
                        {{ reviews.length }} Reviews
                    </RouterLink>
                </div>
            </div>

            <!-- Average + Write Review -->
            <div class="my-6 gap-8 sm:flex sm:items-start md:my-8">
                <div class="shrink-0 space-y-4">
                    <p class="text-2xl font-semibold leading-none text-gray-900">{{ averageRating }} out of 5</p>
                    <button type="button" data-modal-target="review-modal" data-modal-toggle="review-modal"
                        class="mb-2 me-2 rounded-lg bg-deepMaroon px-5 py-2.5 text-sm font-medium text-white hover:bg-secondysButton">
                        Write a review
                    </button>
                </div>
            </div>

            <!-- Reviews -->
            <div class="mt-6 divide-y divide-gray-200">
                <div class="gap-3 py-6 sm:flex sm:items-start" v-for="review in reviews" :key="review.id">
                    <div class="shrink-0 space-y-2 sm:w-48 md:w-72">
                        <div class="flex items-center gap-0.5">
                            <Icon icon="mdi-star" v-for="i in review.rating" :key="i" class="h-5 w-5 text-yellow-300" />
                        </div>
                        <div class="space-y-0.5">
                            <p class="text-base font-semibold text-gray-900">{{ review.name }}</p>
                            <p class="text-sm font-normal text-gray-500">{{ review.date }}</p>
                        </div>
                        <div v-if="review.verified" class="inline-flex items-center gap-1">
                            <Icon icon="mdi:check-decagram" class="w-5 h-5 text-deepMaroon" />
                            <p class="text-sm font-medium text-gray-900">Verified purchase</p>
                        </div>
                    </div>

                    <div class="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                        <p class="text-base font-normal text-gray-500">{{ review.text }}</p>
                        <div v-if="review.images?.length" class="flex gap-2">
                            <img v-for="(img, index) in review.images" :key="index" :src="img"
                                class="h-32 w-20 rounded-lg object-cover" />
                        </div>
                        <div class="flex items-center gap-4">
                            <p class="text-sm font-medium text-gray-500">Was it helpful to you?</p>
                            <div class="flex items-center">
                                <input type="radio" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary" />
                                <label class="ms-2 text-sm font-medium text-gray-900">Yes: {{ review.helpfulYes
                                }}</label>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary" />
                                <label class="ms-2 text-sm font-medium text-gray-900">No: {{ review.helpfulNo }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div id="review-modal" tabindex="-1" aria-hidden="true"
                class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
                <div class="relative max-h-full w-full max-w-2xl p-4">
                    <div class="relative rounded-lg bg-white shadow">
                        <!-- Modal Header -->
                        <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
                            <div>
                                <h3 class="mb-1 text-lg font-semibold text-gray-900">Add a review for:</h3>
                                <span class="font-medium text-primary">Apple iMac 24" All-In-One</span>
                            </div>
                            <button type="button" data-modal-toggle="review-modal"
                                class="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-900">
                                <Icon icon="mdi:close" class="w-5 h-5 text-black" />
                            </button>
                        </div>

                        <!-- Modal Body -->
                        <form class="p-4 md:p-5" @submit="addReview">
                            <div class="grid grid-cols-2 gap-4 mb-4">
                                <div class="col-span-2">
                                    <label for="title" class="block text-sm font-medium text-gray-900 mb-2">Review
                                        title</label>
                                    <input v-model="newReview.text" id="title" type="text"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900" />
                                </div>
                                <div class="col-span-2 mb-4">
                                    <label class="block text-sm font-medium text-gray-900 mb-2">Your rating</label>
                                    <div class="flex items-center gap-1">
                                        <Icon v-for="i in 5" :key="i"
                                            :icon="i <= newReview.rating ? 'mdi:star' : 'mdi:star-outline'"
                                            class="w-6 h-6 cursor-pointer text-yellow-400 transition-transform hover:scale-110"
                                            @click="newReview.rating = i" />
                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <label for="description" class="block text-sm font-medium text-gray-900 mb-2">Review
                                        description</label>
                                    <textarea v-model="newReview.description" id="description" rows="4"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"></textarea>
                                </div>
                                <div class="col-span-2">
                                    <p class="mb-2 block text-sm font-medium text-gray-900">Add real photos of
                                        the product to help other customers <span
                                            class="text-gray-500">(Optional)</span></p>
                                    <div class="flex w-full items-center justify-center">
                                        <label for="dropzone-file"
                                            class="flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                                            <div class="flex flex-col items-center justify-center pb-6 pt-5">
                                                <Icon icon="mdi:cloud-upload-outline" class="w-8 h-8 text-deepMaroon" />
                                                <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click
                                                        to
                                                        upload</span> or drag and drop</p>
                                                <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX.
                                                    800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" class="hidden" multiple
                                                accept="image/svg+xml,image/png,image/jpg,image/jpeg,image/gif"
                                                @change="handleFileChange" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="border-t border-gray-200 pt-4 text-right">
                                <button type="submit"
                                    class="me-2 rounded-lg bg-deepMaroon px-5 py-2.5 text-sm font-medium text-white hover:bg-secondysButton">Add
                                    review</button>
                                <button type="button" data-modal-toggle="review-modal"
                                    class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="mt-6 text-center">
                <RouterLink to="/review">
                    <button type="button"
                    class="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-deepMaroon focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 ">View
                    more reviews</button>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Modal } from 'flowbite'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'


const reviews = ref([
    {
        id: 1,
        name: 'Micheal Gough',
        date: 'November 18 2023 at 15:35',
        verified: true,
        rating: 5,
        text: 'My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I’m very happy with this purchase.',
        helpfulYes: 3,
        helpfulNo: 0,
        images: [],
    },
    {
        id: 2,
        name: 'Jese Leos',
        date: 'November 18 2023 at 15:35',
        verified: true,
        rating: 5,
        text: 'It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!',
        helpfulYes: 1,
        helpfulNo: 0,
        images: [
            'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg',
            'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg',
        ],
    }
])

const newReview = ref({
    rating: "",
    title: '',
    description: '',
    text: '',
    date: new Date().toLocaleString(),
    name: 'Anonymous',
    verified: true,
    helpfulYes: 0,
    helpfulNo: 0,
    images: [],
})

function addReview(e) {
    e.preventDefault()
    if (newReview.value.description.trim() === '') return;

    reviews.value.push({
        id: Date.now(),
        ...newReview.value,
    })

    resetForm()
    modalInstance?.hide()
}

function resetForm() {
    newReview.value = {
        rating: 3,
        title: '',
        description: '',
        date: new Date().toLocaleString(),
        name: 'Anonymous',
        verified: true,
        helpfulYes: 0,
        helpfulNo: 0,
        images: [],
    }
}
function handleFileChange(event) {
    const files = event.target.files;
    if (!files.length) return;

    newReview.value.images = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = URL.createObjectURL(file);
        newReview.value.images.push(imageUrl);
    }
}

const averageRating = computed(() => {
    if (reviews.value.length === 0) return 0
    const sum = reviews.value.reduce((acc, r) => acc + r.rating, 0)
    return (sum / reviews.value.length).toFixed(2)
})

const modalId = 'review-modal'
let modalInstance = null

onMounted(() => {
    const $modalElement = document.getElementById(modalId);
    if ($modalElement) {
        modalInstance = new Modal($modalElement, {
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40'
        });

        const toggles = document.querySelectorAll(`[data-modal-toggle="${modalId}"]`)
        toggles.forEach(el => el.addEventListener('click', () => modalInstance.toggle()))
    }
})
</script>