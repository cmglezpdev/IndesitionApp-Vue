<template>
    <img v-if="img" v-bind:src="img" alt="bg">
    <div class="bg-dark"></div>

    <div class="indesition-container">
        <input v-model="question" type="text" placeholder="Hazme una pregunta"> 
        <p>Recuerda terminar con un signo de interrogacion (?)</p>
        <div v-if="isValidCuestion">
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            img: null,
            isValidCuestion: false
        }
    },
    methods: {

        async getAnswer() {

            this.answer = "Pensando ...";
            const url = "https://yesno.wtf/api";
        
            const { answer, image } = await fetch(url).then( result => result.json() )

            switch( answer ) {
                case "no":
                    this.answer = "NO!!";
                    break;
                case "yes":
                    this.answer = "SII!!"
                    break;
                case "mybe":
                    this.answer = "QUISAS!!"
                    break;
            }

            this.img = image;

        }

    },
    watch: {
        question( value, oldValue ) {
            this.isValidCuestion = false;
            if( !value.includes('?') ) return 
            this.isValidCuestion = true;
            this.getAnswer();
        }
    }
}
</script>


<style>

img, .bg-dark {
    height: 100vh;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indesition-container {
    position: relative;
    z-index: 10;
}

input {
    width: 350px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 5px;
}

h1, h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>