<script setup>
import { ref } from "vue";
/*
let Nmonth = ref(Number(new Date().getMonth()));
let amonth = ref(typeof Nmonth);
const month = ["January", "Febuary", "March", "April", 
"May", "June", "July", "August", "September", "October", "November", "December", ];
*/
let year = ref(new Date().getFullYear())




const date = ref(/*month[Nmonth.value]*/ "January" + " 9" + "th "+ year.value + 1)
</script>

<template>

</template>
