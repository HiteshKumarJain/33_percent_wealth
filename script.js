
function calculateReturns() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const years = parseInt(document.getElementById('years').value);
    const annualGrowthRate = 0.33; // 33% annual growth
    const resultElement = document.getElementById('result');

    // Reset result message
    resultElement.classList.remove('result-error');
    resultElement.innerText = '';

    // Check if inputs are valid
    if (isNaN(initialAmount) || initialAmount <= 0) {
        resultElement.classList.add('result-error');
        resultElement.innerText = "Please enter valid value for  initial amount.";
        return;
    } else  if (isNaN(years) || years <= 0) {
        resultElement.classList.add('result-error');
        resultElement.innerText = "Please enter valid value for years.";
        return;
    }


    // Calculate the final amount with growth rate
    const finalAmount = (initialAmount * annualGrowthRate * years) + initialAmount;
    resultElement.innerText = `Estimated Returns: ₹ ${finalAmount}`;
}

let currentFeedbackIndex = 0;
        const feedbackCards = document.querySelectorAll('.feedback-card');
        const prevArrow = document.getElementById('prevArrow');
        const nextArrow = document.getElementById('nextArrow');

        function updateFeedbackDisplay() {
            feedbackCards.forEach((card, index) => {
                card.classList.remove('active');
                card.style.opacity = '0';
                if (index === currentFeedbackIndex) {
                    card.classList.add('active');
                    setTimeout(() => card.style.opacity = '1', 50);
                }
            });
        }

        prevArrow.addEventListener('click', () => {
            currentFeedbackIndex = (currentFeedbackIndex - 1 + feedbackCards.length) % feedbackCards.length;
            updateFeedbackDisplay();
        });

        nextArrow.addEventListener('click', () => {
            currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackCards.length;
            updateFeedbackDisplay();
        });

        updateFeedbackDisplay(); // Initialize display