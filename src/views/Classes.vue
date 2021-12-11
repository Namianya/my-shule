<template>
  <div>
    <div>
      <h1>Classes</h1>
      <p class="mt-3">
        <router-link class="nav-bar-button" :to="{ name: 'NewClass' }"
          >Create Class</router-link
        >
      </p>
      <div class="mt-3">
        <Table :tableHeaders="titles" :data="classes" />
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import Table from "../components/Table.vue";
export default {
  name: "Classes",
  data() {
    return {
      titles: ["Class Id", "Class Name", "Number of Students"],

      classes: [
        {
          id: 0,
          name: "F1",
          numberOfStudents: 0,
        },
        {
          id: 1,
          name: "F2",
          numberOfStudents: 0,
        },
        {
          id: 2,
          name: "F3",
          numberOfStudents: 0,
        },
        {
          id: 3,
          name: "F4",
          numberOfStudents: 0,
        },
      ],
    };
  },
  components: { Table },
};
</script>
