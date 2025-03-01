document.addEventListener("DOMContentLoaded", function () {
    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".card").forEach(card => {
            let quantityElem = card.querySelector(".quantity");
            let quantity = parseInt(quantityElem.innerText);
            let unitPrice = parseInt(card.querySelector(".unit-price").innerText.replace(" $", ""));
            total += quantity * unitPrice;
        });
        document.querySelector(".total").innerText = total + " $";
    }

    document.querySelectorAll(".plus").forEach(button => {
        button.addEventListener("click", function () {
            let quantityElem = this.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElem.innerText);
            quantityElem.innerText = quantity + 1;
            updateTotal();
        });
    });

    document.querySelectorAll(".minus").forEach(button => {
        button.addEventListener("click", function () {
            let quantityElem = this.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElem.innerText);
            if (quantity > 0) {
                quantityElem.innerText = quantity - 1;
                updateTotal();
            }
        });
    });

    document.querySelectorAll(".fa-trash-alt").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".card-body").remove();
            updateTotal();
        });
    });

    document.querySelectorAll(".fa-heart").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("text-danger");
        });
    });

    updateTotal();
});
