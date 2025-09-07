<script setup lang="ts">
import { ref} from 'vue'

import MenuItem from './components/MenuItem.vue';


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

  <img src="/hero/id-s3-blue-s2-white-2-1536-800-pad-v3.jpg.thumb.webp" class="relative w-full"/>
  <p class="absolute top-1/9 left-1/12 bg-black text-white text-sm rounded-md px-2 py-2 z-10">OPPO AI Phone</p>
  <p class="absolute top-1/6 left-1/12 text-4xl font-semibold z-10">Reno14 Series <sup>5G</sup></p>
  <p class="absolute top-1/4 left-1/12 text-2xl z-10">AI Flash Photography | AI Editor 2.0<br>Underwater 4K Video</p>
  <button class="absolute top-9/10 left-1/12 text-sm rounded-xl px-2 py-2 border-2 z-10">Lebih Lanjut</button>
  <button class="absolute top-9/10 left-1/6 text-sm rounded-xl px-2 py-2 border-2 bg-black text-white z-10">Beli Sekarang</button>

</template>

<style scoped>

</style>
