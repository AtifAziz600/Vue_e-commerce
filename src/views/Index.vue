<template>
  <AppLayout>
    <MainCarousel />
    <section class="category-cards-grid-container">
      <ProductOnHero
        cardTitle="Shop for your home essentials"
        :cardImages="[
          '../assets/img/download (1).jfif',
          '../assets/img/download (2).jfif',
          '../assets/img/download (3).jfif',
          '../assets/img/download (4).jfif',
        ]"
        cardLink="/home-essentials"
      />
    </section>
    <HomeCategoryCard />
    <RecommendedProduct />
    <ElectronicsCategories />
    <ProductCard />
    <ProductCardCarsoal />
    <ProductSlider />
    <Brands />
    <ProductCardItem />
    <Offer />
    <LowestCostItem />
    <FeatureSection />
    <Subcription />
    <!-- <OurPartner/> -->
    <Pagination />
  </AppLayout>
</template>

<script setup>
import MainCarousel from "@/components/MainCarousel.vue";
import HomeCategoryCard from "@/views/Category/HomeCategoryCard.vue";
import ProductCard from "@/views/Products/ProductCard.vue";
import ProductCardCarsoal from "@/components/ProductCardCarsoal.vue";
import ProductSlider from "@/components/ProductSlider.vue";
import FeatureSection from "@/components/FeatureSection.vue";
import Pagination from "@/components//Pagination.vue";
import ProductCardItem from "@/components/ProductCardItem.vue";
import RecommendedProduct from "@/components/LatestProduct.vue";
// import OurPartner from "@/components/OurPayment.vue";
import Subcription from "@/components/Subcription.vue";
import ProductOnHero from "@/components/ProductOnHero.vue";
import Offer from "./CarusoulCard/Offer.vue";
import Brands from "@/components/Brands.vue";
import LowestCostItem from "./CarusoulCard/LowestCostItem.vue";
import ElectronicsCategories from "./CarusoulCard/ElectronicsCategories.vue";
</script>
<style>
.category-cards-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 2400px;
  margin: -220px auto 48px auto;
  position: relative;
  z-index: 2;
  padding: 50px 24px 50px 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s;
}
.category-cards-grid-container:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  .category-cards-grid-container {
    grid-template-columns: 1fr;
    margin-top: 20px;
    display: none;
  }
}
</style>
