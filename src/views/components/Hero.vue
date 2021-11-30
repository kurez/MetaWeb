<template>
  <!-- Page Content-->
    <header>
     

      <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
      <div class="overlay">
         <particles-bg color="#ffffff" num=200 type="cobweb" :bg="true" />
      </div>

      <!-- The HTML5 video element that will create the background video on the header -->
      <!-- <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="https://youtube.com/embed/tz8Puc4W5BM" type="video/mp4">
      </video> -->
      <iframe frameborder="0" height="100%" width="100%" src="https://youtube.com/embed/tz8Puc4W5BM?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1"></iframe>

      <!-- The header content -->
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            
            <div class="row contents">                     
                <div class="home-content-left">

                  <div class="animated-title">
                    <div class="text-top">
                      <div>
                        <img src="img/brand/metawild-light-transparent.png" alt="logo" >
                        <span>Explore The Wild</span>
                      </div>
                    </div>
                    <div class="text-bottom">
                      <div><span>Decentralized.Frictionless.Yield-Generation Utility.Wildlife Conservation Token.</span></div>
                    </div>
                  </div>

                    <!-- <div class="buttons" data-aos="fade-up">
                        <a href="#download" class="smoothscroll button stroke">
                            <span class="icon-circle-down" aria-hidden="true"></span>
                            Download App
                        </a>
                        <a href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=39b54a" data-lity class="button stroke">
                            <span class="icon-play" aria-hidden="true"></span>
                            Watch Video
                        </a>
                    </div>                                          -->

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

header {
  position: relative;
  background-color: black;
  height: 100%;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
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


.home-content {
  display: table-cell;
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}

.home-content .contents {
  position: relative;
}

.home-content-left {
  padding: 15rem 0 12rem 40px;
  position: relative;
  width: 50%;
}

.home-content-left h3 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.6rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: .2rem;
  margin-bottom: 2.4rem;
}

.home-content-left h1 {
  font-family: "Jura", sans-serif;
  font-size: 3.2rem;
  letter-spacing: -.05rem;
  line-height: 1.269;
  color: #ffffff;
  margin-bottom: 9rem;
}

.home-content-left .button.stroke {
  color: #ffffff !important;
  border-color: #ffffff;
  margin: 0 .6rem 1.2rem;
  padding: 0 2.2rem;
  min-width: 188px;
}

.home-content-left .button.stroke span[class*="icon"] {
  margin-right: 5px;
  position: relative;
  top: 2px;
}

.home-content-left .button.stroke:hover,
.home-content-left .button.stroke:focus {
  background-color: white !important;
  color: #000000 !important;
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
  width: 90vmin;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: 9vmin;
  padding: 2vmin 0;
  position: absolute;
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid #fff;
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
  font-size: 2vmin;
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}




</style>

