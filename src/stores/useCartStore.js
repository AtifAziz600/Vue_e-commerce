import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {

    state: () => ({
        cart: []
    }),

    actions: {
        addToCart(product) {
            const index = this.cart.findIndex(item => item?.vendor?.id === product?.vendor?.id);
            if(index > -1){
                const pIndex = this.cart[index]?.vendor?.products?.findIndex(p => p.id === product?.vendor?.products[0]?.id)
                if(pIndex > -1){
                    if (this.cart[index] && this.cart[index].vendor && this.cart[index].vendor.products) {
                        this.cart[index].vendor.products[pIndex].qty++ // = product?.vendor?.products[0];
                    }

                    // this.cart?.vendor[index]?.products[pIndex] = product?.vendor?.products[0]
                }
                else{
                    this.cart[index]?.vendor?.products.push(product?.vendor?.products[0])
                }
            }
            else this.cart.push(product);
            this.setInLocalStorage();
            $toast.info("Added To Cart...")
        },
        removeFromCart(item) {
            const index = this.cart.indexOf(item);
            if (index > -1) {
                this.cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
            
            $toast.info("Remove From Cart...")
        },
        incrementQty(id) {
            const index = this.cart.findIndex(item => {
                return item?.selectSku.id === id
            });
            this.cart[index].selectSku.selectQty++;
            this.setInLocalStorage();
            $toast.info("Quantity Updated...")
        },
        decrementQty(id) {

            const index = this.cart.findIndex(item => {
                return item?.selectSku.id === id
            });

            if (this.cart[index].selectSku.selectQty > 1) {
                this.cart[index].selectSku.selectQty--;
            }

            // if you want to remove this product if qty 0
            // if (this.cart[itemIndex].quantity <= 0) {
            //     this.removeFromCart(this.cart[itemIndex]);
            // }

            this.setInLocalStorage();
            $toast.info("Quantity Updated...")
        },
        setInLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        initCart() {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                this.cart = JSON.parse(storedCart);
            }
        },
        clearCart() {
            this.cart = [];
            localStorage.removeItem("cart");
            this.initCart();
        }
    },

    getters: {
        getCartLength() {

            let totalProducts = 0;
            this.cart.forEach(item => totalProducts += item?.vendor?.products.length)

            return totalProducts;
            // return this.cart.length;
        },
        getCartItems() {
            return this.cart;
        },
        getCartTotalPrice() {
            let totalPrice = 0;
            this.cart.forEach(item =>{
                item?.vendor?.products.forEach(pro => totalPrice += pro.price * pro.qty)
            })

            return totalPrice;

            // return this.cart.reduce((total, item) => total + item?.price * item?.qty, 0)
        }
    }

})
