function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = 'Por favor, insira um número válido.';
        return;
    }

    if (unit === 'F') {
        // Converter Fahrenheit para Celsius
        result = (temperature - 32) * 5 / 9;
        result = result.toFixed(2) + ' °C';
    } else {
        // Converter Celsius para Fahrenheit
        result = (temperature * 9 / 5) + 32;
        result = result.toFixed(2) + ' °F';
    }

    document.getElementById('result').innerText = 'Resultado: ' + result;
}