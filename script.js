document.getElementById('submitBtn').addEventListener('click', () => {
    const form = document.getElementById('surveyForm');
    const formData = new FormData(form);
    const data = [];

    formData.forEach((value, key) => {
        data.push({ question: key, answer: value });
    });

    const csvContent = "data:text/csv;charset=utf-8," +
        data.map(e => `${e.question},${e.answer}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "survey_results.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
});
