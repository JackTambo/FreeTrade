const tradeForm = document.getElementById('tradeInfoForm');
const tradeDisplay = document.getElementById('tradeDisplay');
const tradeDetails = document.getElementById('tradeDetails');
const paymentForm = document.getElementById('payment-form');
const startTradeButton = document.getElementById('startTradeButton');
const paymentButton = document.getElementById('paymentButton');

tradeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageInput = document.getElementById('image');

    // Handle image upload
    let imageURL = '';
    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        imageURL = URL.createObjectURL(file); // For demo purposes (no backend)
    }

    // Display trade info
    tradeDisplay.style.display = 'block';
    tradeDetails.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        ${imageURL ? `<img src="${imageURL}" alt="${title}" />` : ''}
        <button type="button" id="startTradeButton">Proceed with Payment</button>
    `;
});

// Handle payment redirection
startTradeButton.addEventListener('click', function() {
    // Show the payment form
    paymentForm.style.display = 'block';
});

paymentButton.addEventListener('click', function() {
    // Redirect to Square Checkout (placeholder link)
    alert('Redirecting to Square checkout...');
    window.location.href = 'https://checkout.square.site/buy/[your-square-checkout-session-id]';
});
