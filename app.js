const quotes = [
    {quote: "Siendo más desgraciados es como aprendemos a veces a serlo menos.", author: "Sophie Soynonov"},
    {quote: "No se sale adelante celebrando éxitos sino superando fracasos.", author: "Orison Swett Marden"},
    {quote: "Recuerda que no puedes fallar en ser tú mismo.", author: "Wayne Dyer"},
    {quote: "Lo que se esconde detrás de ti y lo que está por delante, palidece en comparación con lo que se encuentra dentro de ti.", author: "Ralph Waldo Emerson"},
    {quote: "Amaré la luz para que me muestra el camino, sin embargo, voy a soportar la oscuridad porque me muestra las estrellas.", author: "Og Mandino"},
    {quote: "La vida debe ser vivida mirando hacia adelante, pero sólo puede ser entendida mirando hacia atrás.", author: "Kierkegaard"}
];



//? Optional API
const app = Vue.createApp({
  
    data() {
        return {
            quotes: quotes
        }
    }

})

app.mount("#myApp");