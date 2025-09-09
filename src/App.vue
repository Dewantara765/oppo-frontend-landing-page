<script setup lang="ts">
import { ref} from 'vue'

import MenuItem from './components/MenuItem.vue';
import Product from './components/Product.vue';
import Event from './components/Event.vue';


const showDropdown1 = ref(false)
const showDropdown2 = ref(false)


</script>

<template>
  <div class="flex flex-row place-content-between">
    <div class="flex flex-row space-x-4 px-3 py-3 ">
        <div @mouseover="showDropdown1 = !showDropdown1" class="text-gray-700 hover:text-blue-700" >Smartphone</div>
        <div @mouseover="showDropdown2 = !showDropdown2" class="text-gray-700 hover:text-blue-700">Tablet</div>
        <div>Audio</div>
        <div>Wearables</div>
        <div>Tentang OPPO</div>
    </div>
    <div class="flex flex-row space-x-4 px-3 py-3 text-gray-700">
        <div>Online Store</div>
        <div>Komunitas</div>
        <div>ColorOS</div>
        <div>Dukungan</div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
        </div>

    </div>
  </div>

  <div @mouseleave="showDropdown1 = !showDropdown1" class="absolute p-5 flex flex-row space-x-3 z-20 bg-white h-1/2 w-full" v-if="showDropdown1">
      <MenuItem title="Oppo Find N5" image="/dropdown/440-440-oppo-find-n5.webp"/>
      <MenuItem title="Oppo Find X8 Pro" image="/dropdown/440-440-oppo-find-x8-pro.webp"/>
      <MenuItem title="Oppo Find X8" image="/dropdown/440-440-oppo-find-x8.webp"/>
      <MenuItem title="Oppo Reno14 Pro" image="/dropdown/440-440-oppo-reno-14-pro.webp"/>
      <MenuItem title="Oppo Reno14" image="/dropdown/440-440-oppo-reno-14.webp"/>
      <MenuItem title="Oppo A5 Pro" image="/dropdown/pink-440-440-oppo-a5-pro.webp"/>
      
  </div>

    <div @mouseleave="showDropdown2 = !showDropdown2" class="absolute p-5 flex flex-row space-x-3 z-20 bg-white h-1/2 w-full" v-if="showDropdown2">
      <MenuItem title="Oppo Pad SE" image="/dropdown/440-440-oppo-pad-se.webp"/>
      <MenuItem title="Oppo Pad Matte Display Edition" image="/dropdown/440-440-oppo-pad-matte.webp"/>
      <MenuItem title="Oppo Pad Neo" image="/dropdown/oppo-pad-neo.webp"/>
      <MenuItem title="Oppo Pad 2" image="/dropdown/oppo-pad-2.webp"/>
      <MenuItem title="Oppo Pad Air" image="/dropdown/440-440-oppo-pad-air.webp"/>
      
  </div>

  <img src="/hero/id-s3-blue-s2-white-2-1536-800-pad-v3.jpg" class="relative w-full"/>
  <p class="absolute top-1/9 left-1/12 bg-black text-white text-sm rounded-md px-2 py-2 z-10">OPPO AI Phone</p>
  <p class="absolute top-1/6 left-1/12 text-4xl font-semibold z-10">Reno14 Series <sup>5G</sup></p>
  <p class="absolute top-1/4 left-1/12 text-2xl z-10">AI Flash Photography | AI Editor 2.0<br>Underwater 4K Video</p>
  <button class="absolute top-9/10 left-1/12 text-sm rounded-xl px-2 py-2 border-2 z-10">Lebih Lanjut</button>
  <button class="absolute top-9/10 left-1/6 text-sm rounded-xl px-2 py-2 border-2 bg-black text-white z-10">Beli Sekarang</button>

  <img src="/hero/1536-800.jpg" class="relative w-full"/>
  <p class="absolute top-7/6 left-1/12 bg-black text-white text-sm rounded-md px-2 py-2 z-10">OPPO AI Phone</p>
  <p class="absolute top-5/4 left-1/12 text-4xl font-semibold z-10">OPPO Find N5</p>
  <p class="absolute top-4/3 left-1/12 text-2xl z-10">Co developed with Hasselblad</p>
  <button class="absolute top-4/2 left-1/12 text-sm rounded-xl px-2 py-2 border-2 z-10">Lebih Lanjut</button>
  <button class="absolute top-4/2 left-1/6 text-sm rounded-xl px-2 py-2 border-2 bg-black text-white z-10">Beli Sekarang</button>

  <img src="/hero/Pad.jpg" class="relative w-full"/>
  <p class="absolute top-13/6 left-1/12 text-4xl font-semibold z-10">OPPO A5 Pro</p>
  <p class="absolute top-9/4 left-1/12 text-2xl z-10">IP69, IP68, IP66 tahan air dan debu
  <br>Tahan benturan kelas militer
  <br>Baterai besar 5800 mAh</p>
  <button class="absolute top-6/2 left-1/12 text-sm rounded-xl px-2 py-2 border-2 z-10">Lebih Lanjut</button>
  <button class="absolute top-6/2 left-1/6 text-sm rounded-xl px-2 py-2 border-2 bg-black text-white z-10">Beli Sekarang</button>

  <div class="flex flex-row place-content-between">
    <div class="p-7 text-2xl">Produk Baru</div>
    <div class="p-7">Tampilkan semua</div>
  </div>
  

    <img src="/hero/2624-920-white.jpg.thumb.webp" class=" w-5/6 mx-5"/>
    <p class="absolute top-13/4 left-1/12 p-5 text-2xl font-bold m-2">OPPO Find X8</p>
    <div class="bg-green-200 absolute top-11/3 left-1/12 m-3">
      <div class="p-3">Powerful Camera. <br>
      Powerful AI.
      </div>
      <div class="flex flex-row p-3 space-x-2 underline">
        <div>Lebih Lanjut</div>
        <div>Beli sekarang </div>
      </div>
    </div>

    <div class="flex flex-row m-7 flex-wrap">
      <Product class-name="bg-gray-200 m-3 p-3 w-2/5" 
    image="/product/640-640-white.png.thumb.webp" title="Oppo Find X8 Pro" desc="Powerful Camera <br> Powerful AI"/>
   
      <Product class-name="bg-gray-200 m-3 p-3 w-2/5" 
    image="/product/640-640-green.png.thumb.webp" title="Oppo A5" desc="Jagonya bertahan"/>

    <Product class-name="bg-gray-200 m-3 p-3 w-2/5" 
    image="/product/640-640-blue.png.thumb.webp" title="Oppo A5" desc="Jagonya bertahan"/>

    <Product class-name="bg-gray-200 m-3 p-3 w-2/5" 
    image="/product/640-640-silver.png.thumb.webp" title="Oppo Pad 3 Matte Display Edition" desc="Unleash AI Power"/>

    <Product class-name="bg-gray-200 m-3 p-3 w-2/5" 
    image="/product/640-640-silver-v1.png.thumb.webp" title="Oppo Pad SE" desc="Baterai tahan lama 9340 mAh"/>

    <Product class-name="bg-gray-200 m-3 p-3 w-2/5" 
    image="/product/640-640-gold.png.thumb.webp" title="Oppo Watch X2 Mini" desc="Style to spotlight"/>
  
    </div>

      <div class="flex flex-row place-content-between">
    <div class="p-7 text-2xl">Event OPPO</div>
    <div class="p-7 flex flex-row space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
    </div>
  </div>

  <div class="flex flex-row gap-4 m-7 overflow-x-auto snap-x snap-mandatory scroll-smooth">
   
    <Event image="/event/id-oppo-run-2025-v2.png.thumb.webp" title="OPPO RUN 2025" desc="Make Your Moment"/>
     <Event image="/event/bri-super-league-2025.png.thumb.webp" title="OPPO X BRI Super League 2025" desc="#LagaPenuhMomen"/>
     <Event image="/event/Ambassador-210.png.thumb.webp" title="OPPO Campus Ambassador" desc="Mari jelajahi petualangan seru para Campus Ambassador bersama OPPO"/>
     <Event image="/event/Factory-210.png.thumb.webp" title="Discover OPPO Factory" desc="Dapatkan pengalaman eksklusif untuk melihat langsung proses produksi perangkat OPPO"/>
     <Event image="/event/Membership-210.png.thumb.webp" title="My OPPO Membership" desc="Dapatkan promo eksklusif menarik disini"/>

     
  </div>

  <div class="flex flex-row place-content-between">
    <div class="p-7 text-2xl">Jelajahi OPPO</div>
    <div class="p-7 flex flex-row space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
    </div>
  </div>


  <div class="flex flex-row space-x-3 m-7">
   
    <Event image="/oppo/about-v1.jpg.thumb.webp" title="About OPPO" desc="Make Your Moment"/>
     <Event image="/oppo/1728_1152.png" title="OPPO AI" desc="Leading AI Experience"/>
     <Event image="/oppo/1728-1152.jpg.thumb.webp" title="ColorOS 15 Smart & Smooth" desc="New Experience of ColorOS 15"/>
     <Event image="/event/Factory-210.png.thumb.webp" title="Discover OPPO Factory" desc="Dapatkan pengalaman eksklusif untuk melihat langsung proses produksi perangkat OPPO"/>
     <!-- <Event image="/event/Membership-210.png.thumb.webp" title="My OPPO Membership" desc="Dapatkan promo eksklusif menarik disini"/> -->

     
  </div>
     
</template>

<style scoped>

</style>
