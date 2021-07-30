'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "da4afc9b2c76c857d587d6ecf2c2a02a",
"icons/Icon-192.png": "49ee36aa6e2a7152f0499b1a0b05b487",
"icons/Icon-512.png": "d8251ff671208c7c426f1fafe86a60ee",
"version.json": "fbb14ba732d49da28dd2d13162308d73",
"index.html": "c722554583d55fe0bfd04b1fec3ef86b",
"/": "c722554583d55fe0bfd04b1fec3ef86b",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "6ccf93c25b6da60a9af1043bebb52eaf",
"assets/lib/routes/widgets_stateful_widgets_ex.dart": "cf7b76ab686a88595079d6618e7a6cdf",
"assets/lib/routes/animation_opacity_ex.dart": "3f618d8a69ce901a8c40348bd9952277",
"assets/lib/routes/animation_lottie_ex.dart": "a8dc1afc911a870d82e0e45814197218",
"assets/lib/routes/multimedia_image_plugin_ex.dart": "2bbcca1568ccbf704064a88568982c2b",
"assets/lib/routes/networking_rest_api_fetch_ex.dart": "f125b26d06b3fe27a3ecba90a4fe7d1a",
"assets/lib/routes/appbar_bottom_appbar_ex.dart": "5a018c71d479e91a9b314a48e3516249",
"assets/lib/routes/charts_fl_line_chart_ex.dart": "49a50d807d39f665247837a42b2be81d",
"assets/lib/routes/appbar_backdrop_ex.dart": "717b5a7441a85ae2610638e2036db356",
"assets/lib/routes/widgets_text_ex.dart": "a8a15d1ef2bc80f1b09a31ba88dd154d",
"assets/lib/routes/lists_slidable_tile_ex.dart": "5c322d3c091c530170f0a768119f7c22",
"assets/lib/routes/plugins_webview_ex.dart": "b638952d97fc47dbbb37b67689443393",
"assets/lib/routes/animation_animated_builder_ex.dart": "b934b8c4edd611deb66fe1fcbaaea17f",
"assets/lib/routes/lists_listview_builder_ex.dart": "c088aa917a33898993b3f3491803e120",
"assets/lib/routes/layouts_expanded_ex.dart": "692c7860a07fd9cb4cdba01ac28a2979",
"assets/lib/routes/networking_rest_api_send_ex.dart": "5d811ae855479bd22315e76b5898236a",
"assets/lib/routes/persistence_sembast_ex.dart": "2d082e504522950e779c796c7ac7db7b",
"assets/lib/routes/widgets_image_filtered_ex.dart": "1f39a4c32456d3dec8320ed8e0e70e73",
"assets/lib/routes/nav_nav_drawer_header_ex.dart": "1943e039a5d52b1382b22461203d55d6",
"assets/lib/routes/plugins_feature_discovery_ex.dart": "8baf4130f1fa65abd108137803191ea9",
"assets/lib/routes/state_state_notifier_freezed_ex.dart": "b7c24b243f1a728bf01f25b3d2ada7c7",
"assets/lib/routes/state_provider_ex.dart": "62950d2cd81cc3ae7e2b1780e5cbf643",
"assets/lib/routes/charts_pie_chart_ex.dart": "9e11fa9d0575c5d3afad0c145fe5aae7",
"assets/lib/routes/widgets_buttons_ex.dart": "258b7bf966575eb8ec040a26bcddbbfb",
"assets/lib/routes/charts_graphview_ex.dart": "ffe35f45edddfd12c481fbd4b3399e2d",
"assets/lib/routes/charts_heatmap_calendar_ex.dart": "c0e28c67cf0fbce296f53c7fdc04800b",
"assets/lib/routes/animation_low_level_ex.dart": "2a7bb70b3ce331342377f4f7d5bc5b2d",
"assets/lib/routes/animation_animated_radial_menu_ex.dart": "f951d450ba85fc755e7c9ba9d42050ba",
"assets/lib/routes/data/my_api_state.dart": "69b278273439759a2adb944b7f347fc8",
"assets/lib/routes/data/myapistate.g.dart": "f2933897d851cc8e7128d1fb475dff1c",
"assets/lib/routes/data/todo_item.dart": "f1c28cf2acbf0c17a610b90fb6f3c736",
"assets/lib/routes/data/my_api_state.freezed.dart": "cc3ca1efd5ee6c44b03cc820d42cffe3",
"assets/lib/routes/data/todo_item.g.dart": "2e0ec4ca894f5e722825549fef2a7bc6",
"assets/lib/routes/data/myapistate.freezed.dart": "b77528f6abc9d012540c64cfc7e4b0ef",
"assets/lib/routes/data/myapistate.dart": "24cf7bf26abc88b62301b2236bb14168",
"assets/lib/routes/lists_expansion_tile_ex.dart": "ba1b8bdcf29ba84e7f28d363f19167e1",
"assets/lib/routes/persistence_sqlite_ex.dart": "5ab0c7ed37d237323a0780ebab9a1e36",
"assets/lib/routes/lists_reorderable_ex.dart": "88a33e947eb31a9fdc9a61818e26e748",
"assets/lib/routes/layouts_fractionally_sizedbox_ex.dart": "b9000dde95ed0b96934f018ddf201c7e",
"assets/lib/routes/multimedia_image_picker_ex.dart": "c5b63f49e572ce2c46f97b8f807e902f",
"assets/lib/routes/state_bloc_lib_ex.dart": "124308533c462ddb139b2b2ea5b7e5c6",
"assets/lib/routes/layouts_wrap_ex.dart": "22b30cee99c31aedbce6b80214ec5ae5",
"assets/lib/routes/animation_animated_container_ex.dart": "838a6c0069288bf726bcea779103af93",
"assets/lib/routes/widgets_image_ex.dart": "72d3297b6d0f8cd515f8b14637b83ca0",
"assets/lib/routes/nav_bottom_tabbar_ex.dart": "2f690535145cd4ec97cb10cc943f3d26",
"assets/lib/routes/appbar_basic_appbar_ex.dart": "69df7040fe9a22e79ca42e1843b6177e",
"assets/lib/routes/state_riverpod_freezed_ex.dart": "ed3dca05da9c428655a23ba3d647a1fb",
"assets/lib/routes/widgets_gradient_ex.dart": "664e38ce785942e08d3fe2bb69d55c17",
"assets/lib/routes/networking_hacker_news_ex.dart": "4102620fa28a60f24dc2fc731954555f",
"assets/lib/routes/persistence_preference_ex.dart": "c5040e9cda9752148bd12c42c8bdba7e",
"assets/lib/routes/nav_bottom_navbar_ex.dart": "c2eea0823a11e757e461e848c4bdba29",
"assets/lib/routes/nav_pageselector_ex.dart": "ffec3b08bdd82197f4d9361adb2e04c3",
"assets/lib/routes/async_streambuilder_ex.dart": "8b2898e7d58dd5c6a977f0cc885ed504",
"assets/lib/routes/charts_fl_bar_chart_ex.dart": "f9a9d221dbb49e9ba6abbd43c08d7a4d",
"assets/lib/routes/state_inherited_widget_ex.dart": "ae26f832f56cde2499654bda6a70de46",
"assets/lib/routes/async_streamcontroller_ex.dart": "8d867f66972eac4dea3f61fe818e2205",
"assets/lib/routes/async_futurebuilder_ex.dart": "a16a95a59a33ef299a90b15b624e7f90",
"assets/lib/routes/multimedia_extended_image_ex.dart": "67c8fe4a6168a632cbf25bc6a4387b5a",
"assets/lib/routes/animation_hero_ex.dart": "95a69270329e55b20f483a7c7df29b11",
"assets/lib/routes/nav_routes_ex.dart": "716f81be67f3eb856576fce31ade3ef1",
"assets/lib/routes/multimedia_video_player_ex.dart": "cc3021b932774c8811e4db83a22260ad",
"assets/lib/routes/plugins_local_auth_ex.dart": "108e3a6420f9c3b71167a95c0457dcad",
"assets/lib/routes/animation_animated_icons_ex.dart": "fbd5832cc06d7b09999bae5636c4de63",
"assets/lib/routes/widgets_textformfield_ex.dart": "af3056d45831ec2e236a7aa8f863ea22",
"assets/lib/routes/widgets_card_ex.dart": "331a544a0848ac1e7dc03c13637df76a",
"assets/lib/routes/layouts_row_col_ex.dart": "fbf5d72db7e5cbe9018dc8e6cfd598bc",
"assets/lib/routes/widgets_icon_ex.dart": "0c89b96d0618a6779a2fb759d344bde9",
"assets/lib/routes/freezed_ex_api_state.dart": "68b329da9893e34099c7d8ad5cb9c940",
"assets/lib/routes/animation_animations_pkg_ex.dart": "345dc80f14784ca060e67fd1660dc1bb",
"assets/lib/routes/charts_time_series_ex.dart": "c3970d82507106df1c994f5447d2c1b3",
"assets/lib/routes/charts_radar_chart_ex.dart": "987ad64af7199080fd968151028edfce",
"assets/lib/routes/persistence_hive_ex.dart": "06ed99620b4a9bf4fa612725f020578b",
"assets/lib/routes/nav_tabs_ex.dart": "20aad151cdd0a6cc1052db1cbc2d8538",
"assets/lib/routes/nav_dialogs_ex.dart": "d393cecff6cdc3415b259e876a22dbb9",
"assets/lib/routes/persistence_file_rw_ex.dart": "7b335c2ae3ff1ab8fc6befd4a19faaa9",
"assets/lib/routes/lists_swipe_to_dismiss_ex.dart": "954140fb21c2990a8f76ca62ba976281",
"assets/lib/routes/networking_googlebooks_ex.dart": "ea681ba3d1b660685fb54a52d4ec2205",
"assets/lib/routes/lists_datatable_ex.dart": "7f6aab08e0b59ae005331db127d42ac3",
"assets/lib/routes/about.dart": "bd572c7d17f9a1a7876c49b9b50b07a1",
"assets/lib/routes/state_scoped_model_ex.dart": "a4a6b5363d67190b72e2c3430a4d1a5f",
"assets/lib/routes/appbar_search_ex.dart": "28da35b28226edebe14fa1da3869cf6d",
"assets/lib/routes/plugins_markdown_ex.dart": "18f6780f13f5c0a13fc28166b3925ae3",
"assets/lib/routes/lists_list_tile_ex.dart": "2a8ad92dd2d3c234b606f28685a235cb",
"assets/lib/routes/layouts_container_padding_center_ex.dart": "4c1947fbb75959146d9ccef8e0da1427",
"assets/lib/routes/charts_fl_pie_chart_ex.dart": "a2646a0910c9bb846eb022e3a6eda048",
"assets/lib/routes/appbar_sliver_appbar_ex.dart": "50e7ee16be2a474658cf4d9ba51ae697",
"assets/lib/routes/widgets_dropdown_button_ex.dart": "05c5cc09338944936ba4a25441e27e10",
"assets/lib/routes/lists_grid_list_ex.dart": "339bd71283c04af7e04b79a5c0d68de0",
"assets/lib/routes/firebase_vote_ex.dart": "8264af294a394706a74a7c0c5e684b5b",
"assets/lib/routes/widgets_textfield_ex.dart": "3657875c553c3c0a35978484ee6e76ff",
"assets/lib/routes/state_bloc_ex.dart": "2274105f1efe8fd6eb760b30f797a47f",
"assets/lib/routes/firebase_mlkit_ex.dart": "f07192c0305ba392f35097c0497628c5",
"assets/lib/routes/animation_animated_text_kit_ex.dart": "d2c8ab7c410d2b6c75c6d16c5e4b580c",
"assets/lib/routes/nav_bottom_sheet_ex.dart": "303a507c9fcb33293739250be8670bcf",
"assets/lib/routes/layouts_stack_ex.dart": "a0ad26a12072d75621d02fff08e4d617",
"assets/lib/routes/plugins_shimmer_ex.dart": "ea97dfff67b09d36e3b4e47030a31c36",
"assets/lib/routes/lists_wheel_scroll_view_ex.dart": "d938f0fcca0828b0857477a319ab3580",
"assets/lib/routes/appbar_convex_appbar_ex.dart": "49a17647414fe718a06296ccc419922e",
"assets/lib/routes/firebase_login_ex.dart": "ab25b4f337be5af3580aa3359db496e7",
"assets/lib/routes/nav_draggable_scrollable_sheet_ex.dart": "604e2e58aa9a7165ead2fc1f54defc24",
"assets/lib/routes/firebase_chatroom_ex.dart": "48068685ad0d8ff96a7fd10b6d0504dd",
"assets/lib/routes/multimedia_edge_detection_ex.dart": "787acc8ff17b89a353ec04f2f9b49e64",
"assets/lib/routes/animation_animated_widget_ex.dart": "fd986cc773ba820d270150413b9e5922",
"assets/NOTICES": "9546c58c61b3812efede414c740920ad",
"assets/res/lottie/thumbs-up.json": "4b4cb2af6893316e53405eae64157cce",
"assets/res/lottie/world.json": "8140dee112e141cd5c53c04e5727cb58",
"assets/res/images/splash_screen.png": "d8251ff671208c7c426f1fafe86a60ee",
"assets/res/images/animated_flutter_lgtm.gif": "b652a58dd464c07a80516f7a8f99ddf1",
"assets/res/images/dart-side.png": "6162e4c6ba269007cd5f2ae8d78e69af",
"assets/res/images/launcher_icon.png": "d8697155bb89d87d8f5ce939cd3c0c6e",
"assets/res/images/material_design_3.png": "c4c9411cb6b23dc218688d48f6bf514c",
"assets/res/images/material_design_4.jpg": "43e36ec401db9d8a6c44bb3d327b99b3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_gallery_assets/animated_images/animated_flutter_stickers.webp": "b44800b701a3d0bb1285726003b1ae5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"main.dart.js": "48233b5dfecf551e28fc3546d7262a1a",
"favicon.png": "1a4be3e7b38e95fafd9e5db14f8aa63b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
