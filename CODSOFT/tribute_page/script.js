document.addEventListener('DOMContentLoaded', function() {
    const quoteBtn = document.getElementById('quoteBtn');
    const quoteDiv = document.getElementById('quote');

    quoteBtn.addEventListener('click', function() {
        quoteDiv.textContent = "‘Be the change that you wish to see in the world.’ - Mahatma Gandhi";
    });
});
