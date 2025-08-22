// Registrar Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("✅ Service Worker registrado"))
    .catch(err => console.error("❌ Error SW:", err));
}

// Función de prueba de notificación
function testNotificacion() {
  alert("Aquí se integrará la notificación push con OneSignal + Google Apps Script");
}
