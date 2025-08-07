<template>
  <div class="max-w-screen-2xl mx-auto">
    <Header class="sticky top-0 z-50" />
    <div v-if="isMobile">
      <div id="google_translate_element_mobile" class=""></div>
    </div>
    <div v-else>
      <div id="google_translate_element_laptop" class=""></div>
    </div>
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, ref, onBeforeUnmount } from "vue";

const isMobile = ref(window.innerWidth < 1024);

const updateScreenSize = () => {
  isMobile.value = window.innerWidth < 1024;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
  loadGoogleTranslateScript();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});

let isGoogleTranslateLoaded = false;

window.googleTranslateElementInit = () => {
  if (
    window.google &&
    window.google.translate &&
    google.translate.TranslateElement
  ) {
    if (
      isMobile.value &&
      document.getElementById("google_translate_element_mobile")
    ) {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element_mobile"
      );
    }

    if (
      !isMobile.value &&
      document.getElementById("google_translate_element_laptop")
    ) {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element_laptop"
      );
    }
  } else {
    setTimeout(() => {
      window.googleTranslateElementInit();
    }, 500);
  }
};

const loadGoogleTranslateScript = () => {
  if (!isGoogleTranslateLoaded) {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onload = () => {
      isGoogleTranslateLoaded = true;
      window.googleTranslateElementInit();
    };
    script.onerror = () => {
      console.error("Google Translate failed to load");
    };
    document.body.appendChild(script);
  } else {
    window.googleTranslateElementInit();
  }
};
</script>

<style>
.goog-te-gadget-icon {
  display: none !important;
}
.goog-te-gadget-simple {
  background-color: white !important;
  border: 0 !important;
  font-size: 10pt;
  font-weight: 800;
  display: inline-block;
  padding: 5px !important;
  cursor: pointer;
  white-space: nowrap !important;
}
.goog-te-gadget-simple span {
  display: none !important;
}
.goog-te-gadget-simple span a {
  display: flex !important;
}
</style>
