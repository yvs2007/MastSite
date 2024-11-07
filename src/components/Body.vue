<script setup>
import { ref } from "vue";

const month = ["September", "October", "November", "December", "January", "Febuary", "March", 
"April", "May"];
const day = ref(14);
const date = ref(month[2]+ " "+ day.value + "th, 2024" );

</script>

<template>
    <div class="bg-Mblue m-1 rounded-sm bg-opacity-15">
        <!--Mission Stamtent.-->
        <div id="Mission" class="text-2xl text-center mb-5 ">
            <h1> Mission Statment</h1>
        </div>
        <!--Announcements and Events.-->
        <div id="AEs" class="">
            <div id="Announcements" class="text-left mb-5">
            <h2 class="text-bold text-xl ">Announcements:</h2>
            <p class="text-l">Next meeting is on {{ date }}</p>
            </div>
            <div id="Events" class="text-right  mb-5">
                <h2 class="text-xl text-bold">Events:</h2>
                <p class="text-l">The next Hackathon is here>>></p>
            </div>
        </div>
        <!--goals and Opportunities.-->
        <div id="GOs" class="">
            <div id="goals" class="text-left  mb-5">
                <h2 class="text-xl text-bold">Goals:</h2>
                <p class="text-l"></p>
            </div>
            <div id="oppourtunities" class="text-right  mb-5">
                <h2 class="text-xl text-bold">Oppourtunities:</h2>
                <p class="text-l"></p>
            </div>
        </div>
    </div>
</template>
