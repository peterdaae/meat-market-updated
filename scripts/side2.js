import {getArrayLocalStorage, isExistingProduct, clearLocalStorage} from "./modules/products.js"

const outputCart = document.getElementById("cart--output");
const buttonRemove = document.getElementById("cart--clear");

const displayOutput = () => {
    if (isExistingProduct()) {
        let cart = getArrayLocalStorage();
        let txtHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAVN</th>
                        <th>PRIS</th>
                        <th>BILDE</th>
                        <th>ANTALL</th>
                    </tr>
                </thead>
            <tbody>    
        `;

        cart.forEach((product) => {
            txtHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><img class="responsiveTableImage" alt="image of meat" src="${product.img}"></td>
                <td>${product.amount}</td>
            </tr>
            `;
        });
        txtHTML += `
            </tbody>
        </table>
        `
        outputCart.innerHTML = txtHTML;
    }
    else {
        outputCart.innerHTML = "Handlekurv tom";
    }
}

(() => {
    displayOutput();
})();

buttonRemove.addEventListener('click', () => {
    clearLocalStorage()
    displayOutput()
})