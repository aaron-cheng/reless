/* ************************************************
**************************************************

Website Name: BorderX Lab
Website URL: borderxlab.com
Website Author: Aaron Cheng
Author URL: chengfolio.com
Copyright 2014. All Rights Reserved.

************************************************ */

/* ***********************************************
*************************************************
0. General -------------------- All Files
*************************************************
*********************************************** */

ReactDOM.render(
		<nav class="container">
			<div class="row">
				<div class="col-md-2 col-xs-10">
					<div class="nav__logo">
						<a href="/"><img src="img/icon_logo.png" class="img-responsive" alt="Reless"/></a>						
					</div>
				</div>
				<ul class="col-md-10 visible-md visible-lg">			
					<li class="pull-right">
						<a href="/contact.html">
							<p class="main_nav__txt txt--primary_on_dark pull-left" style="margin-left:40px;">Contact</p>
						</a>
					</li>									
					<li class="pull-right">
						<a href="/repad10pro.html">
							<img src="img/icon_repad10.png" class="img-responsive pull-left icon_repad" alt="RePad 10 Pro"/>
							<p class="main_nav__txt txt--primary_on_dark pull-left">RePad 10 Pro</p>
						</a>
					</li>	
					<li class="pull-right">
						<a href="/repad8.html">
							<img src="img/icon_repad8.png" class="img-responsive pull-left icon_repad" alt="RePad 8"/>
							<p class="main_nav__txt txt--primary_on_dark pull-left">RePad 8</p>
						</a>
					</li>	
					<li class="pull-right">
						<a href="/">
							<img src="img/icon_repad10.png" class="img-responsive pull-left icon_repad" alt="RecPad 10"/>
							<p class="main_nav__txt txt--primary_on_dark pull-left">RecPad 10</p>
						</a>
					</li>		
				</ul>

				<div class="btn__menu_expand col-xs-2 visible-xs visible-sm">
					<img src="img/icon_expand_menu.png" class="img-responsive pull-right" alt="Menu Button"/>
				</div>

				<div class="row nav__menu--mobile ">
					<ul class="col-xs-12">				
						<li class="pull-left margin--element_top_sm">
							<a href="/contact.html">
								<p class="main_nav__txt txt--primary_on_dark pull-left">Contact</p>
							</a>
						</li>	
						<li class="pull-left margin--element_top_sm">
							<a href="/repad10pro.html">
								<p class="main_nav__txt txt--primary_on_dark pull-left">RePad 10 Pro</p>
							</a>
						</li>	
						<li class="pull-left margin--element_top_sm">
							<a href="/repad8.html">
								<p class="main_nav__txt txt--primary_on_dark pull-left">RePad 8</p>
							</a>
						</li>	
						<li class="pull-left margin--element_top_sm">
							<a href="/">
								<p class="main_nav__txt txt--primary_on_dark pull-left">RecPad 10</p>
							</a>
						</li>			
					</ul>
				</div>
			</div>
		</nav>,
	document.getElementById('test')
);