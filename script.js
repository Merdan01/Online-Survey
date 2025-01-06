document.getElementById('submitBtn').addEventListener('click', () => {
    const form = document.getElementById('surveyForm');
    const formData = new FormData(form);
    const data = {};

    // Собираем данные из формы
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Логируем данные перед отправкой
    console.log("Данные для отправки:", data);

    // Отправка данных через fetch
    fetch("https://script.google.com/macros/s/AKfycbyTwHi2Ut0ToUGRP-QIieu8oGj3dgL6XQSrAuVhFLVDnSHCxM_mezCTHz6QJOzwn0bkyQ/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        if (!response.ok) {
            // Если статус ответа не успешный
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.text(); // Читаем текстовый ответ
    })
    .then(result => {
        console.log("Результат:", result);
        alert("Ответы успешно отправлены!");
        form.reset();
    })
    .catch(error => {
        // Логируем ошибку
        console.error("Ошибка при отправке:", error);
        alert("Произошла ошибка при отправке данных. Проверьте консоль для деталей.");
    });
});



// Идентификатор развертывания
// AKfycbyTwHi2Ut0ToUGRP-QIieu8oGj3dgL6XQSrAuVhFLVDnSHCxM_mezCTHz6QJOzwn0bkyQ

// URL
// https://script.google.com/macros/s/AKfycbyTwHi2Ut0ToUGRP-QIieu8oGj3dgL6XQSrAuVhFLVDnSHCxM_mezCTHz6QJOzwn0bkyQ/exec