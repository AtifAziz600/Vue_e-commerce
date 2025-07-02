<template>
  <footer class="block mt-10">
    <!--      <router-link to="#app" class="bg-secondary text-center text-md font-semibold py-3 text-gray-300 w-full hover:bg-gray-700 transition-all ease-in-out duration-500"> Back To Top</router-link>-->
    <section class="bg-primary border-b border-gray-600">
      <div class="container items-start justify-center mx-auto lg:gap-5 flex py-12 flex-col lg:flex-row">
        <div class="lg:w-[65%] w-full mr-20">
          <div>
            <img src="/images/logo.png" alt="" class="h-auto w-24">
            <p class="text-white text-justify lg:tracking-tight tracking-normal mt-5 font-semibold">
              {{ contact.footerContent }}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-4 lg:gap-8">
        <div v-for="(page, i) in footerPages" :key="`single-page-${i}`" class="w-full">
          <div class="text-white">
            <h2 class="text-white p-0 py-2 ">{{ page?.title }}</h2>
            <ul class="leading-7 lg:text-sm text-xs">
              <li class="hover:underline" v-for="(item, j) in page.pages" :key="`single-item-page-${j}`">
                <RouterLink :to="`/page/${item?.slug}`">{{ item?.title }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>


          <div class="w-full">
            <div class="text-white">
              <h2 class="text-white p-0 py-2 ">Contact Us</h2>
              <div class="flex flex-col space-y-2 mt-2">
                <div class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/></svg>
                  <p>{{ contact?.address }}</p>
                </div>
                <div class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M20.875 22q-3.9 0-7.337-1.475q-3.438-1.475-6-4.037q-2.563-2.563-4.05-6Q2 7.05 2 3.125q-.025-.45.3-.788Q2.625 2 3.1 2H7q.45 0 .775.337q.325.338.325.813q0 1.1.15 2.075q.15.975.475 1.85q.125.275.05.562q-.075.288-.3.538l-2.5 2.5q1.075 2.2 3.05 4.175Q11 16.825 13.275 18l2.5-2.5q.225-.225.525-.3q.3-.075.6.05q.925.3 1.912.462q.988.163 2.038.163q.475 0 .813.35q.337.35.337.85V20.9q0 .45-.325.775t-.8.325ZM20 12q0-3.35-2.325-5.675Q15.35 4 12 4V2q2.075 0 3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12Zm-4 0q0-1.65-1.175-2.825Q13.65 8 12 8V6q2.5 0 4.25 1.75T18 12Z"/></svg>

                  <div class="flex flex-col flex-start">
                    <p v-for="(number, i) in contact?.phone?.split('|')" :key="`single-number${i}`">
                      {{ number }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.95h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10s-10 4.48-10 10s4.48 10 10 10m0-7c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"/></svg>
                  <div class="flex flex-col">
                    <p v-for="(email, i) in contact?.email?.split('|')" :key="`single-email-${i}`">
                      {{ email }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        <div class="w-full">
          <div class="text-white">
            <h2 class="text-white p-0 py-2 ">Business Details</h2>
            <div class="flex flex-col space-y-2 mt-2">

              <p>Trade licence(BD) : TRAD/DNCC/051964/2023</p>
              <p>TIN(BD) : 385133543108</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <div class="bg-primary h-20 pt-10 pb-52 px-5 lg:px-16">
      <div class="flex justify-between flex-col md:flex-row items-center gap-10 lg:gap-0">
        <p class="pt-5 text-white capitalize text-xs lg:text-sm">Copyright &copy; {{ new Date()?.getFullYear() }} Apricot. All rights reserved</p>
        <div>
          <ul class="flex items-center lg:gap-2">
            <li class="me-8">
              <img class="w-20" src="@/assets/img/ameexp.png" alt="">
            </li>
            <li>
              <img class="w-20" src="@/assets/img/visa.png" alt="">
            </li>
            <li>
              <img class="w-20" src="@/assets/img/master.png" alt="">
            </li>
            <li class="lg:border-l-4 border-l-2 border-gray-500 lg:h-16 h-5 lg:pl-8"></li>
            <li class="ms-5 lg:ms-0">
              <img class="h-8 lg:h-12" src="@/assets/img/f_ssl_logo.png" alt="">
            </li>
          </ul>
        </div>

        <p class="lg:pt-5 text-white capitalize text-xs lg:text-sm">
          <a class="underline text-orange-500" href="https://creativetechpark.com/" target="_blank">Web Development Company</a> Creative Tech Park
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import {onMounted, ref} from "vue";
import useAxios from "@/composables/useAxios.js";
const {sendRequest, error, loading} = useAxios();
const footerPages = ref([])
const contact = ref([])

onMounted(async ()=>{
  const footerData = await sendRequest("/get-footer-settings")
  const footerContact = await sendRequest("/footer-contact")
  footerPages.value = footerData?.data
  contact.value = footerContact.data
})


</script>
