<script setup lang="ts">
import { ref} from 'vue'

import MenuItem from './components/MenuItem.vue';
import Product from './components/Product.vue';
import Event from './components/Event.vue';
import Accordion from './components/Accordion.vue';
import MenuItem2 from './components/MenuItem2.vue';

const showDropdown1 = ref(false)
const showDropdown2 = ref(false)
const showDropdown3 = ref(false)
const showDropdown4 = ref(false)
const showDropdown5 = ref(false)


const openMenu = ref(false)


</script>

<template>
   
    <div @click="openMenu = !openMenu">
        <button type="button"  
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
     <svg xmlns="http://www.w3.org/2000/svg" width="85" height="22" viewBox="0 0 85 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0905 13.7856H10.0898H10.0888C5.80572 13.7403 3.03806 11.7032 3.03806 8.59604C3.03806 5.48888 5.80572 3.45175 10.0888 3.40651C14.3738 3.45175 17.1411 5.48888 17.1411 8.59604C17.1411 11.7032 14.3738 13.7403 10.0905 13.7856ZM10.2155 0.898183C10.2144 0.89832 10.1292 0.896816 10.0863 0.895996C10.0424 0.896543 9.95715 0.898183 9.95715 0.898183C4.09395 0.993718 0 4.1591 0 8.5961C0 13.0331 4.09395 16.1986 9.95578 16.294C9.95578 16.294 10.0424 16.2948 10.0851 16.2946C10.1299 16.295 10.2157 16.294 10.2157 16.294C16.0774 16.1986 20.1712 13.0331 20.1712 8.5961C20.1712 4.1591 16.0774 0.993718 10.2155 0.898183Z" fill="black" class="fill"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M74.9195 13.7856H74.9188H74.9177C70.6348 13.7403 67.8671 11.7032 67.8671 8.59604C67.8671 5.48888 70.6348 3.45175 74.9177 3.40651C79.2027 3.45175 81.9701 5.48888 81.9701 8.59604C81.9701 11.7032 79.2027 13.7403 74.9195 13.7856ZM75.0445 0.898183C75.0434 0.89832 74.9584 0.896816 74.9152 0.895996C74.8715 0.896543 74.7862 0.898183 74.7862 0.898183C68.923 0.993718 64.829 4.1591 64.829 8.5961C64.829 13.0331 68.923 16.1986 74.785 16.294C74.785 16.294 74.8715 16.2948 74.9141 16.2946C74.9591 16.295 75.0448 16.294 75.0448 16.294C80.9065 16.1986 85.0003 13.0331 85.0003 8.5961C85.0003 4.1591 80.9065 0.993718 75.0445 0.898183Z" fill="black" class="fill"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M53.3494 13.7856H53.3487H53.3477C49.0648 13.7403 46.2971 11.7032 46.2971 8.59604C46.2971 5.48888 49.0648 3.45175 53.3477 3.40651C57.6326 3.45175 60.4001 5.48888 60.4001 8.59604C60.4001 11.7032 57.6326 13.7403 53.3494 13.7856ZM53.4745 0.898183C53.4734 0.89832 53.3884 0.896816 53.3452 0.895996C53.3015 0.896543 53.2162 0.898183 53.2162 0.898183C50.423 0.943695 48.032 1.68638 46.2932 2.93081V1.61846H43.2591V21.1043H46.2932V14.2617C48.0317 15.506 50.4223 16.2486 53.2149 16.294C53.2151 16.2942 53.3015 16.2948 53.344 16.2946C53.3891 16.295 53.4747 16.294 53.4747 16.294C59.3364 16.1986 63.4303 13.0331 63.4303 8.5961C63.4303 4.1591 59.3364 0.993718 53.4745 0.898183Z" fill="black" class="fill"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M31.7169 13.7856H31.7162H31.7154C27.4323 13.7403 24.6646 11.7032 24.6646 8.59604C24.6646 5.48888 27.4323 3.45175 31.7154 3.40651C36.0003 3.45175 38.7677 5.48888 38.7677 8.59604C38.7677 11.7032 36.0003 13.7403 31.7169 13.7856ZM31.8472 0.898183C31.8459 0.89832 31.7609 0.896816 31.7179 0.895996C31.674 0.896543 31.5887 0.898183 31.5887 0.898183C28.7955 0.943695 26.4045 1.68638 24.6657 2.93081V1.61846H21.6317V21.1043H24.6657V14.2617C26.4044 15.506 28.7949 16.2486 31.5873 16.294C31.5873 16.294 31.674 16.2948 31.7166 16.2946C31.7616 16.295 31.8473 16.294 31.8473 16.294C37.709 16.1986 41.8028 13.0331 41.8028 8.5961C41.8028 4.1591 37.709 0.993718 31.8472 0.898183Z" fill="black" class="fill"></path></svg>
 

  
    <div :class="[openMenu ? 'flex' : 'hidden', 'w-full lg:flex lg:w-auto absolute md:relative bg-white']" class=" flex-col lg:flex-row lg:place-content-between z-30">
      <div class="flex flex-col lg:flex-row space-x-4 px-3 py-3 z-20">
        <div class="flex justify-between">
          <div @mouseover="showDropdown1 = !showDropdown1" class="text-gray-700 hover:text-blue-700" >Smartphone</div>
          <svg @click="showDropdown1 = !showDropdown1" class="block lg:hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>
          <div class="p-5 flex lg:hidden flex-row space-x-4 z-20 bg-white h-1/2 w-full overflow-x-auto" v-if="showDropdown1">
            <MenuItem title="Oppo Find N5" image="/dropdown/440-440-oppo-find-n5.webp"/>
            <MenuItem title="Oppo Find X8 Pro" image="/dropdown/440-440-oppo-find-x8-pro.webp"/>
            <MenuItem title="Oppo Find X8" image="/dropdown/440-440-oppo-find-x8.webp"/>
            <MenuItem title="Oppo Reno14 Pro" image="/dropdown/440-440-oppo-reno-14-pro.webp"/>
            <MenuItem title="Oppo Reno14" image="/dropdown/440-440-oppo-reno-14.webp"/> 
            <MenuItem title="Oppo A5 Pro" image="/dropdown/pink-440-440-oppo-a5-pro.webp"/> 
            
        </div>
        <div class="flex justify-between">
          <div @mouseover="showDropdown2 = !showDropdown2" class="text-gray-700 hover:text-blue-700">Tablet</div>
           <svg @click="showDropdown2 = !showDropdown2" class="block lg:hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>
          <div class="p-5 flex lg:hidden flex-row space-x-4 z-20 bg-white h-1/2 w-full overflow-x-auto" v-if="showDropdown2">
            <MenuItem title="Oppo Pad SE" image="/dropdown/440-440-oppo-pad-se.webp"/>
            <MenuItem title="Oppo Pad Matte Display Edition" image="/dropdown/440-440-oppo-pad-matte.webp"/>
            <MenuItem title="Oppo Pad Neo" image="/dropdown/oppo-pad-neo.webp"/>
            <MenuItem title="Oppo Pad 2" image="/dropdown/oppo-pad-2.webp"/>
            <MenuItem title="Oppo Pad Air" image="/dropdown/440-440-oppo-pad-air.webp"/>
            
        </div>
        <div class="flex justify-between">
          <div @mouseover="showDropdown3 = !showDropdown3" class="text-gray-700 hover:text-blue-700">Audio</div>
          <svg @click="showDropdown3 = !showDropdown3" class="block lg:hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>
        <div class="p-5 flex lg:hidden flex-row space-x-4 z-20 bg-white h-1/2 w-full overflow-x-auto" v-if="showDropdown3">
           <MenuItem title="Oppo Enco Buds3 Pro" image="/product/white-440-440-v2.png.thumb.webp"/>
           <MenuItem title="Oppo Enco Air4" image="/product/green-440-440-v1.png.thumb.webp"/>
           <MenuItem title="Oppo Enco Buds3" image="/product/buds3-440-440-1-v2.png.thumb.webp"/>
           <MenuItem title="Oppo Enco X3i" image="/product/440_440-Blue.png.thumb.webp"/>
           <MenuItem title="Oppo Enco Air3" image="/product/enco-air3-white-440_440-v3.png.thumb.webp"/>
           <MenuItem title="Oppo Enco Air2 Pro" image="/product/Enco-air2-pro.png.thumb.webp"/>
        </div>
          <div class="flex justify-between">
          <div @mouseover="showDropdown4 = !showDropdown4" class="text-gray-700 hover:text-blue-700">Wearables</div>
          <svg @click="showDropdown4 = !showDropdown4" class="block lg:hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>
        <div class="p-5 flex lg:hidden flex-row space-x-4 z-20 bg-white h-1/2 w-full overflow-x-auto" v-if="showDropdown4">
           <MenuItem title="Oppo Watch X2" image="/product/blue-440-440.png.thumb.webp"/>
           <MenuItem title="Oppo Watch X2 Mini" image="/product/gold.png.thumb.webp"/>
           <MenuItem title="Oppo Watch X" image="/product/440-440PX-brown-v1.png.thumb.webp"/>
           <MenuItem title="Oppo Band 2" image="/product/OPPO Band2-black.png"/>
           <MenuItem title="Oppo Band" image="/product/OPPO-Band-black.png.thumb.webp"/>
           
           
           
        </div>
          <div class="flex justify-between">
          <div @mouseover="showDropdown5 = !showDropdown5" class="text-gray-700 hover:text-blue-700">Tentang OPPO</div>
          <svg @click="showDropdown5 = !showDropdown5" class="block lg:hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>
        <div class="p-5 flex lg:hidden flex-row space-x-4 z-20 bg-white h-1/2 w-full overflow-x-auto" v-if="showDropdown5">
          <MenuItem2 title="Cerita Kami"/>
          <MenuItem2 title="OPPO AI"/>
          <MenuItem2 title="Kanal Berita"/>
          <MenuItem2 title="Kegiatan"/>
          <MenuItem2 title="My OPPO"/>
          <MenuItem2 title="OPPO Brand Store"/>
           
           
        </div>
      </div>
      <div class="flex flex-col lg:flex-row space-x-4 px-3 py-3 z-20 text-gray-700">
          <div>Online Store</div>
          <div>Komunitas</div>
          <div>ColorOS</div>
          <div>Dukungan</div>
          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            
          
        
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
          </div>

      </div>
    </div>
 

  <div @mouseleave="showDropdown1 = !showDropdown1" class="absolute p-5 lg:flex flex-row space-x-3 z-20 bg-white h-1/2 w-full hidden" v-if="showDropdown1">
      <MenuItem title="Oppo Find N5" image="/dropdown/440-440-oppo-find-n5.webp"/>
      <MenuItem title="Oppo Find X8 Pro" image="/dropdown/440-440-oppo-find-x8-pro.webp"/>
      <MenuItem title="Oppo Find X8" image="/dropdown/440-440-oppo-find-x8.webp"/>
      <MenuItem title="Oppo Reno14 Pro" image="/dropdown/440-440-oppo-reno-14-pro.webp"/>
      <MenuItem title="Oppo Reno14" image="/dropdown/440-440-oppo-reno-14.webp"/>
      <MenuItem title="Oppo A5 Pro" image="/dropdown/pink-440-440-oppo-a5-pro.webp"/>
      
  </div>

    <div @mouseleave="showDropdown2 = !showDropdown2" class="absolute p-5 hidden lg:flex flex-row space-x-3 z-20 bg-white h-1/2 w-full" v-if="showDropdown2">
      <MenuItem title="Oppo Pad SE" image="/dropdown/440-440-oppo-pad-se.webp"/>
      <MenuItem title="Oppo Pad Matte Display Edition" image="/dropdown/440-440-oppo-pad-matte.webp"/>
      <MenuItem title="Oppo Pad Neo" image="/dropdown/oppo-pad-neo.webp"/>
      <MenuItem title="Oppo Pad 2" image="/dropdown/oppo-pad-2.webp"/>
      <MenuItem title="Oppo Pad Air" image="/dropdown/440-440-oppo-pad-air.webp"/>
      
  </div>

   <div @mouseleave="showDropdown3 = !showDropdown3" class="absolute p-5 hidden lg:flex flex-row space-x-3 z-20 bg-white h-1/2 w-full" v-if="showDropdown3">
      <MenuItem title="Oppo Enco Buds3 Pro" image="/product/white-440-440-v2.png.thumb.webp"/>
      <MenuItem title="Oppo Enco Air4" image="/product/green-440-440-v1.png.thumb.webp"/>
      <MenuItem title="Oppo Enco Buds3" image="/product/buds3-440-440-1-v2.png.thumb.webp"/>
      <MenuItem title="Oppo Enco X3i" image="/product/440_440-Blue.png.thumb.webp"/>
      <MenuItem title="Oppo Enco Air3" image="/product/enco-air3-white-440_440-v3.png.thumb.webp"/>
      <MenuItem title="Oppo Enco Air2 Pro" image="/product/Enco-air2-pro.png.thumb.webp"/>
      
  </div>
   <div @mouseleave="showDropdown4 = !showDropdown4" class="absolute p-5 hidden lg:flex flex-row space-x-3 z-20 bg-white h-1/2 w-full" v-if="showDropdown4">
      <MenuItem title="Oppo Watch X2" image="/product/blue-440-440.png.thumb.webp"/>
      <MenuItem title="Oppo Watch X2 Mini" image="/product/gold.png.thumb.webp"/>
      <MenuItem title="Oppo Watch X" image="/product/440-440PX-brown-v1.png.thumb.webp"/>
      <MenuItem title="Oppo Band 2" image="/product/OPPO Band2-black.png"/>
      <MenuItem title="Oppo Band" image="/product/OPPO-Band-black.png.thumb.webp"/>
           
     
      
  </div>
    <div @mouseleave="showDropdown5 = !showDropdown5" class="absolute p-5 hidden lg:flex flex-row space-x-3 z-20 bg-white h-1/2 w-full" v-if="showDropdown5">
          <MenuItem2 title="Cerita Kami"/>
          <MenuItem2 title="OPPO AI"/>
          <MenuItem2 title="Kanal Berita"/>
          <MenuItem2 title="Kegiatan"/>
          <MenuItem2 title="My OPPO"/>
          <MenuItem2 title="OPPO Brand Store"/>
           
           
     
      
  </div>
  <section class="relative flex flex-col justify-start">
    <picture>
      <source srcset="/hero/id-s3-blue-s2-white-2-1536-800-pad-v3.jpg" alt="hero-1" type="image/webp" media="(min-width: 640px)">
      <source srcset="/hero/id-s3-blue-s2-white-2-720-1060-mo-v3.jpg" alt="hero-1" media="(max-width: 640px)">
      <img src="/hero/id-s3-blue-s2-white-2-720-1060-mo-v3.jpg" alt="hero-1">
    </picture>

   
      <img class="absolute inset-x-10 lg:inset-x-20 inset-y-8 z-10 w-30" src="/hero/homepage-black-pc.png"/>
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-15 text-3xl lg:text-5xl">Reno14 Series <sup>5G</sup></p>
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-30 text-xl lg:text-2xl">AI Flash Photography | AI Editor 2.0</p>
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-45 lg:inset-y-40 text-xl lg:text-2xl">Underwater 4K Video</p>
      <div class="absolute inset-x-10 lg:inset-x-20 inset-y-55 lg:inset-y-150 w-25 border-2 h-8 rounded-xl text-center">Lebih lanjut</div>
      <div class="absolute inset-x-40 lg:inset-x-50 inset-y-55 lg:inset-y-150 w-30 border-2 h-8 rounded-xl text-center bg-black text-white">Beli sekarang</div>
    
  </section>

  <section class="relative flex flex-col">
    <picture>
      <source srcset="/hero/1536-800.jpg" alt="hero-1" type="image/webp" media="(min-width: 640px)">
      <source srcset="/hero/720-1060.jpg.thumb.webp" alt="hero-1" media="(max-width: 640px)">
      <img src="/hero/720-1060.jpg.thumb.webp" alt="hero-1">
    </picture>

   
      <img class="absolute inset-x-10 lg:inset-x-20 inset-y-8 z-10 w-30" src="/hero/homepage-black-pc.png"/>
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-15 text-3xl lg:text-5xl">OPPO Find N5</p>
      <img class="absolute inset-x-10 lg:inset-x-20 inset-y-30 w-50" src="/hero/hasu.png.thumb.webp">
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-45 lg:inset-y-130 text-xl lg:text-2xl text-slate-700">Slim, Yet Powerful</p>
      <div class="absolute inset-x-10 lg:inset-x-20 inset-y-55 lg:inset-y-150 w-25 border-2 h-8 rounded-xl text-center">Lebih lanjut</div>
      <div class="absolute inset-x-40 lg:inset-x-50 inset-y-55 lg:inset-y-150 w-30 border-2 h-9 rounded-xl text-center bg-black text-white">Beli sekarang</div>
    
  </section>

  <section class="relative flex flex-col">
    <picture>
      <source srcset="/hero/Pad.jpg" alt="hero-1" type="image/webp" media="(min-width: 640px)">
      <source srcset="/hero/Mobile.jpg.thumb.webp" alt="hero-1" media="(max-width: 640px)">
      <img src="/hero/Mobile.jpg.thumb.webp" alt="hero-1">
    </picture>

   
      <img class="absolute inset-x-10 lg:inset-x-20 inset-y-8 z-10 w-30" src="/hero/homepage-black-pc.png"/>
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-15 text-3xl lg:text-5xl">OPPO A5 Pro</p>
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-25 text-lg lg:text-2xl">IP69, IP68, IP66 Tahan Air dan Debu</p>
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-35 lg:inset-y-40 text-lg lg:text-2xl">Tahan Benturan Kelas Militer</p>
      <p class="absolute inset-x-10 lg:inset-x-20 inset-y-45 lg:inset-y-50 text-lg lg:text-2xl">Baterai Besar 5800 mAh</p>
      <div class="absolute inset-x-10 lg:inset-x-20 inset-y-55 lg:inset-y-150 w-25 border-2 h-8 rounded-xl text-center">Lebih lanjut</div>
      <div class="absolute inset-x-40 lg:inset-x-50 inset-y-55 lg:inset-y-150 w-30 border-2 h-10 rounded-xl text-center bg-black text-white">Beli sekarang</div>
    
  </section>


    <div class="flex flex-col lg:flex-row m-7 flex-wrap">
      <Product class-name="bg-gray-200 m-3 p-3 w-4/5 lg:w-2/5" 
    image="/product/640-640-white.png.thumb.webp" title="Oppo Find X8 Pro" desc="Powerful Camera <br> Powerful AI"/>
   
      <Product class-name="bg-gray-200 m-3 p-3 w-4/5 lg:w-2/5" 
    image="/product/640-640-green.png.thumb.webp" title="Oppo A5" desc="Jagonya bertahan"/>

    <Product class-name="bg-gray-200 m-3 p-3 w-4/5 lg:w-2/5" 
    image="/product/640-640-blue.png.thumb.webp" title="Oppo A5" desc="Jagonya bertahan"/>

    <Product class-name="bg-gray-200 m-3 p-3 w-4/5 lg:w-2/5" 
    image="/product/640-640-silver.png.thumb.webp" title="Oppo Pad 3 Matte Display Edition" desc="Unleash AI Power"/>

    <Product class-name="bg-gray-200 m-3 p-3 w-4/5 lg:w-2/5" 
    image="/product/640-640-silver-v1.png.thumb.webp" title="Oppo Pad SE" desc="Baterai tahan lama 9340 mAh"/>

    <Product class-name="bg-gray-200 m-3 p-3 w-4/5 lg:w-2/5" 
    image="/product/640-640-gold.png.thumb.webp" title="Oppo Watch X2 Mini" desc="Style to spotlight"/>
  
    </div>

      <div class="flex flex-row place-content-between">
    <div class="p-7 text-2xl">Event OPPO</div>
    <div class="p-7 flex flex-row space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
    </div>
  </div>

  <div class="max-w-6xl mx-auto">
   <div class="overflow-x-auto py-4">
    <div class="flex gap-4 px-2">
   
    <Event image="/event/id-oppo-run-2025-v2.png.thumb.webp" title="OPPO RUN 2025" desc="Make Your Moment"/>
     <Event image="/event/bri-super-league-2025.png.thumb.webp" title="OPPO X BRI Super League 2025" desc="#LagaPenuhMomen"/>
     <Event image="/event/Ambassador-210.png.thumb.webp" title="OPPO Campus Ambassador" desc="Mari jelajahi petualangan seru para Campus Ambassador bersama OPPO"/>
     <Event image="/event/Factory-210.png.thumb.webp" title="Discover OPPO Factory" desc="Dapatkan pengalaman eksklusif untuk melihat langsung proses produksi perangkat OPPO"/>
     <Event image="/event/Membership-210.png.thumb.webp" title="My OPPO Membership" desc="Dapatkan promo eksklusif menarik disini"/>
        </div>
      </div>
  </div>

  <div class="flex flex-row place-content-between">
    <div class="p-7 text-2xl">Jelajahi OPPO</div>
    <div class="p-7 flex flex-row space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
    </div>
  </div>


  <div class="max-w-6xl mx-auto">
    <div class="overflow-x-auto py-4">
      <div class="flex gap-4 px-2">
   
    <Event image="/oppo/about-v1.jpg.thumb.webp" title="About OPPO" desc="Make Your Moment"/>
     <Event image="/oppo/1728_1152.png" title="OPPO AI" desc="Leading AI Experience"/>
     <Event image="/oppo/1728-1152.jpg.thumb.webp" title="ColorOS 15 Smart & Smooth" desc="New Experience of ColorOS 15"/>
     <Event image="/oppo/great-products_1728-1152.png.thumb.webp" title="Produk Hebat Menciptakan Pengalaman Terbaik" desc="kisah OPPO"/>
     <Event image="/oppo/OPPO-5G.jpg.thumb.webp" title="OPPO 5G" desc="Connect to the world Around you with 5G"/>
     <Event image="/oppo/Imagy-Technology.jpg.thumb.webp" title="Imaging Technology" desc="Capture Memorable Moments with OPPO"/>
     <Event image="/oppo/events_newsroom_231211.jpeg.thumb.webp" title="OPPO Newsroom" desc="Latest News"/>

        </div>     
    </div>
  </div>

  <div class="bg-slate-200 p-7">
    <div class="flex flex-row">
      <p class="whitespace-pre-line text-3xl w-80">Info Lebih Lanjut 
        Layanan dan Dukungan</p>
      <div class="w-120">
      </div>
      <div class="flex flex-col">
        <Accordion title="Pencarian OPPO Brand Store Offline"/>
        <Accordion title="Service Center & Reservasi"/>
        <Accordion title="Hotline Layanan Konsumen"/>
        <Accordion title="Pelajari Layanan lebih lanjut"/>
      </div>
    </div>

  </div>
  <div class="bg-orange-100">
    <div class="flex flex-col items-center m-3 p-3">
      <p class="text-3xl">Tetap terhubung dengan OPPO</p>
      <p>Berlangganan berita, promosi, dan rekomendasi kami</p>
      <input type="text" placeholder="Masukkan email anda" class="p-2 bg-white rounded-xl"/>
      <div class="flex space-x-3 justify-center">
        <input type="checkbox" id="agree" name="agree"/>
        <label for="agree" class="w-70 whitespace-pre-line text-xs"> Saya ingin berlangganan untuk menerima informasi dari OPPO dan mitranya. Dengan berlangganan, Anda menyetujui Kebijakan Privasi OPPO</label><br>
      </div>
      
    </div>
  </div>

  <div class="bg-black text-white w-full">
    <p class="text-sm p-15">*Gambar produk hanya untuk referensi, silakan merujuk ke produk yang sebenarnya.<br>*UI hanya untuk tujuan demonstrasi, silakan lihat desain UI dari produk yang sebenarnya.</p>
    
    <hr class="bg-white">

    <div class="flex flex-row space-x-7 ps-15">
      <div class="font-semibold">Smartphone
        <div class="h-5"></div>
        <div class="font-normal text-gray-400">OPPO Find X8 Pro</div>
        <div class="font-normal text-gray-400">OPPO Find N5</div>
        <div class="font-normal text-gray-400">OPPO Find N3</div>
        <div class="font-normal text-gray-400">OPPO Find N3 Flip</div>
        <div class="font-normal text-gray-400">OPPO Reno14 Pro 5G</div>
        <div class="font-normal text-gray-400">OPPO Reno14 5G</div>
        <div class="font-normal text-gray-400">OPPO Reno14 F 5G</div>
        <div class="font-normal text-gray-400">OPPO Reno13 5G</div>
        <div class="font-normal text-gray-400">OPPO Reno13 F 5G</div>
        <div class="font-normal text-gray-400">OPPO Reno13 F</div>
        <div class="font-normal text-gray-400">OPPO A5 Pro 5G</div>
        <div class="font-normal text-gray-400">OPPO A5 Pro</div>
        <div class="font-normal text-gray-400">OPPO A5i Pro</div>
        <div class="font-normal text-gray-400">OPPO A5i</div>
        <div class="font-normal text-gray-400">OPPO A3</div>
        <div class="font-normal text-gray-400">OPPO A3x</div>
        <div class="font-normal text-gray-400 w-50">Tampilkan semua smartphone</div>

      </div>
      <div class="font-semibold">Produk IOT
      <div class="h-5"></div>
        <div class="font-normal text-gray-400">OPPO Pad SE</div>
        <div class="font-normal text-gray-400 w-50">OPPO Pad 3 Matte Display Edition</div>
        <div class="font-normal text-gray-400">OPPO Pad Neo</div>
        <div class="font-normal text-gray-400">OPPO Pad 2</div>
        <div class="font-normal text-gray-400">OPPO Enco Air4</div>
        <div class="font-normal text-gray-400">OPPO Enco Buds3 Pro</div>
        <div class="font-normal text-gray-400">OPPO Enco Buds 3</div>
        <div class="font-normal text-gray-400">OPPO Enco X3i</div>
        <div class="font-normal text-gray-400">OPPO Enco Air2 Pro</div>
        <div class="font-normal text-gray-400">OPPO Enco Buds2</div>
        <div class="font-normal text-gray-400">OPPO Band 2</div>
        <div class="font-normal text-gray-400">OPPO Watch X2</div>
        <div class="font-normal text-gray-400">OPPO Watch X2 Mini</div>
        <div class="font-normal text-gray-400">OPPO Watch X</div>
      </div>
    </div>

  </div>
     
</template>

<style scoped>

</style>
