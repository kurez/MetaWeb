<template>
    <div>     
        <section class="section section-lg" style="background-image: url('img/brand/about_bg.jpg'); background-repeat: no-repeat; background-size: cover; ">
        <!-- <section class="section section-lg"> -->
            <div class="container">
                  <!-- ======= token Section ======= -->
              <section id="token" class="d-flex align-items-center justify-content-center">
                <div class="container" data-aos="fade-up">

                  <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div class="col-xl-6 col-lg-8">
                      <h1>ENJOY METAWILD THE NFT WAY<span style="color: #cacfaf">.</span></h1>
                      <h2>The Wild Is Coming To The Metaverse</h2>
                    </div>
                  </div>

                  <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                    <div class="col-xl-4 col-lg-4 col-md-4">
                      <router-link to="/metawild" class="purchase-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      <i class="ni ni-money-coins" style="margin-right: 8px"></i> Purchase
                      </router-link>
                    </div>
                  </div>

                </div>
              </section><!-- End token -->
            </div>
        </section>
    </div>
   
</template>

<script>



export default {
  name: "token",
  components: {}
};
</script>

<style lang="scss" scoped>

/*--------------------------------------------------------------
# token Section
--------------------------------------------------------------*/
#token {
  width: 100%;
  height: 100vh;
  // background: url("../img/token-bg.jpg") top center;
  background-size: cover;
  position: relative;
}
#token:before {
  content: "";
  // background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
#token .container {
  position: relative;
  // padding-top: -74px;
  top: -70px;
  text-align: center;
}
#token h1 {
  margin: 0;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  color: #fff;
  font-family: "Jura", sans-serif;
}
#token h1 span {
  color: #cacfaf;
}
#token h2 {
  color: rgba(255, 255, 255, 0.9);
  margin: 10px 0 0 0;
  font-size: 24px;
}
#token .icon-box {
  padding: 30px 20px;
  transition: ease-in-out 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 100%;
  text-align: center;
}
#token .icon-box i {
  font-size: 32px;
  line-height: 1;
  color: #cacfaf;
}
#token .icon-box h3 {
  font-weight: 700;
  margin: 10px 0 0 0;
  padding: 0;
  line-height: 1;
  font-size: 20px;
  line-height: 26px;
}
#token .icon-box h3 a {
  color: #fff;
  transition: ease-in-out 0.3s;
}
#token .icon-box h3:hover {
  color: #cacfaf;
}
#token .icon-box:hover {
  border-color: #cacfaf;
}
@media (min-width: 1024px) {
  #token {
    background-attachment: fixed;
  }
}
@media (max-width: 768px) {
  #token {
    height: auto;
  }
  #token h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #token h2 {
    font-size: 20px;
    line-height: 24px;
  }
}

/*  purchase button */

.purchase-btn {
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
  // margin-top: 200px;
  font-family: "Jura", sans-serif;
  filter: hue-rotate(0deg);
  border: 1px solid #fff;
  transition: all 0.1s linear;

  &:hover {
    border: 1px solid transparent;
    color: #cacfaf;
    text-decoration: none;
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