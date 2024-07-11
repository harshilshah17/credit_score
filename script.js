function checkCreditScore() {
    const creditScore = document.getElementById('creditScore').value;
    const result = document.getElementById('result');
    const tip = document.getElementById('tip');

    if (creditScore === '') {
        result.textContent = 'Please enter a credit score.';
        result.style.color = 'red';
        tip.textContent = '';
        return;
    }

    let message = '';
    let color = '';
    let tipMessage = '';

    if (creditScore < 580) {
        message = 'Bad';
        color = 'red';
        tipMessage = 'Tip: Consider focusing on paying down high credit card balances and avoiding new debt.';
    } else if (creditScore >= 580 && creditScore < 670) {
        message = 'Fair';
        color = 'orange';
        tipMessage = 'Tip: Ensure all your payments are made on time and try to keep your credit utilization low.';
    } else if (creditScore >= 670 && creditScore < 740) {
        message = 'Good';
        color = 'green';
        tipMessage = 'Tip: Continue maintaining good habits like paying bills on time and monitoring your credit report.';
    } else if (creditScore >= 740 && creditScore <= 850) {
        message = 'Excellent';
        color = 'blue';
        tipMessage = 'Tip: Keep up the great work! Consider looking into rewards credit cards to benefit from your high score.';
    } else {
        message = 'Invalid credit score.';
        color = 'red';
        tipMessage = '';
    }

    result.textContent = `Your credit score is ${message}.`;
    result.style.color = color;
    tip.textContent = tipMessage;

    // Add animation class
    result.classList.add('scale');
    tip.classList.add('scale');

    // Remove animation class after animation ends
    setTimeout(() => {
        result.classList.remove('scale');
        tip.classList.remove('scale');
    }, 500);
}
