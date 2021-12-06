<template>
    <div id="app" >
        <router-view name="header"></router-view>
        <main>
            <transition
              name="fade"
               mode="out-in"
              >
                <router-view/>
            </transition>
        </main>
        <!-- <router-view name="footer"></router-view> -->
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@700&family=Orbitron:wght@900&display=swap');
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
#app {
  font-family: 'Jura', sans-serif;
  overflow: hidden;
  
}
</style>
