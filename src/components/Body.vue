<script setup>
import { ref } from "vue";
/*
let Nmonth = ref(Number(new Date().getMonth()));
let amonth = ref(typeof Nmonth);
const month = ["January", "Febuary", "March", "April", 
"May", "June", "July", "August", "September", "October", "November", "December", ];
*/
let year = ref(new Date().getFullYear())




const date = ref(/*month[Nmonth.value]*/ "December" + " 5" + "th "+ year.value)
</script>

<template>
    <div class="">
        <!--Mission Stamtent.-->
        <div id="Mission" class=" text-center border-4 rounded-md mb-4 bg-[#e5e7eb] 
        ">
            <h1 class="text-2xl mb-2 font-extrabold"> Mission Statment</h1>
            <p class="text-l font-semibold">Our Mission Statement is to provide a safe space in order 
                to nurture the passion of coding. 
                While teaching to work in groups and in environments like the current job market.
            </p>
        </div>
        <!--Announcements and Events.-->
        <div id="AEs" class=" ">
            <div id="Announcements" class="text-left mb-5">
            <h2 class="text-bold text-xl font-bold">Announcements:</h2>
            <p class="text-l">Next meeting is on {{ date }}</p>
            </div>
            <div id="Events" class="text-right w-[50%] float-right mb-5 border-8 rounded-xl">
                <h2 class="text-xl font-bold">Events:</h2>
                <p class="text-l">The next Hackathon is here>>></p>
                <p class=""> what is in here </p>
            </div>
        </div>
        <!--goals and Opportunities.-->
        <div id="GOs" class="">
            <div id="goals" class="text-left  mb-5">
                <h2 class="text-xl font-bold">Goals:</h2>
                <ul class="text-l list-disc">
                    <li>To teach the thought process of a programmer </li>
                    <li>For students to develop a passion and habit for programing </li>
                    <li>To allow more advanced students to compete </li>
                </ul>
            </div>
            <div id="oppourtunities" class="text-right mb-5">
                <h2 class="text-xl font-bold">Oppourtunities:</h2>
                <ul class="text=l list-disc">
                    <li>Help provided Every Thursday </li>
                    <li>Pushing Students to Attend Hackathons </li>
                    <li>Creating a portfolio with students </li>
                    <li>Increasing the chances for future CS jobs </li>
                </ul>
            </div>
        </div>
    </div>
</template>
