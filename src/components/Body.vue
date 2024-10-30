<script setup>
import { ref } from "vue";
</script>

<template>
    <!--this is the gird that can display pictures and text.-->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 m-4">
        <div
            class="h-32 rounded-lg bg-whiteText bg-opacity-25 shadow-outline shadow-lg"
        >
            <div>
                <!-- announcements for the students!-->
                <h3 class="float-left text-extrabold text-xl text-yellowText ">
                    Announcements:
                    <p class='fixed'> Next meeting Nov 7, 2024</p>
                </h3>
            </div>
        </div>
        <div class="h-32 rounded-lg bg-whiteText bg-opacity-25 shadow-outline shadow-lg">
            <div></div>
        </div>
    </div>
</template>
