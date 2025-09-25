import {getAllProducts, addProductLocalStorage} from "./modules/products.js"

const outputSection = document.getElementById("products--output");

const displayOutput = (products) => {
    
    let txtHTML = "";

    products.forEach(product => {
        txtHTML += `
            <article class="col-3 col-6 col-12">
                
                <div class="image-container">
                    <img class="responsive-image" alt="image of meat" src="${product.img}">
                </div>
                
                <div class="product-content">
                    <h3 class="title--product">${product.name}</h3>
                    <span id="price">Pris: ${product.price} ,-</span>
                    <button type="button" class="product--add">Add to cart</button>
                </div>
                

            </article>
`;
    })

    outputSection.innerHTML = txtHTML;
    const buttons = document.querySelectorAll(".product--add");

    buttons.forEach((productButton, index) => {
        productButton.addEventListener('click', () => {
            const product = products[index];
            addProductLocalStorage(product)
            alert(`${product.name} added to cart`);
        })
    })
}


    const displayProducts = () => {
        const products = getAllProducts();
        displayOutput(products);
    }
(
    () => {
        displayProducts();
    }
)();

