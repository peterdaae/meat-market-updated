const ProductModule = (
    () => {
        const products = [
            {
                id: 1,
                name: "WIENER PØLSE",
                price: 75.50,
                img: "images/wienerpølser.jpg",
            },
            {
                id: 2,
                name: "CHIPOTLE PØLSE",
                price: 74.50,
                img: "images/chipotle-pølse.jpg",

            },
            {
                id: 3,
                name: "FÅRIKÅLKJØTT",
                price: 73.50,
                img: "images/fårikålkjøtt.jpg",

            },
            {
                id: 4,
                name: "GRILL PØLSE",
                price: 72.50,
                img: "images/grillpølser.jpg",

            },
            {
                id: 5,
                name: "KARBONADE KJØTTDEIG",
                price: 71.50,
                img: "images/karbonadedeig.jpg",

            },
            {
                id: 6,
                name: "KARBONADER",
                price: 70.50,
                img: "images/karbonader.jpg",

            },
            {
                id: 7,
                name: "RØKT KJØTTPØLSE",
                price: 69.50,
                img: "images/røkte-kjøttpølser.jpg",

            },
            {
                id: 8,
                name: "KYLLING KJØTTDEIG",
                price: 68.50,
                img: "images/kyllingkjøttdeig.jpg",

            }
        ];
        
        const getAllProducts = () => products;

        const addProductLocalStorage = (product) => {
            const productArray = JSON.parse(localStorage.getItem("products")) || [];

            let filterArrayId = productArray.filter(item => item.id === product.id)

            if (filterArrayId.length > 0){
                filterArrayId[0].amount += 1;
                filterArrayId[0].price = product.price * filterArrayId[0].amount;
            }

            else {
                productArray.push({
                    ...product,
                    amount: 1,
                })
            }
            localStorage.setItem("products", JSON.stringify(productArray))
        };

        const getArrayLocalStorage = () => {
            const productArray = JSON.parse(localStorage.getItem("products"));
            return productArray;
        }


        const isExistingProduct = () => {
            const getArray = localStorage.getItem("products") === null? false : true
            return getArray;
        }

        const clearLocalStorage = () => {
            localStorage.clear("products");
        }

        return {
            getAllProducts,
            addProductLocalStorage,
            getArrayLocalStorage,
            isExistingProduct,
            clearLocalStorage
        }


})();

export const {getAllProducts, addProductLocalStorage, getArrayLocalStorage, isExistingProduct, clearLocalStorage} = ProductModule;
