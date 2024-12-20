<script setup>
import { ref } from "vue";
import Title from "./components/Title.vue";
import Body from "./components/Body.vue";
import Footer from "./components/footer.vue";
</script>

<template>
    <div id="main">
        <!-- Ok so the Title is pretty basic and will need to add a logo later ig-->
        <Title class="" />
        <!--The body will be a little bit different probably with some interactive features.-->
        <Body class="" />
        <Footer class=""/>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
#main {
    font-family: Nunito;
};
</style>
