'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "13f13a8ed4817dd8252826607c90da8b",
"/main.dart.js": "ccd992ae421464275e21dd73a00311ca",
"/assets/LICENSE": "8cc9873752601320ea3f699e3e5b2713",
"/assets/images/regent.jpg": "c1d0b1031f4abf7e7ba012a8e5ddf344",
"/assets/images/favicon.png": "02b9e5d0c5f9bef59293c239d69935ec",
"/assets/images/bg5.jpg": "028365edc9cf8b29e2ebc65b987c873f",
"/assets/images/bg4.jpg": "7842f2f230da883d71ce6cc3fda145ff",
"/assets/images/logo.png": "02b9e5d0c5f9bef59293c239d69935ec",
"/assets/images/bg1.jpg": "db3f22f1ac4f1f899a30d651c69ebc4f",
"/assets/images/bg3.jpg": "e62028a52807ad3efc8bd4c865459fa0",
"/assets/images/bg2.jpg": "cb0a1e3b5686248e326cd1ce7a837c7c",
"/assets/images/momeemt.jpg": "28627ea59dd96417257b126a65ec7fe5",
"/assets/AssetManifest.json": "a351d3e80cddb390eaec26320c6e4092",
"/assets/FontManifest.json": "661b86139c9e218b86cd83adbf44c2c7",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/fonts/uzura.ttf": "047bdfea396ebe72ccea480cbc5ef3cb",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
