if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6S4Z07hJ3emTRvIIu1wlQ/_buildManifest.js",revision:"5efce68966de63280c2d1163abc4fa48"},{url:"/_next/static/6S4Z07hJ3emTRvIIu1wlQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/353-14df4b722df2cd4a.js",revision:"14df4b722df2cd4a"},{url:"/_next/static/chunks/573-1582259f8fdb4d26.js",revision:"1582259f8fdb4d26"},{url:"/_next/static/chunks/598-571434b9f92d5f6c.js",revision:"571434b9f92d5f6c"},{url:"/_next/static/chunks/651.04e5fe4036c82801.js",revision:"04e5fe4036c82801"},{url:"/_next/static/chunks/692-30706e4360ad9239.js",revision:"30706e4360ad9239"},{url:"/_next/static/chunks/741.8b828148889177c6.js",revision:"8b828148889177c6"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-e833bda908a7b8cc.js",revision:"e833bda908a7b8cc"},{url:"/_next/static/chunks/pages/_app-067a248282bc0c27.js",revision:"067a248282bc0c27"},{url:"/_next/static/chunks/pages/_error-28b0dba9dbcfb4ed.js",revision:"28b0dba9dbcfb4ed"},{url:"/_next/static/chunks/pages/about-de875e00ccade195.js",revision:"de875e00ccade195"},{url:"/_next/static/chunks/pages/all-components-4e9233d4c5e1c065.js",revision:"4e9233d4c5e1c065"},{url:"/_next/static/chunks/pages/authors/%5Bslug%5D-9377fab84fc56227.js",revision:"9377fab84fc56227"},{url:"/_next/static/chunks/pages/conference-a66c8e0bb5b1298a.js",revision:"a66c8e0bb5b1298a"},{url:"/_next/static/chunks/pages/conference/about-e6f5f15fd87380af.js",revision:"e6f5f15fd87380af"},{url:"/_next/static/chunks/pages/conference/tickets-5a0cea8dad45f78f.js",revision:"5a0cea8dad45f78f"},{url:"/_next/static/chunks/pages/fallback-596ac37784577530.js",revision:"596ac37784577530"},{url:"/_next/static/chunks/pages/index-40679dc33a67d454.js",revision:"40679dc33a67d454"},{url:"/_next/static/chunks/pages/members-3eaa0605717cd288.js",revision:"3eaa0605717cd288"},{url:"/_next/static/chunks/pages/news-96eae368d92afeba.js",revision:"96eae368d92afeba"},{url:"/_next/static/chunks/pages/posts-cd7616619b5f52ca.js",revision:"cd7616619b5f52ca"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-4a0bac8b2f605bd0.js",revision:"4a0bac8b2f605bd0"},{url:"/_next/static/chunks/pages/programs-beb2c4648c2a79cc.js",revision:"beb2c4648c2a79cc"},{url:"/_next/static/chunks/pages/programs/%5Bslug%5D-a74f43e1a0d7e4dd.js",revision:"a74f43e1a0d7e4dd"},{url:"/_next/static/chunks/pages/spaces-49b27b1edf3c15ce.js",revision:"49b27b1edf3c15ce"},{url:"/_next/static/chunks/pages/spaces/%5Bslug%5D-eedcd82a80404277.js",revision:"eedcd82a80404277"},{url:"/_next/static/chunks/pages/topic/%5Btag%5D-05b8d66420180a3a.js",revision:"05b8d66420180a3a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-331b70fdde3f1488.js",revision:"331b70fdde3f1488"},{url:"/_next/static/css/02f70c1b770cbff5.css",revision:"02f70c1b770cbff5"},{url:"/_next/static/css/2acfb845fbf8f3b4.css",revision:"2acfb845fbf8f3b4"},{url:"/_next/static/css/3130cc23038613f6.css",revision:"3130cc23038613f6"},{url:"/assets/fonts/graphik-medium.woff",revision:"66a39c52d7476e7c823af80341a7fcc2"},{url:"/assets/fonts/graphik-medium.woff2",revision:"9d52fdc183d101a1eacb5a6e5fd82b95"},{url:"/assets/fonts/graphik-regular-italic.woff",revision:"5e1f1b641a3f8c7a133dcfa0329d0bd7"},{url:"/assets/fonts/graphik-regular-italic.woff2",revision:"b67d9a0ab593c17cc2d44fdfecae807b"},{url:"/assets/fonts/graphik-regular.woff",revision:"810cfa0faa09964ed34b28cdae213e8c"},{url:"/assets/fonts/graphik-regular.woff2",revision:"3f97ed33719cc57b85648b5b6b0d8115"},{url:"/assets/fonts/shentox-medium.woff",revision:"1d04a9986c9c8a8ceb2f3f6f6634080c"},{url:"/assets/fonts/shentox-medium.woff2",revision:"ae282d9fad8d91075d8139ee873d91f3"},{url:"/assets/fonts/tnw-avalon-bold.woff",revision:"4d60170699188c45e916e68c735c5dc4"},{url:"/assets/fonts/tnw-avalon-bold.woff2",revision:"bd1f08918c3b46c85f59d6cdaa95f436"},{url:"/assets/img/Garage_innovationhub2.png",revision:"d22a9f58fe26d35cafab7734ccad313c"},{url:"/assets/img/_htn-floats-2.png",revision:"3734dac08039c13741abc98a96231434"},{url:"/assets/img/_ye_olde_hero-bg.jpg",revision:"3ac6a1420c2bbd2aad9ea8e0d28e57fb"},{url:"/assets/img/beko.svg",revision:"56101c2bbd660bc2eaf5e502fa372dfa"},{url:"/assets/img/cc-bg.jpg",revision:"34fbc22ff3916fe0dc98f39d46d67957"},{url:"/assets/img/cc-floats-2.png",revision:"2431d99677707e9819ffce3a9370aca3"},{url:"/assets/img/ce-bg.jpg",revision:"22d2ff504ca0d055013262cee9f495ee"},{url:"/assets/img/ce-floats-2.png",revision:"547b5cd24710be81859e0e2416cf7324"},{url:"/assets/img/facebook.svg",revision:"f44ba9bcad1dbdbc7681c6d082bbe843"},{url:"/assets/img/favicon/apple-touch-icon-114x114.png",revision:"d46186dfd795dda1fa7a0e3325c511e5"},{url:"/assets/img/favicon/apple-touch-icon-120x120.png",revision:"6bdd788c3e86adeb9aa0f0777c2418b2"},{url:"/assets/img/favicon/apple-touch-icon-144x144.png",revision:"2caffc090d2647dc0b16e973cd37649a"},{url:"/assets/img/favicon/apple-touch-icon-152x152.png",revision:"4643ca0195ab2355518d7c6d8f922e60"},{url:"/assets/img/favicon/apple-touch-icon-180x180.png",revision:"5c05be09646b18f205b3b97f7a944e79"},{url:"/assets/img/favicon/apple-touch-icon-57x57.png",revision:"e287ed3d73aa215dde45bdc18914e18a"},{url:"/assets/img/favicon/apple-touch-icon-60x60.png",revision:"5b71468ce1b75b4dc72db8f224b9d9ca"},{url:"/assets/img/favicon/apple-touch-icon-72x72.png",revision:"659245477d8dbc13ddd032a03bdaa32d"},{url:"/assets/img/favicon/apple-touch-icon-76x76.png",revision:"8d5dde6ede9121130c49d1cbb18047db"},{url:"/assets/img/favicon/favicon-16x16.png",revision:"b3598c6132f87839691e6e4f71096866"},{url:"/assets/img/favicon/favicon-192x192.png",revision:"1b147b22301852d8bf47dd282faa2fb7"},{url:"/assets/img/favicon/favicon-194x194.png",revision:"555748fa8c8652aef0296fe64dc5cc77"},{url:"/assets/img/favicon/favicon-32x32.png",revision:"9cd71bf405d0b443c0f56ff21a8a8fa7"},{url:"/assets/img/favicon/favicon-48x48.png",revision:"014397910656e9785b67d9ed75baa04a"},{url:"/assets/img/favicon/favicon-96x96.png",revision:"ec56f721705fac5c8fd66250304e6d6d"},{url:"/assets/img/favicon/favicon.png",revision:"7534dba10d7e4a8422a335e9e05ab87e"},{url:"/assets/img/ft-talent.svg",revision:"ae3a6278eb3d9eae8bd32c2cc9bb57dd"},{url:"/assets/img/ft-tnw-dublin.svg",revision:"8a346ab9239129ebf53ce20d67ce3ab2"},{url:"/assets/img/hack-the-normal-2022.svg",revision:"6dc6e70e556dfb164b57996e258bb9ab"},{url:"/assets/img/header-glow.jpg",revision:"1f78f0433387ec3c6647b5509e2b52d7"},{url:"/assets/img/header-layer-1.png",revision:"6037f5fd43f203dd97297e697e9044a9"},{url:"/assets/img/header-layer-2.png",revision:"06776c7f3eddd38a168baf3cfe8f76df"},{url:"/assets/img/hero-bg.jpg",revision:"e5fabf24b48a95c1b6e559ba1e207021"},{url:"/assets/img/hero-fg.png",revision:"664734e26d8f58af954251a8748f1cca"},{url:"/assets/img/hero-glow.jpg",revision:"6855a2d802b1406732b32b1efcddb95e"},{url:"/assets/img/htn-bg.jpg",revision:"a46f52dd07ee3c5e4d23feb181b478a9"},{url:"/assets/img/htn-floats-2.png",revision:"14f0283167745c162540f3c47ec85621"},{url:"/assets/img/icons.svg",revision:"720490798de9cc71a0755eace9cdc496"},{url:"/assets/img/icons8-star-48-faved.png",revision:"4e30bd4af6c509d92bb9f64a591e2f22"},{url:"/assets/img/icons8-star-48.png",revision:"53981d09015b7c07caf9d12bfaef16f3"},{url:"/assets/img/instagram.svg",revision:"439d1a40a23a14e2f036d8971d27aa98"},{url:"/assets/img/linkedin.svg",revision:"adcc9fbb671d46b0a7f1137be9856100"},{url:"/assets/img/modal-header.jpg",revision:"e5752a4e9f3b8dc20fa5aede8b8e0193"},{url:"/assets/img/molly.jpg",revision:"f8f94f0af92afa67e04d319a643c0bd5"},{url:"/assets/img/molly1.jpg",revision:"047df8424bcc903a1a1877771b5608d5"},{url:"/assets/img/molly2.jpg",revision:"747b22e2faac4b8541a6ad3b12e99d1a"},{url:"/assets/img/molly3.jpg",revision:"f8f94f0af92afa67e04d319a643c0bd5"},{url:"/assets/img/partner-ft.png",revision:"b5f5c4eb1f2d691312b459e7cdc1ab47"},{url:"/assets/img/reward-appliances.svg",revision:"c7b9b4e54c45f5dd1569cc3a85a8e5ec"},{url:"/assets/img/reward-network.svg",revision:"872bfff82e8fbab305cd632dc4a5c39c"},{url:"/assets/img/reward-preaccelerator.svg",revision:"2cab6398110b3fea6ee9f4277a1a71b5"},{url:"/assets/img/reward-prize.svg",revision:"e1d2382198871a2b30c74088913774df"},{url:"/assets/img/shapes.svg",revision:"8e6636390c8e08b1ee9f858d8cac3e9f"},{url:"/assets/img/speaker-overlay.png",revision:"327c17d1325c8705a52350e377b42f62"},{url:"/assets/img/spinner.png",revision:"46bba147f4c1a4c91617a58278d9452a"},{url:"/assets/img/tnw.png",revision:"8b6098a5338bbb19c46d55c851a14f6f"},{url:"/assets/img/tnw.svg",revision:"865e6ed4d3090269d35304e2b3417a59"},{url:"/assets/img/trophy.svg",revision:"b2589e6159f81b5809ca8d7b3083f811"},{url:"/assets/img/twitter.svg",revision:"56a1f4d6f9ae7e0330748b038c50d13c"},{url:"/assets/img/wm-bg.jpg",revision:"762b9fc3a44ade0b65b4283dbed933ec"},{url:"/assets/img/youtube.svg",revision:"1395eba5e46133c022333efd3b0e6f45"},{url:"/assets/types/next.d.ts",revision:"75e64d8bf4566f941c267d7f8950a7f8"},{url:"/favicon.ico",revision:"7534dba10d7e4a8422a335e9e05ab87e"},{url:"/icons/icon-192x192.png",revision:"469f1824f7ca5408c8f919163fd18e99"},{url:"/icons/icon-256x256.png",revision:"ed951865a7c8b24b16b1f7e7ca400a4d"},{url:"/icons/icon-384x384.png",revision:"14a10ed1a95d1599ae34c151a24dff76"},{url:"/icons/icon-512x512.png",revision:"ba31e2018e235b0931ea829bc13cd678"},{url:"/icons/maskable.png",revision:"40513148be233633cbf6c086c8823669"},{url:"/icons/maskable_icon.png",revision:"ca1c191700c948041729dfad23a58d45"},{url:"/manifest.json",revision:"6811135bbdfd323afbc5f37c0715cd3d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
