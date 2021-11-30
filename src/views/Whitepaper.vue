<template>
   
        <!-- ======= About Section ======= -->
    <section id="whitepaper" class="whitepaper" style="margin-top: 15%">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <p class="popout">
                <span>W</span>
                <span>H</span>
                <span>I</span>
                <span>T</span>
                <span>E</span><br>
                <span>P</span>
                <span>A</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
                <!-- <span>E</span> -->
                
            </p>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>LEARN MORE ABOUT METAWILD.</h3><br>
            <p class="fst-italic" style="font-size: 1.5em;">
              Get a copy of our authoritative guide to get informed concisely about complex issues
               and the issuing body's philosophy on the matter. It is meant to help you understand an issue, solve a problem, or make a decision.
            </p>
            

          </div>
        </div>

      </div>
    </section><!-- End About Section -->
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>


/*--------------------------------------------------------------
# whitepaper
--------------------------------------------------------------*/
p{
    color: #fff;
    
}
.whitepaper .content h3 {
  font-weight: 700;
  color: #fff;
  font-size: 30px;
  font-family: "Jura", sans-serif;
}
.whitepaper .content ul {
  list-style: none;
  color: #fff;
  padding: 0;
}
.whitepaper .content ul li {
  padding: 0 0 8px 26px;
  position: relative;
}
.whitepaper .content ul i {
  position: absolute;
  font-size: 20px;
  left: 0;
  top: -3px;
  color: #ffc451;
}
.whitepaper .content p:last-child {
  margin-bottom: 0;
}

$t: 1s;
$d: 0.08em;
$n: 3;
$e: cubic-bezier(0.860, 0.000, 0.070, 1.000); 
$front: black;
$back: #fff;

.popout{
	font-family: Jura, sans-serif;
	font-weight: 900;
	font-size: 80px;
    letter-spacing: 14px;
	padding: 80px;

	@keyframes ani{
		0%{
			transform: translate3d(0,0,0);
			text-shadow: 0em 0em 0 $back;
			color: $front;
		}
		30%{
			transform: translate3d(0,0,0);
			text-shadow: 0em 0em 0 $back;
			color: $front;
		}
		70%{
			transform: translate3d($d,-$d,0);
			text-shadow: -$d $d $back;
			color: $front;
		}
		100%{
			transform: translate3d($d,-$d,0);
			text-shadow: -$d $d $back;
			color: $front;
		}
	}
	span{
		position: relative;
		display: inline-block;
		animation: ani $t infinite alternate $e;
		@for $i from 1 through $n{
			&:nth-last-child(#{$i}n){ animation-delay: -$t*$i/$n/2;}
		}
	}
	
}
</style>
