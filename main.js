// const product = 'Socks'
const { createApp, ref, computed} = Vue

createApp({
    setup(){
        // const product = ref('Socks')
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('Boots is a cosmetics shop')
        // const image = ref('./assets/images/socks_green.jpg')
        const productName = ref('http://www.camt.cmu.ac.th')
        // const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])

        const variants = ref([
            {id: 2234, color:'green', image:'./assets/images/socks_green.jpg', quantity:50},
            {id: 2235, color:'blue', image:'./assets/images/socks_blue.jpg', quantity:0}
        ])

        

        const selectedVariant = ref(0)

        function updateVariant(index){
            selectedVariant.value = index;
        }

        const image = computed(() =>{
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() =>{
            return variants.value[selectedVariant.value].quantity
        })
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
            inStock.value = !inStock.value
            console.log(inStock)
        }

        const title = computed(() =>{
            return brand.value + ' ' +product.value
        })

        const salesStatus = computed(() =>{
            if(onSale.value){
                return brand.value + ' ' + product.value + ' is on Sale.'
            }
            else{
                return
            }
        })

        return{
            title,
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
            changeStatus,
            updateVariant,
            salesStatus
        }
    }
}).mount('#app')