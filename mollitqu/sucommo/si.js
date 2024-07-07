// Parent Component
<template>
  <div>
    <ChildComponent v-model="parentModel"></ChildComponent>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentModel: '',
    };
  },
};
</script>
