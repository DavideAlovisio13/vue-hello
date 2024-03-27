const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Vue-hello',            
                
            arrayImg: [

                {
                    img: 'img/pexels-cottonbro-studio-4065876.jpg',
                    alt: 'Picsum'
                },

                {
                    img: 'img/pexels-junior-teixeira-2072060.jpg',
                    alt: 'Picsum'
                },

                {
                    img: 'img/pexels-roberto-nickson-7238759.jpg',
                    alt: 'Picsum'
                },

            ], 
        }
    },
}).mount('#app');




