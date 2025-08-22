// URL de tu Google Apps Script (ya desplegado como Web App)
const NOTIFICATION_API_URL = "https://script.google.com/macros/s/AKfycbzDrS44WEddXtghcSiqT0s8j538-yegny-mn39sw7eoujXCwxuwXz8gHWeTnyzNq5-h/exec";

/**
 * Envía notificación push a un usuario (padre o estudiante).
 * @param {string} userId - ID del usuario en OneSignal (external_user_id).
 * @param {string} nombre - Nombre del estudiante.
 * @param {string} grado - Grado del estudiante.
 * @param {string} hora - Hora exacta (hh:mm:ss).
 * @param {string} tipo - "ingreso", "salida" o "faltó".
 */
function enviarNotificacion(userId, nombre, grado, hora, tipo) {
  fetch(NOTIFICATION_API_URL, {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      title: `Asistencia ${tipo}`,
      message: `${nombre} (${grado}) registró ${tipo} a las ${hora}`
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("✅ Notificación enviada:", data);
  })
  .catch(error => {
    console.error("❌ Error al enviar notificación:", error);
  });
}
