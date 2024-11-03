<script setup>
import { ref } from "vue";
import AEs from "./bcomponents/AEs.vue";
import GOs from "./bcomponents/GOs.vue";
import Mission from "./bcomponents/mission.vue";
</script>

<template>
    <div class="bg-Mblue m-1 rounded-sm">
        <!--The mission is for the mission statment and can be easily changed inside 
        the actual file.-->
        <Mission />
        <!--The announcement will be updated weekly and should honestly be bundled with the 
        events.-->
        <AEs />
        <!--Im gonna bundle these rn gimme a sec.-->
        <GOs />

        
    </div>
</template>
