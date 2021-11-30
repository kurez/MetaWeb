<template>
  
    <div style="height: 960px">
      <hero></hero>
    </div>
</template>

<script>

import Hero from "./components/Hero";

export default {
  name: "components",
  components: {

    Hero
  },
  data () {
  return {
   
  }
}
};
</script>

<style  scoped>
* {
  transition: all 500ms ease-out;
  -webkit-transition: all 500ms ease-out;
   overflow: hidden;
}

</style>