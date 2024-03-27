const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Vue-hello',            
                
            arrayImg: [
                {
                    img: 'https://picsum.photos/200/300',
                    alt: 'Picsum'
                }
            ], 
        }
    },
    modules() {

    }
}).mount('#app');




