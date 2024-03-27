const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Vue-hello',
            Image: 'https://picsum.photos/200/300',
            altimage: 'Picsum'
        }
    }
}).mount('#app');


