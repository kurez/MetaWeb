<template>
    <button class="navbar-toggler" type="button"
            style="background-color: #fff"
            data-toggle="collapse"
            :data-target="target"
            :aria-controls="target"
            :aria-expanded="toggled"
            aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i class="fa fa-bars" style="margin-top: 10%"></i></span>
    </button>
</template>
<script>
export default {
  props: {
    target: {
      type: [String, Number],
      description: "Button target element"
    },
    toggled: {
      type: Boolean,
      default: false,
      description: "Whether button is toggled"
    }
  }
};
</script>
<style>
</style>
