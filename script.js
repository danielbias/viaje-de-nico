// Cálculo simbólico de la distancia actualizada
function updateDistance() {
    const startDate = new Date('2023-09-17T00:00:00');
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Distancia inicial en UA
    const initialUA = 77133;
    // 1 UA se recorre en ~499 segundos a velocidad de la luz (8.316 minutos)
    const secondsPerUA = 499;
    const additionalUA = diffDays * 24 * 60 * 60 / secondsPerUA;
    const currentUA = initialUA + additionalUA;

    document.getElementById('days').textContent = diffDays;
    document.getElementById('distance').textContent = currentUA.toFixed(1) + ' UA';
}

// Actualizar al cargar
updateDistance();
// Actualizar cada hora (simbólico)
setInterval(updateDistance, 3600000);
