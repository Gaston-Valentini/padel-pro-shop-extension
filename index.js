function findProduct() {
    const prods = Array.from(document.querySelectorAll("._QuantityByPrice_1x2lx_19"));
    if (!prods[0]) return setTimeout(findProduct, 100);
    prods.forEach((prod) => {
        const quantity = prod.textContent.split(" ").reverse();
        if (quantity[0] > 1) {
            prod.classList.add("red");
        }
    });
}

findProduct();

setInterval(() => {
    findProduct();
}, 500);
