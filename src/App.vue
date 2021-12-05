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
}Q  
#app {
  font-family: 'Jura', sans-serif;
  overflow: hidden;
  
}

.kave {
  &-btn {
    position: relative;
    border: solid 2px rgba(0, 0, 0, 0.1);
    background: none;
    color: rgba(0, 0, 0, 1);
    font-family: "Jura", sans-serif;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 1.8px;
    width: 200px;
    height: 70px;
    padding: 0;
    transition: all 0.25s ease;
    outline: none;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 10%;
      width: 60px;
      height: 1px;
      transform: translateY(-1px);
      background: rgba(0, 0, 0, 1);
      transition: all 0.25s ease;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 10%;
      width: 60px;
      height: 1px;
      transform: translateY(1px);
      background: #000;
      transition: all 0.25s ease;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
      color: #000;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
      &.kave-btn:before {
        left: 0;
        width: 20px;
      }
      &.kave-btn:after {
        right: 0;
        width: 20px;
      }
      .kave-line:before {
        bottom: 0;
      }
      .kave-line:after {
        top: 0;
      }
    }
  }
  &-line {
    &:before {
      content: "";
      position: absolute;
      bottom: 30%;
      right: 0;
      width: 1px;
      height: 20px;
      transform: translateX(1px);
      background: #000;
      transition: all 0.25s ease;
    }
    &:after {
      content: "";
      position: absolute;
      top: 30%;
      left: 0;
      width: 1px;
      height: 20px;
      transform: translateX(-1px);
      background: rgb(0, 0, 0);
      transition: all 0.25s ease;
    }
  }
}
</style>
