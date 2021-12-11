<template>
  <div>
    <div
      class="
        rounded-lg
        p-4
        bg-slate-50
        shadow-lg
        hover:p-5 hover:shadow-xl
        duration-700
        cursor-pointer
      "
    >
      <p>{{ info.title }}</p>
      <p class="text-4xl font-bold text-slate-700">{{ info.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoCard",
  props: ["info"],
};
</script>
