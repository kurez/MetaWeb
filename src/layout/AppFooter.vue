<template>
    <!-- FOOTER -->
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container-fluid py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                     <img src="img/brand/metawild-dark-transparent.png" alt="footer_logo" class="mb-3 mt-5">
                    <p class="small text-muted">Empowerment through an appreciating decentralized yield-generating cryptocurrency.</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#top" v-smooth-scroll>METAWILD</a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#top" v-smooth-scroll class="footer-link">Home</a></li>
                        <li><a href="#about" v-smooth-scroll class="footer-link">About</a></li>
                        <li><a href="#tokenomics" v-smooth-scroll class="footer-link">Token</a></li>
                        <li><a href="#whitepaper" v-smooth-scroll class="footer-link">Whitepaper</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#roadmap" v-smooth-scroll class="footer-link">Roadmap</a></li>
                        <li><a href="#contact" v-smooth-scroll class="footer-link">Contact us</a></li>
                         <li><a href="#faq" v-smooth-scroll class="footer-link">FAQ</a></li>
                        <li><a href="#terms" v-smooth-scroll class="footer-link">Terms and conditions</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 mb-3 mt-5">
            <h4>KEEP IN TOUCH</h4>
            <ul class="social-network social-circle">
             <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
             <li><a href="#" class="icoTelegram" title="Telegram"><i class="fa fa-telegram"></i></a></li>
             <li><a href="#" class="icoGithub" title="Github"><i class="fa fa-github"></i></a></li>
            </ul>				
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
 .footer-link {
    color: rgb(122, 122, 122)
  }
.footer-link:hover {
    color: #212529;
  }

/*SOCİAL İCONS*/

/* footer social icons */

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}


/* footer social icons */

.social-network a.icoTwitter:hover {
  background-color: #00acee;
}
.social-network a.icoTelegram:hover {
  background-color: #0088CC;
}

.social-network a.icoGithub:hover {
  background-color:  #171515 ;
}

.social-network a.icoLinkedin:hover {
  background-color: #007bb7;
}

.social-network a.icoGithub:hover i,
.social-network a.icoTelegram:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoLinkedin:hover i {
  color: #fff;
}

.social-network a.socialIcon:hover,
.socialHoverClass {
  color: #44BCDD;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 15px;
}

.social-circle li i {
  margin: 0;
  line-height: 30px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}

.social-circle i {
  color: #595959;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}

.social-network a {
  background-color: #F9F9F9;
}

</style>
