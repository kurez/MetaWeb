<template>
  <!-- Page Content-->
    <header>
     

      <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
      <div class="overlay">
                <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="http://foo.bar/particles.json"
        />

        <!-- or -->

        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="{
                    background: {
                        color: {
                            value: 'transparent'
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: 'push'
                            },
                            onHover: {
                                enable: false,
                                mode: 'attract'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#949a78'
                        },
                        links: {
                            color: '#949a78',
                            distance: 150,
                            enable: true,
                            opacity: 0.6,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 0.6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 44
                        },
                        opacity: {
                            value: 0.6
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
      </div>

      <iframe frameborder="0" height="100%" width="100%" src="https://youtube.com/embed/tz8Puc4W5BM?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1"></iframe>

      <!-- The header content -->
      <div class="container-fluid h-100">
         
      <div class="container h-100">
       
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            
            <div class="row">  
              <div class="col-lg-6">                  
              
                 <div class="row">
                    <div class="animated-title">
                      <div class="text-top">
                        <div>
                          <img src="img/brand/metawild-light-transparent.png" alt="hero-logo" class="hero-logo">
                          <span>METAWILD ICO</span>
                        </div>
                      </div>
                      <div class="text-bottom">
                        <div><span>Decentralized.Yield-Generation Utility.Wildlife Conservation Token.</span></div>
                      </div>
                    </div>
                    </div>
                <div class="row col-xs-hidden">
                <router-link to="/metawild" class="hero-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                 <i class="ni ni-user-run" style="margin-right: 8px"></i> Get started
                </router-link>

                <router-link to="/tokenomics" class="hero-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                 <i class="ni ni-world-2" style="margin-right: 8px"></i> Metaverse
                </router-link>
                </div>
               
                </div> 

            </div>
           
              
              </div>
            </div>
          </div>
          </div>
      
    </header>
</template>

<script>


import { ParticlesBg } from "particles-bg-vue";

export default {
  components: {
    ParticlesBg
    // Hero
  },
};
</script>


<style lang="scss" scoped>

/* header with video */

header {
  position: relative;
  font-family: "Jura", sans-serif;
  background-color: black;
  height: 100%;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

header iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 1;
}

/* Media Query for devices withi coarse pointers and no hover functionality */

/* This will use a fallback image instead of a video for devices that commonly do not support the HTML5 video element */

@media (pointer: coarse) and (hover: none) {
  header {
    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
  }

  header iframe {
    display: none;
  }
}


/* animated-text */
.hero-logo{
  width: 100%;
}
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

.animated-title {
  color: #fff;
  font-family: 'Jura' sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.animated-title > div div {
  font-size: 6.477vmin;
  padding: 2vmin 0;
  position: absolute;
}

.animated-title > div div span {
  display: block;
}

.animated-title > div.text-top {
  border-bottom: 0.3vmin solid #cacfaf;
  top: 0;
}

.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}

.animated-title > div.text-top div span:first-child {
  color: #fff;
}

.animated-title > div.text-bottom {
  bottom: 0;
}

.animated-title > div.text-bottom div {
  font-size: 1.54vmin;
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}


/*  hero button */

.hero-btn {
  position: relative;
  display: inline-block;
  padding: 20px 51px;
  margin-right: 17.32px;
  border-radius: 2px;
  color: #fff;
  min-width: 160px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  margin-top: 200px;
  font-family: "Jura", sans-serif;
  filter: hue-rotate(0deg);
  border: 1px solid #fff;
  transition: all 0.1s linear;

  &:hover {
    border: 1px solid transparent;
    color: #cacfaf;
    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        filter: hue-rotate(0deg);
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, #3a86ff);
        animation: animate1 1s linear infinite;
      }
      @keyframes animate1 {
        0% {
          left: -100%;
        }
        50%,
        100% {
          left: 100%;
        }
      }

      &:nth-child(2) {
        filter: hue-rotate(60deg);
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #3a86ff);
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;
      }

      @keyframes animate2 {
        0% {
          top: -100%;
        }
        50%,
        100% {
          top: 100%;
        }
      }
      &:nth-child(3) {
        filter: hue-rotate(120deg);
        bottom: 0;
        right: 0;
        width: 100%;

        background: linear-gradient(270deg, transparent, #3a86ff);
        animation: animate3 1s linear infinite;
        animation-delay: 0.5s;
      }
      
      @keyframes animate3 {
        0% {
          right: -100%;
          height: 3px;
        }
        50%,
        100% {
          height: 2px;
          right: 100%;
        }
      }

      &:nth-child(4) {
        filter: hue-rotate(300deg);
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #3a86ff);
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;
      }
      @keyframes animate4 {
        0% {
          bottom: -100%;
        }
        50%,
        100% {
          bottom: 100%;
        }
      }
    }
  }
}



</style>

