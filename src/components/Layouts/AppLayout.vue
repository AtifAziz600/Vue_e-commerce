<template>
  <div id="google_translate_element" class="max-w-screen-2xl mx-auto">
    <Header class="sticky top-0 z-50" />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(script);


  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",          
        includedLanguages: "pl",   
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
});
</script>
