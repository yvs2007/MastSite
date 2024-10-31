<script setup>
import { ref } from "vue";
</script>

<template>
    <!--this is the gird that can display pictures and text.-->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 m-4">
        <div
            class="h-32 rounded-lg bg-Mblue bg-opacity-15 shadow-outline shadow-lg"
        >
            <div>
                <!-- announcements for the students!-->
                <h3 class="float-left text-bold text-xl text-black">
                    Announcements:
                </h3>
                <p class='float-down'> Next meeting Nov 7, 2024</p>
            </div>
        </div>
        <div class="h-32 rounded-lg bg-Mblue bg-opacity-15 shadow-outline shadow-lg">
            <div>

            </div>
        </div>
    </div>
</template>
