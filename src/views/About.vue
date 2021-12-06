<template>
    <div>      
        <section class="section section-lg" style="background-image: url('img/brand/about_bg.jpg'); background-repeat: no-repeat; background-size: cover; ">
        <!-- <section class="section section-lg"> -->
            <div class="container-fluid">
               
            
                <div class="container-inner">
                    <div class="main-content">
                    <div class="main-headings" id="main-headings-js">
                    <p id="by-line" style="font-size: 1.6em">What MetaWild Is All About</p>

                    <div class="heading">
                        <h3 id="heading1">The Wild Is</h3>
                        <h3 id="heading2">Coming To</h3>
                        <h1 id="heading3">Metaverse</h1>
                    </div>

                    <div class="shxcaort-bio">
                        <p  style="font-size: 1.3em">
                            MetaWild token focuses on wildlife conservation and protection of not only rare species but all wildlife globally.
                        </p>
                
                    </div>

                    <!-- <a href="#" class="read-more" v-on:click="readMore()" v-if="readmore == 0">Read More <i class="ni ni-bold-right" style="margin-left: 2px;margin-top: -20%"></i></a> -->
                 
                    <!-- <a href="#" class="link btn" >Close <i class="ni ni-bold-right" style="margin-left: 2px;margin-top: -20%"></i></a> -->
                    <a href="#"  class="read-more" v-on:click="readMore()" v-if="readmore == 0">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    <i class="ni ni-user-run" style="margin-right: 8px"></i> Read More
                    </a>
                    
                    </div>
                    <br>
                    <div class="more-info " id="more-info-js">
                        
                        <h4 style="color: #fff; font-size: 1.6em">More About Us</h4>

                        <p>
                            MetaWild's vision is to make people money safely and securely 
                            while conserving our wildlife more so the rare species that are 
                            endangered by the current prevailing environmental hazards.
                        </p>
                    </div>
                    
                    </div>

                    <div class="image-wrapper">
                    <div class="image-container">
                    <img class="image" src="img/crypto-icons/isolated svg/AugmentedReality_16.svg" alt="AugmentedReality_16">
                    </div>
                </div>
               
                </div>
                </div>
        </section>
        
 </div>
   
</template>

<script>



export default {
  name: "about",
  components: {},
    data: function () {
    return {
      readmore: 0
    }
    },
  methods: {
      readMore: function () {
        var expandInfo = document.getElementById("more-info-js");
        var mainHeadings = document.getElementById("main-headings-js");

        this.readmore = 1;

        
        mainHeadings.style.transform = "scale(0.7)";
        expandInfo.style.height = "350px";
      } 
  }
};
</script>


<style lang="scss" scoped>
/*  read more button */

.read-more {
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
//Font
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

//Variables
$mobile-breakpoint: 350px;
$large-mobile-breakpoint: 530px;
$tablet-breakpoint: 700px;
$desktop-breakpoint: 1200px;


//Mixins 
//Centering Mixins
@mixin horizontal-center {
  margin-left: auto;
  margin-right: auto;
}

@mixin vertical-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}


//Media Query mixins
@mixin mobile {
  @media (min-width: #{$mobile-breakpoint}) and (max-width: #{$large-mobile-breakpoint - 1}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$large-mobile-breakpoint}) and (max-width: #{$tablet-breakpoint - 1}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$tablet-breakpoint}) and (max-width: #{$desktop-breakpoint}) {
    @content;
  }
}

//Animations
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in {
   0% {
    top: -300px;
  }
  100% {
    top: 0;
  }
}

@keyframes scaleDown {
    0% {
    transform: scale(1);
  }
   10% {
    transform: scale(0.7);
  }
   95% {
    transform: scale(0.7);
  }
   100% {
    transform: scale(1);
  }
}

@keyframes reveal-info {
  0% {
    height: 0;
  }
  5% {
    height: 350px;
  }
  95% {
    height: 350px;
  }
  100% {
    height: 0;
  }
}

.container-fluid {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 750px;
  color: #fff;
  background-color: rgba(0,0,0,.3);
  font-size: 14px;
  font-family: "Jura", sans-serif;
  .container-inner { 
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   position: relative;
   animation: fade-in 1.5s ease, slide-in 1.2s ease;
   -webkit-animation: fade-in 1.5s ease, slide-in 1.2s ease;
    .main-content {
      flex-basis: 50%;
      order: 1;
      align-self: center;
      display: flex;
      flex-direction: column;
      .main-headings { 
        width: 100%;
        align-self: center;
        display: flex;
        flex-direction: column;
        animation: scaleDown 6s ease 2s;
       -webkit-animation: scaleDown 6s ease 2s;
        #by-line {
          width: 60%;
          padding-bottom: 1px;     
          padding-left: 3px;
          margin-left: 15px;
          font-size: 85%;
          border-bottom: 1px solid #fff;             
          font-style: italic;
        }
        .heading {
         // align-self: flex-end;
           margin-top: 20px;
           margin-left: 80px;
          #heading1, #heading2, #heading3 {
            margin: 0;
            margin-top: -20px;
             color: #cacfaf;
          }
          #heading1, #heading2 {
            font-size: 500%;
            font-weight:normal;
            letter-spacing: -2px;
          }
          #heading1 {
            margin-left: 50px;
            }
          #heading2 {
            margin-left: 150px;
          }
          #heading3 {
            // font-family: 'Comforter', cursive;
            margin-top: -45px;
            font-size: 800%;
            font-weight: 800;
            letter-spacing: 2px;
           
            }
        }
        .short-bio {
          width: 60%;
          margin-top: -30px;
          margin-left: 90px;
          font-style: italic;
          font-size: 105%;
        }
        a {
         // width: 72%;
          margin-left: 92px;
         // margin-right: auto;
          align-self: flex-start;
          font-weight: bold;
          font-size: 120%;
          font-family: helvetica;
          text-decoration: none;
          color: #cacfaf;
          &:hover {
            text-decoration: underline;
          }
        }  
      }  
       .more-info {
          margin-top: -70px;
          width: 50%;
          height: 0;
          margin-left: auto;
          margin-right: auto; 
          align-self: flex-start;
          overflow: hidden;
          animation: reveal-info 4s ease 3s;
         -webkit-animation: reveal-info 4s ease 3s;
       }
    }
    .image-wrapper {
      flex-basis: 50%; 
      order: 2;
      //background-color was #8D6E63
      .image-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        animation: scaleDown 6s ease 2s ;
       -webkit-animation: scaleDown 6s ease 2s;
        img {
          width: 100%;
          height: auto;
          position: relative;
         }
        }
      }     
   }
}



//Media Query for mobile devices 
@include mobile {
   * {
    animation-name: none !important;
  }
  .container {
    width: 90%;
    height: 700px;
    @include horizontal-center;
    font-size: 5px;
    margin-bottom: 20px;
  }
  .container-inner {
    flex-direction: column !important;
    justify-content: center !important;
  }
  .main-content, .image-wrapper {
    flex-basis: 100% !important;
  }
  .main-content {
    order: 2 !important;
    outline: 1px solid red;
    margin: 0 50px;
  }
  .image-wrapper {
    order: 1 !important;
  }
  .heading {
    margin-left: 55px !important;
  }
  #heading1, #heading2 {
   margin: 0;
   margin-top: -5px !important;
    }
  #heading2 {
    margin-left: 100px !important;
  }
  #heading3 {
    margin-top: -20px !important;
  }
  .short-bio {
    margin-top: -10px !important;
    margin-left: 60px !important;
  }
   .more-info {
    height: 150px !important;
    width: 60% !important;
    margin: 0 !important;
    align-self: flex-start !important;
    margin-top: 0px !important;
    margin-left: 60px !important;
    //text-align: justify;
    font-size: 8px;
  }
  .link {
    display: none;
  }
  .image-wrapper {
    order: 1 !important;    
    width: 100%;
    height: 100px !important;
    justify-content: center !important;
  }
  .image-container {
    width: 100% !important;
    height: 400px;    
    @include horizontal-center;
    @include vertical-center;
  }
  img {
    width: 80% !important;
    height: auto !important;
    top: -20px;
    @include horizontal-center;
  }
}


//Media Query for tablet devices 

@include tablet {
  * {
    animation-name: none !important;
  }
  .container {
    width: 90%;
    height: 900px;
    @include horizontal-center;
    font-size: 8px;
  }
  .container-inner {
    flex-direction: column !important;
    justify-content: center !important;
  }
  .main-content, .image-wrapper {
    flex-basis: 100% !important;
  }
  .main-content {    
    width: 80%;
    order: 2 !important;    
    align-self: center !important;
  }
  .main-headings {
    width: 100%;
    margin-top: 20px; 
    @include horizontal-center;
  }  
  .heading {
    margin-left: 55px !important;
  }
  #heading1, #heading2 {
    margin: 0;
    margin-top: -15px !important;
    }
  #heading3 {
    margin-top: -30px !important;
  }
  .short-bio {
    margin-top: -20px !important;
    margin-left: 60px !important;
  }
  .link {
    display: none;
  }
  .more-info {
    height: 150px !important;
    width: 60% !important;
    margin: 0 !important;
    align-self: flex-start !important;
    margin-top: 0px !important;
    margin-left: 60px !important;
    text-align: justify;
  }
  .image-wrapper {
    order: 1 !important;    
    width: 100%;
    height: 400px;
    justify-content: center !important;
  }
  .image-container {
    width: 100% !important;
    height: 400px;    
    @include horizontal-center;
  }
  img {
    width: 80% !important;
    height: auto !important;
    top: -20px;
    @include horizontal-center;
  }
}

/*

@include tablet {
  .container {
    width: 100%;
    height: auto;
    font-size: 7px;
  }
  #heading3 {
    margin-top: -35px !important;
  }
  .link {
    margin-left: 30px;
  }
  .more-info {
    margin-top: -40px !important;
  }
}
*/
//Media query for desktop devices 

@include desktop {
  .container {
    width: 100%;
    height: auto;
    font-size: 9px;
  }
  #heading3 {
    margin-top: -35px !important;
  }
  .link {
    margin-left: 30px;
  }
  .more-info {
    margin-top: -40px !important;
  }
}
</style>