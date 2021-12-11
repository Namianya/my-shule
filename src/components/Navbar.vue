<template>
<nav class="my-3">
  <div class="flex gap-5 ">
<div v-for="route in routes" class="">
  <router-link :to="{name: route}" class="nav-bar-button">{{route}}</router-link>
</div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar.vue",
  data() {
    return {
      routes: [
        'Home','Classes','Students','Teachers','Subjects','Exams','Results','Settings'

      ]
    }
  }
}

</script>

<style scoped>

</style>