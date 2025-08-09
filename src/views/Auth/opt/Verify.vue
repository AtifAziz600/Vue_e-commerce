<template>

    <div class="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 py-10 lg:py-20">
      <div
        class="w-full max-w-2xl bg-white flex flex-wrap rounded-xl shadow-xl p-4 justify-center items-center"
      >
        <h3 class="font-medium text-xl text-gray-950 mb-5 text-center">
          OTP Verification
        </h3>
        <form
          method="get"
          class="mb-5"
          ref="digitGroup"
          data-autosubmit="false"
          autocomplete="off"
        >
          <div class="flex items-center gap-2 justify-center">
            <input
              v-for="(digit, index) in digits"
              class="size-10 rounded-md border border-gray-400 focus:border-common focus:outline-none focus:shadow-outline text-black text-center text-xl font-medium"
              :key="index"
              v-model="digits[index]"
              :id="'digit-' + (index + 1)"
              :name="'digit-' + (index + 1)"
              :data-previous="index > 0 ? 'digit-' + index : null"
              :data-next="
                index < digits.length - 1 ? 'digit-' + (index + 2) : null
              "
              maxlength="1"
              @keyup="handleKeyup($event, index)"
              ref="digitInputs"
            />
          </div>
        </form>
        <div class="flex justify-center w-full">
          <button
            @click="onSubmit"
            class="w-2/3 bg-[#9A9488] text-white p-3 rounded-full hover:bg-[#757167] transition"
          >
            Submit {{}}
          </button>
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { ref } from "vue";
  import useAxios from "@/composables/useAxios";
  import { useRouter } from "vue-router";
  import { useAuthStore } from "@/stores/useAuthStore";
  
  const router = useRouter();
  const authStore = useAuthStore();
  const digits = ref(new Array(6).fill(""));
  const digitInputs = ref([]);
  const digitGroup = ref(null);
  const { sendRequest, errors } = useAxios();
  const handleKeyup = (event, index) => {
    const key = event.keyCode;
    if (key === 8 || key === 37) {
      if (index > 0) {
        digitInputs.value[index - 1].focus();
      }
    } else if (
      (key >= 48 && key <= 57) ||
      (key >= 65 && key <= 90) ||
      (key >= 96 && key <= 105) ||
      key === 39
    ) {
      if (index < digits.value.length - 1) {
        digitInputs.value[index + 1].focus();
      } else if (digitGroup.value.dataset.autosubmit === "true") {
        console.log("Submit form with OTP:", digits.value.join(""));
      }
    }
  };
  
  const onSubmit = async () => {
    const response = await sendRequest({
      url: "/customer/verify-phone-otp",
      method: "POST",
      data: {
        otp: digits.value.join(""),
        phone: authStore?.user?.user?.phone,
      },
    });
    if (response) {
     authStore.logout()

      router.push("/login");
    }
  };
  </script>
  