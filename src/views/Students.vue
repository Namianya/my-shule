<template>
  <div>
    <h1>Students</h1>
    <div class="mb-4">
      <router-link to="/students/new"> Add Student </router-link>
    </div>
    <div>
      <h3>Get Student List</h3>
    </div>
    <div class="flex gap-2">
      <p
        v-for="(aclass, index) in classes"
        :key="{ index }"
        class="
          bg-slate-300
          text-slate-700
          hover:bg-slate-400
          duration-300
          px-5
          py-1
          rounded-full
          hover:text-slate-800 hover:shadow-lg
          cursor-pointer
        "
      >
        {{ aclass }}
      </p>
    </div>
  </div>
<!-- section -->
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
          v-for="student in students"
          class="cursor-pointer hover:bg-slate-100 duration-300"
        >
          <td
            class="border py-1 border-gray-300 text-center"
            
          >
            {{ student.admissonNumber }}
          </td><td
            class="border py-1 border-gray-300 text-center"
            
          >
            {{ student.name }}
          </td>
          <td
            class="border py-1 border-gray-300 text-center"
            
          >
            {{ student.class }}
          </td>
          <!-- <td>{{ dataObject }}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Students",
  data() {
    return {
      classes: ["F1", "F2", "F3", "F4"],
      tableHeaders: ["Admisson Number","Name", "Class",],
      students: [
        {
          name: "John Doe",
          admissonNumber: "1",
          class: "F1",
          id: 1,
        },
        {
          name: "Jane Doe",
          admissonNumber: "2",
          class: "F2",
          id: 2,
        },
        {
          name: "Jack Doe",
          admissonNumber: "3",
          class: "F3",
          id: 3,
        },
        {
          name: "Jill Doe",
          admissonNumber: "4",
          class: "F4",
          id: 4,
        },
        {
            name: "Jill Doe",
            admissonNumber: "5",
            class: "F4",
            id: 5,
            },
        
      ],
    };
  },
};
</script>
