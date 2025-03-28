const startTradeButton = document.getElementById('startTradeButton');
const paymentForm = document.getElementById('payment-form');
const paymentButton = document.getElementById('paymentButton');

startTradeButton.addEventListener('click', function() {
    // Show the payment form
    paymentForm.style.display = 'block';
});

paymentButton.addEventListener('click', function() {
    // Redirect to Square Checkout (just an example, replace with actual session ID)
    window.location.href = 'https://checkout.square.site/buy/[your-square-checkout-session-id]';
});
