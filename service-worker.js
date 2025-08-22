self.addEventListener("install", event => {
  console.log("Service Worker instalado");
});

self.addEventListener("activate", event => {
  console.log("Service Worker activado");
});

self.addEventListener("fetch", event => {
  // De momento solo deja pasar las peticiones
});
