// const product = 'Socks'
const { createApp, ref } = Vue

createApp({
    setup(){
        // const product = ref('Socks')
        const product = ref('Boots')
        const description = ref('Boots is a cosmetics shop')
        const image = ref('./assets/images/socks_green.jpg')
        const productName = ref('http://www.camt.cmu.ac.th')
        const inStock = ref(false)
        const inventory = ref(10)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])

        const variants = ref([
            {id: 2234, color:'green', image:'./assets/images/socks_green.jpg'},
            {id: 2235, color:'blue', image:'./assets/images/socks_blue.jpg'}
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        function addToCart(){
            cart.value += 1
        }

        function updateImage(variantImage){
            image.value = variantImage
        }

        function changeStatus(){
            inStock = !inStock
        }

        return{
            product,
            description,
            image,
            productName,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            changeStatus
        }
    }
}).mount('#app')