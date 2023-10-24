document.addEventListener("DOMContentLoaded", function () {
    const paymentButton = document.getElementById("paymentButton");
    paymentButton.addEventListener("click", () => {
        simulatePayment()
            .then((result) => {
                displayPaymentStatus(result, "success");
            })
            .catch((error) => {
                displayPaymentStatus(error, "failure");
            });
    });

    function simulatePayment() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() < 0.7;
                if (isSuccess) {
                    resolve("Payment Successful");
                } else {
                    reject("Payment Failed");
                }
            }, 3000);
        });
    }

    function displayPaymentStatus(message, status) {
        const paymentStatusElement = document.getElementById("paymentStatus");
        paymentStatusElement.textContent =`Payment ${status}:${message}`;
        paymentStatusElement.classList.add(status);
}
})