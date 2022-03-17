<template>
<div>
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
    <p data-testid="counter">{{ counter }}</p>

    <div>
        <button @click="decreaseValue">-1</button>
        <button @click="increaseValue">+1</button>
    </div>

</div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            // required: true,
            default: 100,
            validator( value ) {
                return (value >= 100)
            }
        }
    },
    name: "Counter",
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        increaseValue() {
            this.counter ++;
        },
        decreaseValue() {
            this.counter --;
        }
    },
    computed: {
        squareCounter() {
            return this.counter * this.counter;
        },
        customTitle() {
           return (this.title) ? this.title : "Counter";
        }
    }
}
</script>

<style>

button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 10px 20px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>