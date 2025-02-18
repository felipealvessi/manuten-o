// Defina a data e hora em que a manutenção terminará
const countDownDate = new Date("marc 1, 2025 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    // Obtenha a data e hora atual
    const now = new Date().getTime();

    // Calcule a distância entre agora e a data de contagem regressiva
    const distance = countDownDate - now;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exiba o resultado no elemento com id="countdown"
    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Se a contagem regressiva terminar, exiba uma mensagem
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Manutenção concluída!";
    }
}, 1000);