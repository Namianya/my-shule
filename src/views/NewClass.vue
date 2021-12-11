<template>
  <div>
    <form action="" method="post">
      <div class="form-group">
        <label for="name">Class Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          placeholder="Enter name"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "NewClass",
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
};
</script>
