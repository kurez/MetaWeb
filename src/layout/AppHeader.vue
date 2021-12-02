<template>
    <header class="header-global">
        <!-- <base-nav class="navbar-main" style="background-color: #000" expand>
            <a class="nav-link" href="#top" v-smooth-scroll>
                <img src="img/brand/metawild-light-transparent.png" alt="logo" >
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <router-link slot="brand" class="nav-link mr-lg-5" to="/">
                   
                    </router-link>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item"><router-link class="nav-link" to="/" v-smooth-scroll>Home</router-link></li>
               <li class="nav-item"><router-link class="nav-link" to="/metawild" v-smooth-scroll>MetaWild</router-link></li>
               <li class="nav-item"><router-link class="nav-link" to="/tokenomics" v-smooth-scroll>Token</router-link></li>
               <li class="nav-item"><a class="nav-link" href="files/metawild-whitepaper.pdf" download>Whitepaper</a></li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">


                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href=""
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Connect with us on LinkedIn">
                        <i class="fa fa-linkedin"></i>
                        <span class="nav-link-inner--text d-lg-none">LinkedIn</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Join us on telegram">
                        <i class="fa fa-telegram"></i>
                        <span class="nav-link-inner--text d-lg-none">Telegram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
              
            </ul>
        </base-nav> -->
    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	    <label for="menu-icon"></label>
        <nav class="nav"> 	
          	<br><br><br>
            

                    <div class="container" style="margin-top: 21%">
                        <div class="row">
                            <div class="col-lg-12">
                               
                                <div class="hexagon-menu clear">
                                    <div class="row">
                                        <div class="col-lg-3 col-xs-6">
                                    <div class="hexagon-item">
                                      
                                        <div class="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        
                                        <router-link to="/" class="hex-content">
                                         <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
                                            <span class="hex-content-inner">
                                                <span class="icon">
                                                    <i class="ni ni-planet"></i>
                                                </span>
                                                <span class="title">Home</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fff"></path></svg>
                                        </router-link>
                                    </div>
                                    </div>
                                     <div class="col-lg-3 col-xs-6">
                                    <div class="hexagon-item">
                                        <div class="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                         <router-link to="/metawild" class="hex-content">
                                            <span class="hex-content-inner">
                                                <span class="icon">
                                                    <i class="ni ni-user-run"></i>
                                                </span>
                                                <span class="title">About</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fff"></path></svg>
                                         </router-link>
                                    </div>
                                     </div>
                                    
                                     <div class="col-lg-3 col-xs-6">
                                    <div class="hexagon-item">
                                        <div class="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                         <router-link to="/tokenomics" class="hex-content">
                                            <span class="hex-content-inner">
                                                <span class="icon">
                                                    <i class="ni ni-money-coins"></i>
                                                </span>
                                                <span class="title">Token</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fff"></path></svg>
                                         </router-link>    
                                    </div>
                                     </div>
                                      <div class="col-lg-3 col-xs-6">
                                    <div class="hexagon-item">
                                        <div class="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                       <a class="hex-content" href="files/metawild-whitepaper.pdf" download>
                                            <span class="hex-content-inner">
                                                <span class="icon" style="margin-left: 25px">
                                                    <i class="ni ni-collection"></i>
                                                </span>
                                                <span class="title">Whitepaper</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fff"></path></svg>
                                       </a>
                                    </div>
                                      </div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                        <!--  -->
                    </div>
        </nav>
    </header>
</template>
<script>

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});

import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style lang="scss" scoped>

body {
    color: #fff;
}

/*------------------------------------------------
    Home Page
-------------------------------------------------*/

.hexagon-item:first-child {
    margin-left: 0;
}


/* End of container */
.hexagon-item {
  cursor: pointer;
  width: 200px;
  height: 173.20508px;
  float: left;
//   margin-left: -29px;
  z-index: 0;
  position: relative;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg); }
  .hexagon-item:first-child {
    margin-left: 0; }
  .hexagon-item:hover {
    z-index: 1; }
    .hexagon-item:hover .hex-item:last-child {
      opacity: 1;
      -webkit-transform: scale(1.3);
      -moz-transform: scale(1.3);
      -ms-transform: scale(1.3);
      -o-transform: scale(1.3);
      transform: scale(1.3); }
    .hexagon-item:hover .hex-item:first-child {
      opacity: 1;
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2); }
      .hexagon-item:hover .hex-item:first-child div:before,
      .hexagon-item:hover .hex-item:first-child div:after {
        height: 5px; }
    .hexagon-item:hover .hex-item div::before,
    .hexagon-item:hover .hex-item div::after {
      background-color: #cacfaf; }
    .hexagon-item:hover .hex-content svg {
      -webkit-transform: scale(0.97);
      -moz-transform: scale(0.97);
      -ms-transform: scale(0.97);
      -o-transform: scale(0.97);
      transform: scale(0.97); }

.page-home .hexagon-item:nth-last-child(1),
.page-home .hexagon-item:nth-last-child(2),
.page-home .hexagon-item:nth-last-child(3) {
  -webkit-transform: rotate(30deg) translate(87px, -80px);
  -moz-transform: rotate(30deg) translate(87px, -80px);
  -ms-transform: rotate(30deg) translate(87px, -80px);
  -o-transform: rotate(30deg) translate(87px, -80px);
  transform: rotate(30deg) translate(87px, -80px); }

.hex-item {
  position: absolute;
  top: 0;
  left: 50px;
  width: 100px;
  height: 173.20508px; }
  .hex-item:first-child {
    z-index: 0;
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
    -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    -moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    -o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }
  .hex-item:last-child {
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1; }
  .hex-item div {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    width: 100px;
    height: 173.20508px;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center; }
    .hex-item div::before, .hex-item div::after {
      background-color: #fff;
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
      -moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
      -o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s; }
    .hex-item div:before {
      top: 0; }
    .hex-item div:after {
      bottom: 0; }
    .hex-item div:nth-child(1) {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg); }
    .hex-item div:nth-child(2) {
      -webkit-transform: rotate(60deg);
      -moz-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
      -o-transform: rotate(60deg);
      transform: rotate(60deg); }
    .hex-item div:nth-child(3) {
      -webkit-transform: rotate(120deg);
      -moz-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
      -o-transform: rotate(120deg);
      transform: rotate(120deg); }

.hex-content {
  color: #000;
  display: block;
  height: 180px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  transform: rotate(-30deg);
  width: 156px; }
  .hex-content .hex-content-inner {
    left: 50%;
    margin: -3px 0 0 2px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); }
  .hex-content .icon {
    display: block;
    font-size: 36px;
    line-height: 30px;
    margin-bottom: 11px; }
  .hex-content .title {
    display: block;
    font-family: "Jura", sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase; }
  .hex-content svg {
    left: -7px;
    background-color: transparent;
    position: absolute;
    top: -13px;
    transform: scale(0.87);
    z-index: -1;
    -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    -moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    -o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s; }
  .hex-content:hover {
    color: #cacfaf ; }

.page-home .hexagon-item:nth-last-child(1), .page-home .hexagon-item:nth-last-child(2), .page-home .hexagon-item:nth-last-child(3) {
    -webkit-transform: rotate(30deg) translate(87px, -80px);
    -moz-transform: rotate(30deg) translate(87px, -80px);
    -ms-transform: rotate(30deg) translate(87px, -80px);
    -o-transform: rotate(30deg) translate(87px, -80px);
    transform: rotate(30deg) translate(87px, -80px);
}
/*------------------------------------------------
    Welcome Page
-------------------------------------------------*/

@media (min-width: 1200px)
{
.col-lg-offset-2 {
    margin-left: 16.66666667%;
}
}

@media (min-width: 1200px)
{
.col-lg-8 {
    width: 66.66666667%;
}
}

.hexagon-item:first-child {
    margin-left: 0;
}

.pt-table.desktop-768 .pt-tablecell {
    padding-bottom: 110px;
    padding-top: 60px;
}



.hexagon-item:hover .icon i
{
  color:#cacfaf ;
  transition:0.6s;
  
}


.hexagon-item:hover .title
{
  -webkit-animation: focus-in-contract 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: focus-in-contract 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
/***************************/

@-webkit-keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}





@media only screen and (max-width: 767px)
{
.hexagon-item {
    float: none;
    margin: 0 auto 50px;
}
  .hexagon-item:first-child {
    margin-left: auto;
}
  
  .page-home .hexagon-item:nth-last-child(1), .page-home .hexagon-item:nth-last-child(2), .page-home .hexagon-item:nth-last-child(3) {
    -webkit-transform: rotate(30deg) translate(0px, 0px);
    -moz-transform: rotate(30deg) translate(0px, 0px);
    -ms-transform: rotate(30deg) translate(0px, 0px);
    -o-transform: rotate(30deg) translate(0px, 0px);
    transform: rotate(30deg) translate(0px, 0px);
}
  
}



/* Please ❤ this if you like it! */


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');


.section-center{
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 6;
  text-align: center;
  transform: translateY(-50%);
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.menu-icon:checked + label,
.menu-icon:not(:checked) + label{
  position: fixed;
  top: 63px;
  right: 75px;
  display: block;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  z-index: 10;
}
.menu-icon:checked + label:before,
.menu-icon:not(:checked) + label:before{
  position: absolute;
  content: '';
  display: block;
  width: 30px;
  height: 20px;
  z-index: 20;
  top: 0;
  left: 0;
  border-top: 2px solid #cacfaf ;
  border-bottom: 2px solid #cacfaf ;
  transition: border-width 100ms 1500ms ease, 
              top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
              height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), 
              background-color 200ms ease,
              transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after,
.menu-icon:not(:checked) + label:after{
  position: absolute;
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  z-index: 20;
  top: 10px;
  right: 4px;
  background-color: #cacfaf ;
  margin-top: -1px;
  transition: width 100ms 1750ms ease, 
              right 100ms 1750ms ease,
              margin-top 100ms ease, 
              transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:before{
  top: 10px;
  transform: rotate(45deg);
  height: 2px;
  background-color: #cacfaf ;
  border-width: 0;
  transition: border-width 100ms 340ms ease, 
              top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
              height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), 
              background-color 200ms 500ms ease,
              transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after{
  width: 30px;
  margin-top: 0;
  right: 0;
  transform: rotate(-45deg);
  transition: width 100ms ease,
              right 100ms ease,  
              margin-top 100ms 500ms ease, 
              transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav{
  position: fixed;
  top: 33px;
  right: 50px;
  display: block;
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
  z-index: 9;
  overflow: hidden;
  box-shadow: 0 8px 30px 0 rgba(168, 168, 168, 0.3);
  background-color: rgba(0, 0, 0, 0.7);
  animation: border-transform 7s linear infinite;
  transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),  
              right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
              transform 250ms 1100ms ease,
              width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
              height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}
@keyframes border-transform{
    0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
}

.menu-icon:checked ~ .nav {
  animation-play-state: paused;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 200%;
  height: 200%;
  transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),  
              right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
              transform 250ms 700ms ease,
              width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
              height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul{
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 6;
  text-align: center;
  transform: translateY(-50%);
  list-style: none;
}
.nav ul li{
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  margin: 10px 0;
  text-align: center;
  list-style: none;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: all 250ms linear;
}
.nav ul li:nth-child(1){
  transition-delay: 200ms;
}
.nav ul li:nth-child(2){
  transition-delay: 150ms;
}
.nav ul li:nth-child(3){
  transition-delay: 100ms;
}
.nav ul li:nth-child(4){
  transition-delay: 50ms;
}
.nav ul li a{
  font-family: 'Montserrat', sans-serif;
  font-size: 9vh;
  text-transform: uppercase;
  line-height: 1.2;
  font-weight: 800;
  display: inline-block;
  position: relative;
  color: #ececee;
  transition: all 250ms linear;
}
.nav ul li a:hover{
  text-decoration: none;
  color: #ffeba7;
}
.nav ul li a:after{
  display: block;
  position: absolute;
  top: 50%;
  content: '';
  height: 2vh;
  margin-top: -1vh;
  width: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
  transition: width 250ms linear;
}
.nav ul li a:hover:after{
  width: 100%;
}


.menu-icon:checked ~ .nav  ul li {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 350ms ease,
              transform 250ms ease;
}
.menu-icon:checked ~ .nav ul li:nth-child(1){
  transition-delay: 1400ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(2){
  transition-delay: 1480ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(3){
  transition-delay: 1560ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(4){
  transition-delay: 1640ms;
}



.logo {
	position: absolute;
	top: 60px;
	left: 50px;
	display: block;
	z-index: 11;
	transition: all 250ms linear;
}
.logo img {
	height: 26px;
	width: auto;
	display: block;
}



@media screen and (max-width: 991px) {
  .menu-icon:checked + label,
  .menu-icon:not(:checked) + label{
    right: 55px;
  }
  .logo {
    left: 30px;
  }
  .nav{
    right: 30px;
  }
  h1{
    font-size: 9vw;
    -webkit-text-stroke: 2px transparent;
    text-stroke: 2px transparent;
    -webkit-text-fill-color: #ffeba7;
    text-fill-color: #ffeba7;
    color: #ffeba7;
  }
  .nav ul li a{
    font-size: 8vh;
  }
}

.info {
  width: 100%;
  background: #fff;
}
.info i {
  font-size: 20px;
  background: #ffc451;
  color: #151515;
  float: left;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
}
.info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #151515;
}
.info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #484848;
}
</style>
