if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise(async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()})),a.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},a=(a,i)=>{Promise.all(a.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(a)};self.define=(a,r,n)=>{i[a]||(i[a]=Promise.resolve().then(()=>{let i={};const b={uri:location.origin+a.slice(1)};return Promise.all(r.map(a=>{switch(a){case"exports":return i;case"module":return b;default:return e(a)}})).then(e=>{const a=n(...e);return i.default||(i.default=a),i})}))}}define("./sw.js",["./workbox-988654fa"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"2019/03/03/bahaya-charge-smartphone-di-output-power-mobil/index.html",revision:"e36bf1400d53f6371761a5029fbf54bf"},{url:"2020/02/23/pemesanan-tiket-kereta-api-lebaran-2020/index.html",revision:"1e644a926178772f987d2f431cdde22a"},{url:"2020/04/18/sewa-mobil-surabaya-turun-95-persen/index.html",revision:"55c9b1aa7dfe06443608fe19e478ccef"},{url:"404.html",revision:"5e487391f876f830438f1fb95aa62d24"},{url:"assets/5bb286bd/fonts/icomoon.eot",revision:"6f0bf72619ea1bc2a87989a95990c050"},{url:"assets/5bb286bd/fonts/icomoon.svg",revision:"acb588421aff15ce20e11233ed11f389"},{url:"assets/5bb286bd/fonts/icomoon.ttf",revision:"743718168aaf9c24ef7fb548879c1c57"},{url:"assets/5bb286bd/fonts/icomoon.woff",revision:"0801054f8bf8ae11cf78100645a88419"},{url:"assets/5bb286bd/fonts/roboto-bold-webfont.woff",revision:"095f49133d37b7bebdbf4f3df2ef8fcb"},{url:"assets/5bb286bd/fonts/roboto-bold-webfont.woff2",revision:"7ea6e62a828fd1bd37de06875f00a9ae"},{url:"assets/5bb286bd/fonts/roboto-medium-webfont.woff",revision:"0e541db3fbd9e8ddb148fc516a9cc399"},{url:"assets/5bb286bd/fonts/roboto-medium-webfont.woff2",revision:"ba7de93eee038366b8fdde4d43ae5ae8"},{url:"assets/5bb286bd/fonts/roboto-regular_1-webfont.woff",revision:"e30dd9ef439605993389ce4dd1ada542"},{url:"assets/5bb286bd/fonts/roboto-regular-webfont.woff",revision:"b9cebfc722d9dc8371d4bfb4c78f43cc"},{url:"assets/5bb286bd/fonts/roboto-regular-webfont.woff2",revision:"96807a5350e71045195b71a0370df7ca"},{url:"assets/5bb286bd/images/star-filled.svg",revision:"9306b6774bc45e34b05f08c906598ac0"},{url:"assets/5bb286bd/images/star-half.svg",revision:"ddb584d9ccfed159abcf6716bde26bf4"},{url:"blog/index.html",revision:"60d6742016c5e7a8a9081216d1661579"},{url:"category/uncategorized/index.html",revision:"40e9f753151030cf08bb0a6b5f6cadea"},{url:"cropped-rent-car-jpg/index.html",revision:"68d3d9303b08b7f32e318b9fd223a384"},{url:"data-slider-desktop/banner-1/index.html",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"data-slider-desktop/banner-2/index.html",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"data-slider-mobile/banner-1/index.html",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"data-slider-mobile/banner-2/index.html",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"favicon.ico",revision:"efb91e89cfb9529da50aa87aff5702ab"},{url:"feed.xml",revision:"c037a601d5790d0eb9a826fcc6551373"},{url:"harga/index.html",revision:"6bb2f9a51f82a78ccc765361e91db5cf"},{url:"images/alex-512x512.jpg",revision:"f946c3e602802790f82af086a4af31b1"},{url:"images/bahaya-charger-hp.jpg",revision:"21e0a339c3d64464daf58b42d9c550a1"},{url:"images/banner-1.webp",revision:"0548cfeeafaf88ce62dddce93814afdf"},{url:"images/banner-2.webp",revision:"bbab11eabb3a2479eb506b553b0b7fbd"},{url:"images/banner-mobile-1.webp",revision:"e9f8980a5dee65848d87637616586479"},{url:"images/banner-mobile-2.webp",revision:"23d54ebdd607e9228c9c7dc3a56f2ab3"},{url:"images/denny-rakhmad-widi-ashari-Nlz_s-U-npA-unsplash.jpg",revision:"8b4f85083a2f2cca3fcb32b5393570b5"},{url:"images/evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg",revision:"85aa688447e5f1c27f663513185d2007"},{url:"images/girl-346231_640.jpg",revision:"e121ebc9981ce2a2779abadac4243a39"},{url:"images/hamburger.svg",revision:"c28b192512aeeef7107d50fc1d61dc85"},{url:"images/icons/icon-128x128.png",revision:"f276560f50457d60995a665d7a2057bb"},{url:"images/icons/icon-144x144.png",revision:"7d6cfae02f4a031461f725430e17d417"},{url:"images/icons/icon-152x152.png",revision:"e526a0699abcdc06bb3bb41d7b1f6f4e"},{url:"images/icons/icon-192x192.png",revision:"bf31dd10762e5ead05c75ed3222e910b"},{url:"images/icons/icon-384x384.png",revision:"d678ee3ec77821529d471ae45bc50657"},{url:"images/icons/icon-512x512.png",revision:"8461d5890b11086fd7c446460c733ac6"},{url:"images/icons/icon-72x72.png",revision:"0cd343e173c9e0f5326d10d5e9134e4d"},{url:"images/icons/icon-96x96.png",revision:"487885494f7b0be1f9614027ce0bccfe"},{url:"images/jadwal-pemesanan-tiket-kereta-api-lebaran-2020.jpg",revision:"56cbadf48890557677827e60b260b8da"},{url:"images/klikada-panjang.svg",revision:"fa27eef4158316cefa33e89dbfc29f4b"},{url:"images/Li-Ying-Zhi-1.jpg",revision:"2a6c68d4eeecf8043537e0aec52138c8"},{url:"images/Li-Ying-Zhi-2.jpg",revision:"6ce5b9fcf828cdeab161294ec0efbb2d"},{url:"images/logo-safajaya.webp",revision:"9dbcba12bb5bdca362d5b8468ee73066"},{url:"images/mihai-stefan-PDiMDm_5_xA-unsplash.jpg",revision:"811bdd72e2d9d1571e813df6f7f64169"},{url:"images/pedro-afonso-i3M9HhxyM4g-unsplash.jpg",revision:"e48a8df0ef30499206657b67b94335eb"},{url:"images/phone.svg",revision:"42f3741d776c333baa9fc07af5cb6a5d"},{url:"images/rental-mobil-avanza.png",revision:"ff261abf0ce9618d5d3be6647b7da782"},{url:"images/rental-mobil-elf-long.png",revision:"e954efaa68c4cfa280c321407e947c47"},{url:"images/rental-mobil-elf-short.png",revision:"806bfc54ae3eae1cd5599664e6129ec7"},{url:"images/rental-mobil-ertiga.png",revision:"a1f96012ce1e6f3fbd65e9ad51b0c14d"},{url:"images/rental-mobil-hiace.png",revision:"d6db6df86f47399501f6b9b3fe67305f"},{url:"images/rental-mobil-innova-grand-new.png",revision:"dab4a5399d13a37d84e342091f3f0c02"},{url:"images/rental-mobil-innova-reborn.png",revision:"977fab66b229bfd36cf4b759a6f140f6"},{url:"images/rental-mobil-surabaya-bersih-2.webp",revision:"b1e3db85997136b389be2c046000f28d"},{url:"images/rental-mobil-surabaya-bersih.png",revision:"134c4a1d3982ea60f9d64548c276b645"},{url:"images/rental-mobil-surabaya-bersih.webp",revision:"24df5ea196a5840c8e49836adea6742d"},{url:"images/rental-mobil-xenia.png",revision:"bf2bd13b4675b5d31ccdcb47b6e3d024"},{url:"images/safajaya-512x512.png",revision:"8461d5890b11086fd7c446460c733ac6"},{url:"images/safajaya-600x60.png",revision:"cf0d5b5d2cbc87490940a31d00a6fde1"},{url:"images/storybook-2763846_640.jpg",revision:"24d1ad5f244a7093f828e81e776ebd60"},{url:"images/whatsapp.svg",revision:"47c77bf133116ff76838809ae5d2c83a"},{url:"images/woman-in-the-car-512x512.jpg",revision:"c3f658384460f18b4a689340b1876490"},{url:"images/woman-in-the-car.jpg",revision:"288ddf6bd382078cd3b450ad69d9c044"},{url:"index.html",revision:"563d23c2cc94cf4e29db201d8024a9ae"},{url:"kebijakan-privasi/index.html",revision:"d9b8790e7a615570375083c63dd4d093"},{url:"keunggulan-safajaya/index.html",revision:"2ad47595b1d93b5d08084454de0f2218"},{url:"kontak-kami/index.html",revision:"f1c111b9d03b0c7c2d0c999370f99570"},{url:"manifest.json",revision:"eb4297018c4a854347f18ce54d78a42c"},{url:"mywot8c37755f5109981d28b5.html",revision:"dd6d43b477098224762e2d886e8ab61a"},{url:"rental-mobil-avanza/index.html",revision:"74f6d791b2eb886fe51072ab0ef34957"},{url:"rental-mobil-elf-long/index.html",revision:"80142c79eef4bfc0e55ae65d5c9e096a"},{url:"rental-mobil-elf-short/index.html",revision:"e759ed5938cea5f9a78d4c291edbac8d"},{url:"rental-mobil-ertiga/index.html",revision:"758ed880796ff5f1ab3f14d03734af94"},{url:"rental-mobil-hiace/index.html",revision:"8e086b6e2e5376e5ece7ddd249f9e7be"},{url:"rental-mobil-innova-grand-new/index.html",revision:"50a2c62d429ea14e28882f7946e01bca"},{url:"rental-mobil-innova-reborn/index.html",revision:"bc25f9110382d786a556eff0a6ff62c0"},{url:"rental-mobil-surabaya/index.html",revision:"39a3b5642eb3089bd86143d9f4c88015"},{url:"rental-mobil-xenia/index.html",revision:"7b731b2f76438cad8e535aa8044bd8d3"},{url:"robots.txt",revision:"26e4913c6049fb0a726759ad2c36fb96"},{url:"sewa-mobil-surabaya-murah/harga-safajaya03rev291118/index.html",revision:"6598c0f5c57ca8e7b6798c9e04c77152"},{url:"sewa-mobil-surabaya-murah/rent-car/index.html",revision:"f80089633680e84935a60a7381487c9e"},{url:"sewa-mobil-surabaya-murah/sewa-mobil-di-surabaya-murah-safa-jaya-img/index.html",revision:"2de06f338551556d86dca39d5c025ac5"},{url:"sitemap.xml",revision:"334a0aedb7deece211af5f72320b4073"},{url:"sw.html",revision:"c3f791f8c3e627db0f3f562872985a37"},{url:"syarat-dan-ketentuan/index.html",revision:"81e95cbc387781744be937cab6336b03"},{url:"tentang-kami/index.html",revision:"340bf21410bae320d255b2b986d2e42d"},{url:"testimoni/index.html",revision:"9608d3e94f16afa43dee8eee78f8e4a7"},{url:"testimoni/mobil-bersih-sopir-sopan/index.html",revision:"9d6b86c68567af70d5789bcd494f9fb5"},{url:"testimoni/mobil-bersih-tepat-waktu-sopir-ramah/index.html",revision:"1a373566bd5084ef787e2798ebaae360"},{url:"testimoni/sopirnya-ramah-dan-berpengalaman/index.html",revision:"51fb53e69c5b605d5408e4bbae07b0af"},{url:"testimoni/suka-pelayanan-yang-ramah/index.html",revision:"9847357c3f5b04487a2730a3b21a4709"},{url:"wp-content/uploads/2018/10/cropped-rent-car-300x86.jpg",revision:"f982fa72453549d72b8b914d4e7be0b3"},{url:"wp-content/uploads/2018/10/rent-car.jpg",revision:"9effa08a531fb341c6d406dc25ae5671"},{url:"wp-content/uploads/2018/11/Harga-Safajaya03rev291118-300x158.jpg",revision:"5da70f2d6d8bdf1cae3db7961c252751"},{url:"wp-content/uploads/2019/02/safajayaiconok.png",revision:"5c11e79f7326e8bc84fa9dfa27795742"},{url:"wp-content/uploads/2019/02/safajayalogook.png",revision:"688ade073d8847ddca8e771a13bb1b3e"},{url:"wp-content/uploads/2019/02/Sewa-Mobil-di-Surabaya-Murah-safa-jaya-img.png",revision:"b7b952d98661f3fedb339437fafffd25"},{url:"wp-content/uploads/2019/03/bahaya-charger-hp.jpg",revision:"b2637113eb2d1a778594b08eb512f198"},{url:"wp-content/uploads/2019/06/harga-rental-sewa-mobil-surabaya-murah-avanza-13062019.jpg",revision:"a0647cb471b48006a4d583e367f42086"},{url:"wp-content/uploads/2019/06/harga-rental-sewa-mobil-surabaya-murah-elf-long-13062019.jpg",revision:"c2c52efeb4766a4f191eeb50e3fca7eb"},{url:"wp-content/uploads/2019/06/harga-rental-sewa-mobil-surabaya-murah-elf-soft-13062019.jpg",revision:"0e45e8feb08db62efb6c297e94cd6ace"},{url:"wp-content/uploads/2019/06/harga-rental-sewa-mobil-surabaya-murah-ertiga-13062019.jpg",revision:"15b06b5ad93cebd37a0e930c15f7642f"},{url:"wp-content/uploads/2019/06/harga-rental-sewa-mobil-surabaya-murah-hi-ace-13062019.jpg",revision:"58495e331501eeda05d942e3da01fdb0"},{url:"wp-content/uploads/2019/06/harga-rental-sewa-mobil-surabaya-murah-innova-grand-new-13062019.jpg",revision:"b96fd8d3e7e745ac6a67a7103675d30b"},{url:"wp-content/uploads/2019/06/harga-rental-sewa-mobil-surabaya-murah-innova-reborn-13062019.jpg",revision:"db5f492d2c3c606097131212305a4527"},{url:"wp-content/uploads/2019/06/harga-rental-sewa-mobil-surabaya-murah-xenia-13062019.jpg",revision:"3d6f34203aa95a3c5750f2b5c69dbe29"}],{})}));
//# sourceMappingURL=sw.js.map
