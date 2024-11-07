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
        <div id="Mission" class="text-2xl text-center border-b-2 text-black">
            <h1> what is in here</h1>
        </div>
        <!--Announcements and Events.-->
        <div id="AEs">
            <div id="Announcements" class="">
            <h2>Announcements:</h2>
            
            <p>Next meeting is on {{ date }}</p>
            </div>
            <div id="Events" class="">
                <h2>Events:</h2>
            </div>
        </div>
        <!--goals and Opportunities.-->
        <div id="GOs" class="">
            <div id="goals">
                <h2>Goals:</h2>
            </div>
            <div id="oppourtunities">
                <h2>Oppourtunities:</h2>
            </div>
        </div>
    </div>
</template>
