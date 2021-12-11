<template>
  <div class="flex justify-evenly gap-4">
    <div v-for="info in cardInfomation" class="flex-grow">
      <InfoCard :info="info" />
    </div>
  </div>
  <div class="mt-5">
    <div>
      <h1>Session Exams</h1>
    </div>
  </div>
</template>
<script>
import InfoCard from "../components/Info-card.vue";
export default {
  name: "Home",
  components: { InfoCard },
};
</script>
<script setup>
import { ref } from "@vue/reactivity";
const cardInfomation = ref([
  {
    title: "Students",
    description: "700",
  },
  {
    title: "Teachers",
    description: "20",
  },
  {
    title: "Session",
    description: "Second Term",
  },
]);
</script>
