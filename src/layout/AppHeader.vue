<template>
    <header class="header-global">
        <base-nav class="navbar-main" style="background-color: #000" expand>
            <a class="nav-link" href="#top" v-smooth-scroll>
             <!-- <span style="font-size: 25px"> META <strong style="color: #cacfaf">WILD</strong> </span> -->
                <img src="img/brand/metawild-light-transparent.png" alt="logo" >
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <router-link slot="brand" class="nav-link mr-lg-5" to="/">
                    <!-- <span style="font-size: 25px"> META <strong style="color: #cacfaf">WILD</strong> </span> -->
                        <!-- <img src="img/brand/logo_light.png" alt="logo"> -->
                    </router-link>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item"><router-link class="nav-link" to="/" v-smooth-scroll>Home</router-link></li>
               <li class="nav-item"><router-link class="nav-link" to="/metawild" v-smooth-scroll>MetaWild</router-link></li>
               <li class="nav-item"><router-link class="nav-link" to="/tokenomics" v-smooth-scroll>Token</router-link></li>
               <!-- <li class="nav-item"><router-link class="nav-link" to="" v-smooth-scroll>Static Redistribution</router-link></li> -->
               <li class="nav-item"><router-link class="nav-link" to="whitepaper" v-smooth-scroll>Whitepaper</router-link></li>
               <!-- <li class="nav-item"><a class="nav-link" href="#contact" v-smooth-scroll>Contact</a></li> -->
               <!-- <li class="content__item"><a href="#" class="link link--helike"><span>Discover</span></a></li> -->
                
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
        </base-nav>
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
<style>
</style>
