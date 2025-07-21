<template>
    <div class="min-h-screen w-full flex justify-center items-center py-10 lg:py-20">
      <div
        class="w-[90%] max-w-4xl bg-boxColor flex flex-wrap rounded-xl shadow-xl p-4"
      >
        <div class="w-full lg:w-1/2 lg:pr-5 lg:pt-10">
          <h3 class="text-2xl font-semibold mb-3">Create Account</h3>

          <div>
            <label for="name" class="block pb-1 text-xs">Name</label>
            <input
              type="text"
              id="name"
              v-model="state.name"
              class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-primary focus:outline-none placeholder:text-gray-400 px-3 mb-2"
            />
          </div>

          <div>
            <label for="phone" class="block pb-1 text-xs">Phone</label>
            <div class="flex items-center space-x-2">
       
              <div class="relative w-1/2 lg:w-2/5">
                <div
                  @click="toggleDropdown"
                  class="p-2 border rounded-full w-full text-[10px] lg:text-[12px] cursor-pointer flex items-center bg-boxColor"                >
                  <img
                    v-if="selectedCountry"
                    :src="selectedCountry.flags.png"
                    class="w-5 h-5 mr-2"
                  />
                  <span
                    >{{ selectedCountry?.cca2 }} (+{{ selectedCountry?.idd.root
                    }}{{ selectedCountry?.idd.suffixes?.[0] || "" }})</span
                  >
                </div>
                <div
                  v-if="showDropdown"
                  class="absolute bg-white shadow-md rounded-md text-[10px] lg:text-[12px] w-full mt-1 max-h-60 overflow-auto z-10"
                >
                  <div
                    v-for="country in countries"
                    :key="country.cca2"
                    @click="selectCountry(country)"
                    class="p-2 flex items-center hover:bg-gray-200 cursor-pointer"
                  >
                    <img :src="country.flags.png" class="w-6 h-5 mr-2" />
                    <span
                      >{{ country.cca2 }} (+{{ country.idd.root
                      }}{{ country.idd.suffixes?.[0] || "" }})</span
                    >
                  </div>
                </div>
              </div>

              <div class="w-1/2 lg:w-3/5">
                <input
                  type="tel"
                  id="phone"
                  v-model="state.phone"
                  class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-primary focus:outline-none placeholder:text-gray-400 px-3"
                />
              </div>
            </div>
          </div>
          <div>
            <label for="email" class="block pb-1 text-xs">Email</label>
            <input
              type="email"
              id="email"
              v-model="state.email"
              class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-primary focus:outline-none placeholder:text-gray-400 px-3 mb-2"
            />
          </div>

          <div>
            <label for="password" class="block pb-1 text-xs">Password</label>
            <input
              type="password"
              id="password"
              v-model="state.password"
              class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-primary focus:outline-none placeholder:text-gray-400 px-3 mb-2"
            />
          </div>

          <div class="text-center py-5">
            <button
              @click="handleRegister"
              :disabled="isRegistering"
              class="w-full py-2 bg-primary text-white font-bold text-center rounded-lg my-2 disabled:opacity-50"
            >
              {{ isRegistering ? "Registering..." : "Register Now" }}
            </button>
          </div>

          <p>
            Already have an account
            <RouterLink to="/login" class="text-primary">Login Here</RouterLink>
          </p>
        </div>

        <div class="hidden lg:block w-1/2">
          <img
            class="w-full h-96 object-cover rounded-xl"
            src="https://i.pinimg.com/564x/7b/3f/e1/7b3fe1e66e263b7e0c0e1f1cfb4086c7.jpg"
          />
        </div>
      </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/useAuthStore";
// import { useStore } from "@/stores/useStore.js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
const authStore = useAuthStore();
const router = useRouter();
// const store = useStore();
const toast = useToast();
const state = ref({
  name: "",
  phone: "",
  email: "",
  password: "",
});

const isRegistering = ref(false);
const handleRegister = async () => {
  try {
    isRegistering.value = true;

    const phoneWithCode = `+${selectedCountry.value.idd.root}${
      selectedCountry.value.idd.suffixes?.[0] || ""
    }${state.value.phone}`;

    const payload = {
      name: state.value.name,
      phone: phoneWithCode,
      email: state.value.email,
      password: state.value.password,
    };

    const response = await authStore.register(payload);

    if (response.data.status === 200) {
      toast.success(
        "Registration successful! Please check your email for OTP."
      );
      store.setEmail(state.value.email);
      await router.push("/verify-email-otp");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Registration failed");
  } finally {
    isRegistering.value = false;
  }
};

const countries = ref([]);
const selectedCountry = ref(null);
const showDropdown = ref(false);

const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    countries.value = data.map((country) => ({
      name: country.name,
      cca2: country.cca2,
      flags: country.flags,
      idd: country.idd || { root: "", suffixes: [""] },
    }));
    selectedCountry.value =
      countries.value.find((c) => c.cca2 === "BD") || null;
  } catch (error) {
    console.error("Error fetching country data:", error);
  }
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const selectCountry = (country) => {
  selectedCountry.value = country;
  showDropdown.value = false;
};

onMounted(fetchCountries);
</script>