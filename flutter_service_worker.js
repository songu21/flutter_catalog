'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "da4afc9b2c76c857d587d6ecf2c2a02a",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"icons/Icon-192.png": "c5f510e9ded8369fdb8f6ead483e5ae8",
"icons/Icon-512.png": "c4e0a23dd99e60d30b54ecc50b33f772",
"version.json": "a10fdd1dbeb7f052429926e6cfae8951",
"index.html": "a70ff7415bf33743d989239c94d4af92",
"/": "a70ff7415bf33743d989239c94d4af92",
"splash/style.css": "c760b1d5a84f4595c09d1dc4672bbe04",
"splash/img/dark-2x.png": "23c502bed74f2e989ffd1a965bd2bb08",
"splash/img/dark-4x.png": "b3bb137c85ac884f4596a5b4596ea7a2",
"splash/img/light-3x.png": "d87c045f408ab410c03358bf9b7d9208",
"splash/img/dark-3x.png": "d87c045f408ab410c03358bf9b7d9208",
"splash/img/light-2x.png": "23c502bed74f2e989ffd1a965bd2bb08",
"splash/img/dark-1x.png": "cb2e661bc054727e1d87526a3a1a61a8",
"splash/img/light-4x.png": "b3bb137c85ac884f4596a5b4596ea7a2",
"splash/img/light-1x.png": "cb2e661bc054727e1d87526a3a1a61a8",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "6ccf93c25b6da60a9af1043bebb52eaf",
"assets/lib/routes/widgets_stateful_widgets_ex.dart": "34942be70dff311394bd886e6b77d5c7",
"assets/lib/routes/animation_opacity_ex.dart": "454b96fcca4fd4c4314b45fa3132ecfd",
"assets/lib/routes/animation_lottie_ex.dart": "b0875ba9d3ddaed771946e46bf79a4c5",
"assets/lib/routes/multimedia_image_plugin_ex.dart": "2bbcca1568ccbf704064a88568982c2b",
"assets/lib/routes/networking_rest_api_fetch_ex.dart": "f125b26d06b3fe27a3ecba90a4fe7d1a",
"assets/lib/routes/appbar_bottom_appbar_ex.dart": "5a018c71d479e91a9b314a48e3516249",
"assets/lib/routes/charts_fl_line_chart_ex.dart": "b2d9c7caed301549b01a725b57806810",
"assets/lib/routes/appbar_backdrop_ex.dart": "3a4137e17b9c3d63e69b6033838c9d53",
"assets/lib/routes/widgets_text_ex.dart": "e6de91a606ad0aae9a48603733d77509",
"assets/lib/routes/lists_slidable_tile_ex.dart": "008798a3fd5ca5114ef1c02b3e151d59",
"assets/lib/routes/plugins_webview_ex.dart": "b638952d97fc47dbbb37b67689443393",
"assets/lib/routes/animation_animated_builder_ex.dart": "b934b8c4edd611deb66fe1fcbaaea17f",
"assets/lib/routes/lists_listview_builder_ex.dart": "c088aa917a33898993b3f3491803e120",
"assets/lib/routes/layouts_expanded_ex.dart": "692c7860a07fd9cb4cdba01ac28a2979",
"assets/lib/routes/networking_rest_api_send_ex.dart": "47d2c93f04c382f09d768f83ad1f0467",
"assets/lib/routes/persistence_sembast_ex.dart": "459379f03ca98c6043dbdaf383c728b9",
"assets/lib/routes/widgets_image_filtered_ex.dart": "87397eb24e55661125404f01376d1fd2",
"assets/lib/routes/nav_nav_drawer_header_ex.dart": "ec334df268443314fa52d3b16ebb5942",
"assets/lib/routes/plugins_feature_discovery_ex.dart": "83553bdc9e5aba3a68cff7f6e2da8422",
"assets/lib/routes/state_state_notifier_freezed_ex.dart": "da9d4698ebddf9e80ba2b09f26997aa3",
"assets/lib/routes/state_provider_ex.dart": "c409db124e39b2a7cd083a0b9f4b4d64",
"assets/lib/routes/charts_pie_chart_ex.dart": "9e11fa9d0575c5d3afad0c145fe5aae7",
"assets/lib/routes/widgets_buttons_ex.dart": "fe61b926258559c8052a56c3b791d304",
"assets/lib/routes/charts_graphview_ex.dart": "682e1a4c4b86378e9f2adcb246f8d334",
"assets/lib/routes/charts_heatmap_calendar_ex.dart": "c0e28c67cf0fbce296f53c7fdc04800b",
"assets/lib/routes/animation_low_level_ex.dart": "2a7bb70b3ce331342377f4f7d5bc5b2d",
"assets/lib/routes/animation_animated_radial_menu_ex.dart": "e113ad2192c37dc1cad2ebf0ac292b6a",
"assets/lib/routes/data/my_api_state.dart": "69b278273439759a2adb944b7f347fc8",
"assets/lib/routes/data/myapistate.g.dart": "f2933897d851cc8e7128d1fb475dff1c",
"assets/lib/routes/data/todo_item.dart": "f1c28cf2acbf0c17a610b90fb6f3c736",
"assets/lib/routes/data/my_api_state.freezed.dart": "cc3ca1efd5ee6c44b03cc820d42cffe3",
"assets/lib/routes/data/todo_item.g.dart": "2e0ec4ca894f5e722825549fef2a7bc6",
"assets/lib/routes/data/myapistate.freezed.dart": "b77528f6abc9d012540c64cfc7e4b0ef",
"assets/lib/routes/data/myapistate.dart": "24cf7bf26abc88b62301b2236bb14168",
"assets/lib/routes/lists_expansion_tile_ex.dart": "ba1b8bdcf29ba84e7f28d363f19167e1",
"assets/lib/routes/persistence_sqlite_ex.dart": "e9d21950dcecea32cfcccf7456cc9490",
"assets/lib/routes/lists_reorderable_ex.dart": "88a33e947eb31a9fdc9a61818e26e748",
"assets/lib/routes/layouts_fractionally_sizedbox_ex.dart": "4504b959f0165d76c47776a9384014bb",
"assets/lib/routes/multimedia_image_picker_ex.dart": "c5b63f49e572ce2c46f97b8f807e902f",
"assets/lib/routes/state_bloc_lib_ex.dart": "cef8c41cb8f2de1667e8f615b94dd946",
"assets/lib/routes/layouts_wrap_ex.dart": "018a8f00a0aa4c17222edcc03a2ef47f",
"assets/lib/routes/animation_animated_container_ex.dart": "498c59a4ba50642c19c9c4654f4af35a",
"assets/lib/routes/widgets_image_ex.dart": "5bcfc2c209da3a23a5ae7d7cf556a472",
"assets/lib/routes/nav_bottom_tabbar_ex.dart": "2f690535145cd4ec97cb10cc943f3d26",
"assets/lib/routes/appbar_basic_appbar_ex.dart": "69df7040fe9a22e79ca42e1843b6177e",
"assets/lib/routes/state_riverpod_freezed_ex.dart": "e65f7e6a9c9b7f8abc8494c88a8d89d3",
"assets/lib/routes/widgets_gradient_ex.dart": "796434f782c6ee127597e9fc5e3092b1",
"assets/lib/routes/networking_hacker_news_ex.dart": "2a1f1bb5e500eadbe5f76c66f5bd6eed",
"assets/lib/routes/persistence_preference_ex.dart": "c5040e9cda9752148bd12c42c8bdba7e",
"assets/lib/routes/nav_bottom_navbar_ex.dart": "c2eea0823a11e757e461e848c4bdba29",
"assets/lib/routes/nav_pageselector_ex.dart": "ffec3b08bdd82197f4d9361adb2e04c3",
"assets/lib/routes/async_streambuilder_ex.dart": "7bce6092f79fe74a3832f73cc9a6afd7",
"assets/lib/routes/charts_fl_bar_chart_ex.dart": "f9a9d221dbb49e9ba6abbd43c08d7a4d",
"assets/lib/routes/state_inherited_widget_ex.dart": "beaa91f52e0ffd61714191be13ed9251",
"assets/lib/routes/async_streamcontroller_ex.dart": "50b6c4d09a06b107b30f4e5a70244e7d",
"assets/lib/routes/async_futurebuilder_ex.dart": "5341b69b5456d29c40a0e27727e38b01",
"assets/lib/routes/multimedia_extended_image_ex.dart": "67c8fe4a6168a632cbf25bc6a4387b5a",
"assets/lib/routes/animation_hero_ex.dart": "e258210e0dbea6c1dd74501687da0ce9",
"assets/lib/routes/nav_routes_ex.dart": "d0a4c4ca828d05f2e9b5b1a5e53e7ad2",
"assets/lib/routes/multimedia_video_player_ex.dart": "b99b136bd453b12927f2398da0123941",
"assets/lib/routes/plugins_local_auth_ex.dart": "50e56b01b3b7f22f3c713d711b4a8221",
"assets/lib/routes/animation_animated_icons_ex.dart": "fbd5832cc06d7b09999bae5636c4de63",
"assets/lib/routes/widgets_textformfield_ex.dart": "2c7e514b650f7fea7790456596b5d7b0",
"assets/lib/routes/widgets_card_ex.dart": "331a544a0848ac1e7dc03c13637df76a",
"assets/lib/routes/layouts_row_col_ex.dart": "b140a9269e54b6db9cd6fb9175435530",
"assets/lib/routes/widgets_icon_ex.dart": "0c89b96d0618a6779a2fb759d344bde9",
"assets/lib/routes/freezed_ex_api_state.dart": "68b329da9893e34099c7d8ad5cb9c940",
"assets/lib/routes/animation_animations_pkg_ex.dart": "2470d00723c27703a883759b94420889",
"assets/lib/routes/charts_time_series_ex.dart": "f33fcb37bdb7fad907ede21abfc7db0e",
"assets/lib/routes/charts_radar_chart_ex.dart": "987ad64af7199080fd968151028edfce",
"assets/lib/routes/persistence_hive_ex.dart": "fd9de6e9ad114ed3d9e05818d53571d2",
"assets/lib/routes/nav_tabs_ex.dart": "20aad151cdd0a6cc1052db1cbc2d8538",
"assets/lib/routes/nav_dialogs_ex.dart": "d393cecff6cdc3415b259e876a22dbb9",
"assets/lib/routes/persistence_file_rw_ex.dart": "d311b508a716b614c452d07f1e1a26bd",
"assets/lib/routes/lists_swipe_to_dismiss_ex.dart": "ffefd8882990e20511d6a99f5f59fcad",
"assets/lib/routes/networking_googlebooks_ex.dart": "e2219aa2d4ee568ae6be715705198066",
"assets/lib/routes/lists_datatable_ex.dart": "a9abb1ee45388b5cd0b6d5e462edc4d0",
"assets/lib/routes/about.dart": "dceebc394b1f007ecda5a4527cce09b2",
"assets/lib/routes/state_scoped_model_ex.dart": "3dc1f31e6d819352259cff583267b863",
"assets/lib/routes/appbar_search_ex.dart": "8200428c892d6fc59da5f1f40ea3f6dc",
"assets/lib/routes/plugins_markdown_ex.dart": "18f6780f13f5c0a13fc28166b3925ae3",
"assets/lib/routes/lists_list_tile_ex.dart": "2a8ad92dd2d3c234b606f28685a235cb",
"assets/lib/routes/layouts_container_padding_center_ex.dart": "42badeb7675c419ce1aad2b1a97b9ace",
"assets/lib/routes/charts_fl_pie_chart_ex.dart": "0f647046e0f99bfd2e160a19a27c0e78",
"assets/lib/routes/appbar_sliver_appbar_ex.dart": "50e7ee16be2a474658cf4d9ba51ae697",
"assets/lib/routes/widgets_dropdown_button_ex.dart": "05c5cc09338944936ba4a25441e27e10",
"assets/lib/routes/lists_grid_list_ex.dart": "339bd71283c04af7e04b79a5c0d68de0",
"assets/lib/routes/firebase_vote_ex.dart": "80bf1c513c8466adfcdba4b667ec58ce",
"assets/lib/routes/widgets_textfield_ex.dart": "3657875c553c3c0a35978484ee6e76ff",
"assets/lib/routes/state_bloc_ex.dart": "7206ad05eed2c3ef837d8917d0e36acc",
"assets/lib/routes/firebase_mlkit_ex.dart": "88bc323b2f4b150369bb0c116d97ad63",
"assets/lib/routes/animation_animated_text_kit_ex.dart": "d2c8ab7c410d2b6c75c6d16c5e4b580c",
"assets/lib/routes/nav_bottom_sheet_ex.dart": "85d8a86e80a5545bdc3bbd90cb224c39",
"assets/lib/routes/layouts_stack_ex.dart": "a0ad26a12072d75621d02fff08e4d617",
"assets/lib/routes/plugins_shimmer_ex.dart": "e33c88ba1fc493c2c8da83a12679837b",
"assets/lib/routes/lists_wheel_scroll_view_ex.dart": "d5d6e9f3f6ad39cfc96f2fd21d96a634",
"assets/lib/routes/appbar_convex_appbar_ex.dart": "49a17647414fe718a06296ccc419922e",
"assets/lib/routes/firebase_login_ex.dart": "558b3c5b3df71d7a40d82e9b4336dc1a",
"assets/lib/routes/nav_draggable_scrollable_sheet_ex.dart": "604e2e58aa9a7165ead2fc1f54defc24",
"assets/lib/routes/firebase_chatroom_ex.dart": "2f596d9aad24e87839d6e1ec7b48a9a9",
"assets/lib/routes/multimedia_edge_detection_ex.dart": "787acc8ff17b89a353ec04f2f9b49e64",
"assets/lib/routes/animation_animated_widget_ex.dart": "fd986cc773ba820d270150413b9e5922",
"assets/NOTICES": "c8874f17d5d0d2fe96c264d013be379b",
"assets/res/lottie/thumbs-up.json": "4b4cb2af6893316e53405eae64157cce",
"assets/res/lottie/world.json": "8140dee112e141cd5c53c04e5727cb58",
"assets/res/images/splash_screen.png": "c4e0a23dd99e60d30b54ecc50b33f772",
"assets/res/images/animated_flutter_lgtm.gif": "b652a58dd464c07a80516f7a8f99ddf1",
"assets/res/images/dart-side.png": "6162e4c6ba269007cd5f2ae8d78e69af",
"assets/res/images/launcher_icon.png": "c5f510e9ded8369fdb8f6ead483e5ae8",
"assets/res/images/material_design_3.png": "c4c9411cb6b23dc218688d48f6bf514c",
"assets/res/images/material_design_4.jpg": "43e36ec401db9d8a6c44bb3d327b99b3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_gallery_assets/animated_images/animated_flutter_stickers.webp": "b44800b701a3d0bb1285726003b1ae5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"main.dart.js": "eee5901fd8c3e0bf0c94bf9af29cecec",
"favicon.png": "613aeef1f32aa9207181fe427ff3b64f"
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
