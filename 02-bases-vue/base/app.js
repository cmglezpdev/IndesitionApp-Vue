

//? Optional API
const app = Vue.createApp({
    // template: `
    //     <h1>Hola Mundo</h1>
    //     <p> {{ [1, 3, 4, 6, 8, 9] }} </p>
    //     <p> {{ {a:1, b:[]} }} </p>
    // `

    //* Variables reactivas que se pueden usar desde cualquier lugar de la app
    //* Reactivas significa que en el momento que se cambie el valor el solo se renderiza en donde se este usando
    data() {
        return {
            author: 'Brus Wyne',
            quote: "I'm Batman"
        }
    },
    // *Metodos reactivos
    methods: {
        changeQuote() {
            // this hace referencia a las cosas de la App
            this.author = "Carlos Manuel";
            this.capitalize();
        },
        capitalize() {
            this.quote = this.quote.toUpperCase();
        }
    }


})

app.mount("#myApp");