<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="bg-Mblue m-1 rounded-sm bg-opacity-15">
        <!--Mission Stamtent.-->
        <div id="Mission" class="text-2xl text-center border-b-2 text-black">
            <h1> what is in here</h1>
        </div>
        <!--Announcements and Events.-->
        <div id="AEs" class="text-1xl inline-block">
            <div id="Announcements" class="w-[50%] border-r-2">
                <p>Announcements:</p>
            </div>
            <div id="Events." class="w-[50%] ">
                <p>Events:</p>
            </div>
        </div> 
        <!--goals and Opportunities.-->
        <div id="GOs" class="">
            <div id="goals">
                <p>goals</p>
            </div>
            <div id="oppourtunities">
                <p>oppourtunities</p>
            </div>
        </div>
    </div>
</template>
