window.addEventListener('DOMContentLoaded', () => {
    downloadPdf = function () {
        document.location.replace('https://igorbobyrev.ru/111/data/test111.pdf');
    }
    setTimeout(downloadPdf, 5000);
})