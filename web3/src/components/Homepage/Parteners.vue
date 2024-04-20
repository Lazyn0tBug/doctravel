<template>
  <section class="carousel-area bg-gray-800 py-32">
    <div class="container">
        <!-- <swiper :options="swiperOption" class="portfolio-carousel"> -->
        <swiper :slidesPerView="3" :spaceBetween="30" :loop="true" :pagination="{ clickable: true, }" :navigation="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
          <img class="w-full" src="../../assets/img/slide/img1.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="../../assets/img/slide/img2.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="../../assets/img/slide/img3.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="../../assets/img/slide/img4.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="../../assets/img/slide/img5.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="../../assets/img/slide/img6.jpg" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </section>

    <!-- Clients Section Start -->
    <!--
    <div id="clients" class="py-16 bg-blue-100">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">As Seen On</h2>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="w-1/2 md:w-1/4 lg:w-1/4">
            <div class="m-3 wow fadeInUp" data-wow-delay="0.3s">
              <img class="client-logo" src="../../assets/img/clients/img1.svg" alt="">
            </div>
          </div>
          <div class="w-1/2 md:w-1/4 lg:w-1/4">
            <div class="m-3 wow fadeInUp" data-wow-delay="0.6s">
              <img class="client-logo" src="../../assets/img/clients/img2.svg" alt="">
            </div>
          </div>
          <div class="w-1/2 md:w-1/4 lg:w-1/4">
            <div class="m-3 wow fadeInUp" data-wow-delay="0.9s">
              <img class="client-logo" src="../../assets/img/clients/img3.svg" alt="">
            </div>
          </div>
          <div class="w-1/2 md:w-1/4 lg:w-1/4">
            <div class="m-3 wow fadeInUp" data-wow-delay="1.2s">
              <img class="client-logo" src="../../assets/img/clients/img4.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    -->
    <!-- Clients Section End -->

</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Use Swiper as module
const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

const modules = [Navigation, Pagination];
</script>
