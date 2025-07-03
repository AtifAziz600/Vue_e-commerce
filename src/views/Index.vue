<template>
  <AppLayout>
  <MainCarousel/>
    <section class="category-cards-grid-container">
      <ProductOnHero
        cardTitle="Shop for your home essentials"
        :cardImages="[ '../assets/img/download (1).jfif', '../assets/img/download (2).jfif', '../assets/img/download (3).jfif', '../assets/img/download (4).jfif' ]"
        cardLink="/home-essentials"
      />
      </section>
    <HomeCategoryCard/>
    <ProductCard />
    <ProductCardCarsoal/>
    <ProductSlider/>
    <BestSellerItems/>
    <ProductCardItem/>
    <RecommendedProduct/>
    <FeatureSection/>
    <OurPartner/>
    <!-- <div class="container mx-auto my-20">
      <slot />
    </div> -->
    <Pagination/>
    </AppLayout>
</template>

<script setup>
import MainCarousel from "@/components/MainCarousel.vue";
import HomeCategoryCard from "@/components/HomeCategoryCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductCardCarsoal from "@/components/ProductCardCarsoal.vue";
import ProductSlider from "@/components/ProductSlider.vue";
import FeatureSection from "@/components/FeatureSection.vue";
import Pagination from "@/components//Pagination.vue";
import ProductCardItem from "@/components/ProductCardItem.vue";
import BestSellerItems from "@/components/BestSellerItem.vue";
import RecommendedProduct from "@/components/RecommendedProduct.vue";
import OurPartner from "@/components/OurPartner.vue";
import ProductOnHero from "@/components/ProductOnHero.vue";
</script>
<style>


.category-cards-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px; 
  margin: -300px auto 60px auto; 
  position: relative; 
  z-index: 2; 
  padding: 0 20px; 
}

@media (max-width: 768px) {
  .category-cards-grid-container {
    grid-template-columns: 1fr; 
    margin-top: 20px; 
  }
}
</style>