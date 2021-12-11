<template>
  <div>
    Table
    <table
      class="border-collapse border table-auto border-gray-400 w-full"
    >
      <thead class="bg-slate-200 h-12">
        <tr>
          <th
            class="
              border border-gray-300
              px-4
              py-2
              text-lg
              font-medium
              text-gray-700
              uppercase
              tracking-wider
              text-center
            "
            v-for="tableHeader in tableHeaders"
          >
            {{ tableHeader }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="dataObject in data"
          class="cursor-pointer hover:bg-slate-100 duration-300"
        >
          <td
            class="border py-1 border-gray-300 text-center"
            v-for="key in dataObject"
          >
            {{ key }}
          </td>
          <!-- <td>{{ dataObject }}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Table",
  props: ["tableHeaders", "data"],
  data() {
    return {
      sortKey: "",
      sortOrders: {
        asc: 1,
        desc: -1,
      },
    };
  },
  computed: {
    sortedData() {
      if (!this.sortKey) return this.data;
      return this.data.sort((a, b) => {
        return (
          this.sortOrders[this.sortOrders[this.sortOrders[a[this.sortKey]]]] -
          this.sortOrders[this.sortOrders[this.sortOrders[b[this.sortKey]]]]
        );
      });
    },
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[this.sortOrders[this.sortOrders[this.sortKey]]];
    },
  },
};
</script>
