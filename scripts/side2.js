import {getArrayLocalStorage, isExistingProduct, clearLocalStorage} from "./modules/products.js"

const outputCart = document.getElementById("cart--output");
const buttonRemove = document.getElementById("cart--clear");
const outputSum = document.getElementById("sum--text");

const displayOutput = () => {
    let sum = 0;
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
            sum += product.price;
            
        });
        txtHTML += `
            </tbody>
        </table>
        `
        outputSum.innerHTML = `Totalt : ${sum} ,-`
        outputCart.innerHTML = txtHTML;
    }
    else {
        outputCart.innerHTML = "Handlekurv tom";
        outputSum.innerHTML = "-"
    }
}

(() => {
    displayOutput();
})();

buttonRemove.addEventListener('click', () => {
    clearLocalStorage()
    displayOutput()
})