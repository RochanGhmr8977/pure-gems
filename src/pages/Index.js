import React, { Fragment } from 'react';

function Index(){
    return(
        <Fragment>
            <header id="header">
		
		<h1 className="sr-only">Pure Gems | Home page</h1>
		
		<nav id="main-navigation" className="navbar navbar-default navbar-fixed-top">
		
		  <h1 className="sr-only">Main navigation</h1>

		  <div className="container">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="sr-only">Toggle navigation</span>
		      </button>
		    {/*   <a id="brand-mobile" className="navbar-brand navbar-brand-center smoothScroll" href="#home">
		        <img alt="PureGemsWlogo" src="assests/img/svg/PureGemsWlogo.png"/>
		      </a> */}
		    </div>

		    <div className="collapse navbar-collapse" id="main-navbar">
			  <ul className="nav navbar-nav">
		        <li className="active"><a className="smoothScroll" href="#home">Home <span className="sr-only">(current)</span></a></li>
		        <li><a className="smoothScroll" href="#services">Services</a></li>
		        <li><a className="smoothScroll" href="#portfolio">Portfolio</a></li>
		      	<li id="brand-desktop">
					<a className="navbar-brand smoothScroll" href="#home">
						<img alt="Molly" src="assests/img/svg/PureGemsWlogo.png"/>
					</a>
		      	</li>
		        <li><a className="smoothScroll" href="about">About us</a></li>
		        <li><a className="smoothScroll" href="blog">Blog</a></li>
		        <li><a className="smoothScroll" href="contact">Contact</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>

	</header>

	<main>

		<section id="home">

			
			<h1 className="sr-only">Home</h1>

			<div id="carousel-hero" className="carousel slide" data-ride="carousel">

			
				<ol className="carousel-indicators">
					<li data-target="#carousel-hero" data-slide-to="0" className="active"></li>
					<li data-target="#carousel-hero" data-slide-to="1"></li>
					<li data-target="#carousel-hero" data-slide-to="2"></li>
				</ol>

			
				<div className="carousel-inner" role="listbox">
			
					<div className="item active">

						<div className="overlay"></div>

						<div className="carousel-caption">
										
							<span className="h4">Hello,we are <span className="text-yellow">Pure Gems</span>, and we create</span>

							<span className="h1">Products</span>

							<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

							<a href="#" className="btn btn-default white-yellow">Get Started</a>

						</div>

					</div> 
					<div className="item">
						<div className="overlay"></div>
						<div className="carousel-caption">					
							<span className="h4">Hello,we are <span className="text-yellow">Pure Gems</span>, and we Deliver</span>
							<span className="h1">Amazing Products</span>
							<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
							<a href="#" className="btn btn-default white-yellow">Get Started</a>
						</div>
					</div> 
					<div className="item">
						<div className="overlay"></div>
						<div className="carousel-caption">
							<span className="h4">Hello,we are <span className="text-yellow">Pure Gems</span>, and we Deliver</span>
							<span className="h1">Products</span>
							<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
							<a href="#" className="btn btn-default white-yellow">Get Started</a>

						</div>
					</div> 
				</div> 
				<a className="left carousel-control" href="#carousel-hero" role="button" data-slide="prev">
					<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="right carousel-control" href="#carousel-hero" role="button" data-slide="next">
					<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>

			</div> 

		</section>

		<section id="services">

			<div className="container">

				<div className="row">
					
					<div className="col-md-8 col-md-offset-2">

						<div className="title-content">
							
							<h2 className="section-title">Services</h2>

							<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

						</div>

					</div>

				</div>

				<div className="services-container">

					<div className="line"></div>

					<div className="row">
						
						<div className="col-md-3 col-sm-6">

							<div className="service">
								
								<figure>
									<img src="assests/img/svg/services/web_design.svg" alt="Web design services"/>
									<figcaption><h4 className="service-title">Our Services</h4></figcaption>
								</figure>

								<p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.</p>

							</div>

						</div>

						<div className="col-md-3 col-sm-6">

							<div className="service">
								
								<figure>
									<img src="assests/img/svg/services/graphic_design.svg" alt="Graphic design services"/>
									<figcaption><h4 className="service-title">Quality products</h4></figcaption>
								</figure>

								<p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.</p>

							</div>

						</div>

						<div className="col-md-3 col-sm-6">

							<div className="service">
								
								<figure>
									<img src="assests/img/svg/services/photography.svg" alt="Photography services"/>
									<figcaption><h4 className="service-title">Delivery Management</h4></figcaption>
								</figure>

								<p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.</p>

							</div>

						</div>

						<div className="col-md-3 col-sm-6">

							<div className="service">
								
								<figure>
									<img src="assests/img/svg/services/development.svg" alt="Development services"/>
									<figcaption><h4 className="service-title">Sales Growth </h4></figcaption>
								</figure>

								<p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.</p>

							</div>

						</div>

					</div> 

				</div> 
				
			</div> 

			<div className="we-make-section">

				<div className="overlay"></div>
				
				<div className="container">
					
					<div className="row reorder-sm">
						
						<div className="col-md-5">

							<div className="img-container">
								<img src="assests/img/svg/phones.svg" alt="Phones image"/>
							</div>
							
						</div> 

						<div className="col-md-7">

							<div className="features-container">

								<h3>We Create our own brand</h3>

								<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>

								<ul className="features-list">
									<li>Modern Household Products </li>
									<li>Service Oriented</li>
									<li>Multinational Customers</li>
									<li>Products for better life</li>
								</ul>

							</div> 
							
						</div>

					</div> 

				</div>

			</div> 

			<div className="services-cta-container">

				<a href="#" className="btn btn-default white-yellow">Get Started</a>

			</div>

		</section>

		<section id="portfolio">

			<div className="container">

				<div className="row">
					
					<div className="col-md-8 col-md-offset-2">

						<div className="title-content">
							
							<h2 className="section-title">Portfolio</h2>

							<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

						</div>

					</div>

				</div> 

				<div className="row">
					<nav id="portfolio-navigation" className="navbar">						
						<h1 className="sr-only">Portfolio navigation</h1>
						<ul className="nav navbar-nav">
							<li><button className="filter mixitup-control-active" type="button" data-mixitup-control data-filter="all">All</button></li>
							<li><button className="filter" type="button" data-mixitup-control data-filter=".web_design">Products</button></li>
							<li><button className="filter" type="button" data-mixitup-control data-filter=".graphic_design">Warehouse Storage</button></li>
							<li><button className="filter" type="button" data-mixitup-control data-filter=".photography">Customer satisfaction</button></li>
							<li><button className="filter" type="button" data-mixitup-control data-filter=".apps">Apps</button></li>
						</ul>

					</nav> 

				</div> 

				<div className="row">

				    <div id="portfolio-grid" className="portfolio-grid">
				    	
						<figure className="grid-item mix all graphic_design">
							<img src="assests/img/portfolio/placeholder_370_x_300.jpg" height="370" width="300" alt="Placeholder portfolio image"/>
						</figure>

						<figure className="grid-item mix all web_design">
							<img src="assests/img/portfolio/placeholder_370_x_3002.jpg" height="370" width="300"  alt="Placeholder portfolio image"/>
						</figure>

						<figure className="grid-item mix all apps">
							<img src="assests/img/portfolio/placeholder_370_x_3003.jpg" height="370" width="300"  alt="Placeholder portfolio image"/>
						</figure>

						<figure className="grid-item mix all photography">
							<img src="assests/img/portfolio/placeholder_370_x_300.jpg" height="370" width="300"  alt="Placeholder portfolio image"/>
						</figure>

						<figure className="grid-item mix all web_design">
							<img src="assests/img/portfolio/placeholder_370_x_300.jpg" height="370" width="300"  alt="Placeholder portfolio image"/>
						</figure>

						<figure className="grid-item mix all apps">
							<img src="assests/img/portfolio/placeholder_370_x_300.jpg" height="370" width="300"  alt="Placeholder portfolio image"/>
						</figure>

						<figure className="grid-item mix all graphic_design">
							<img src="assests/img/portfolio/placeholder_370_x_300.jpg"height="370" width="300"  alt="Placeholder portfolio image"/>
						</figure>

						<figure className="grid-item mix all web_design">
							<img src="assests/img/portfolio/placeholder_370_x_300.jpg" height="370" width="300"  alt="Placeholder portfolio image"/>
						</figure>

						<figure className="grid-item mix all photography">
							<img src="assests/img/portfolio/placeholder_370_x_300.jpg" height="370" width="300"  alt="Placeholder portfolio image"/>
						</figure>

						<figure className="gap"></figure>

				    </div>

				</div>

				<a href="#" className="btn btn-default yellow-white">Show More</a>

			</div> 
			<div className="video-section">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe width="560" height="315" src="https://www.youtube.com/embed/eL9jfhQVWE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>							
							</div>
						</div>
						<div className="col-md-6">
							<h4>Lorem ipsum video here</h4>
							<p><i>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</i></p>
							<div className="video-description">
								<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
								<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.</p>
								<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. </p>
							</div>
							<a href="#" className="btn btn-default white-blue">Read more</a>
						</div>
					</div> 
				</div>
			</div>
			<div className="business-section">
				<div className="container">
					<div className="row">
						<h3>Pure Gems is great product for human life</h3>
						<p><i>Yes Mentum is fully responsive,and look’s great on any device.</i></p>
						<a href="#" className="btn btn-default white-yellow">Order Now</a>
					</div>
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<div className="img-container">
								<img src="assests/img/svg/browsers.svg" alt="Browsers image"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="about">
			<div className="container">
				<div className="row">		
					<div className="col-md-8 col-md-offset-2">
						<div className="title-content">					
							<h2 className="section-title">About us</h2>
							<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
						</div>
					</div>
				</div>
			</div> 
			<div className="about-team slider-container">
				<div className="team-member grabbable">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="img-container">	
									<img src="assests/img/team/team_member_01.png" alt="Jane Doe - Creative Director"/>
								</div>
							</div>
							<div className="col-md-8">
								<div className="description">
									<span className="h4">Ayub Sharif</span>
									<p className="position"><i>Chief Executive Officer</i></p>
									<div className="biography">
										<p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.</p>
										<p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. </p>
									</div>
									<ul className="social-list">
										<li><a href="#"><i className="si social-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="si social-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="si social-dribbble" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="team-member grabbable">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="img-container">	
									<img src="assests/img/team/team_member_02.png" alt="John Smith - Chief Technology Officer"/>
								</div>
							</div>
							<div className="col-md-8">
								<div className="description">
									<span className="h4">Umar Sharif</span>
									<p className="position"><i>Chief Technology Officer</i></p>
									<div className="biography">
										<p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.</p>
										<p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. </p>
									</div>
									<ul className="social-list">
										<li><a href="#"><i className="si social-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="si social-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="si social-dribbble" aria-hidden="true"></i></a></li>
									</ul>
								</div> 
							</div>
						</div> 
					</div> 
				</div> 
				<div className="team-member grabbable">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="img-container">	
									<img src="assests/img/team/team_member_03.png" alt="Anne Doe - Chief Happiness Officer"/>
								</div>
							</div>
							<div className="col-md-8">
								<div className="description">
									<span className="h4">Atif sir</span>
									<p className="position"><i>Chief Happiness Officer</i></p>
									<div className="biography">
										<p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.</p>
										<p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. </p>
									</div>
									<ul className="social-list">
										<li><a href="#"><i className="si social-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="si social-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="si social-dribbble" aria-hidden="true"></i></a></li>
									</ul>
								</div> 
							</div>
						</div>
					</div> 
				</div> 			
			</div> 
			<div className="skills-company-subsection">		
				<div className="container">			
					<div className="row">			
						<div className="col-md-7">
							<div className="skills-subsection">
								<h4>Target Customers</h4>
								<p>Household and ayurvedh</p>
								<div className="progress">
								  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
								    <span className="sr-only">90% Complete</span>
								  </div>
								</div>

								<p>International Branding</p>

								<div className="progress">
								  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
								    <span className="sr-only">90% Complete</span>
								  </div>
								</div>

								<p>Customer Reliability</p>

								<div className="progress">
								  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
								    <span className="sr-only">90% Complete</span>
								  </div>
								</div>

								<p>Trust Gaining products</p>

								<div className="progress">
								  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
								    <span className="sr-only">90% Complete</span>
								  </div>
								</div>

							</div> 

						</div>

						<div className="col-md-5">

							<div className="company-subsection">
							
								<h4>About company</h4>

								<div className="description">
									
									<p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.</p>

									<p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>

								</div>

							</div> 

						</div>

					</div> 

				</div> 

			</div> 

		</section>

		<section id="blog">

			<div className="container">

				<div className="row">
					
					<div className="col-md-8 col-md-offset-2">

						<div className="title-content">
							
							<h2 className="section-title">Blog</h2>

							<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

						</div>

					</div>

				</div> 

			</div>

			<section id="articles">

				
				<h3 className="sr-only">Articles</h3>
			

				<div className="container">

					<div className="row">
						
						<div className="col-sm-6">
							
							<article className="blog-entry first-row-entry">
								
								<figure>

									<img src="assests/img/blog/blog_entry_01.jpg" alt="Blog entry 01 image"/>

									<figcaption className="sr-only">Blog entry 01 image</figcaption>

								</figure>

								<div className="blog-entry-inner">

									<h4><a href="#">Sample Blog Title</a></h4>

									<p className="author-date"><span className="date">November 2013</span> by <span className="author"><a href="#">John Doe</a></span></p>

									<p className="entry-content">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci.</p>

									<a href="#" className="read-more pull-right">Read more...</a>

								</div> 

							</article> 

						</div>

						<div className="col-sm-6">
							
							<article className="blog-entry first-row-entry">
								
								<figure>

									<img src="assests/img/blog/blog_entry_02.jpg" alt="Blog entry 02 image"/>

									<figcaption className="sr-only">Blog entry 02 image</figcaption>

								</figure>

								<div className="blog-entry-inner">

									<h4><a href="#">Sample Blog Title</a></h4>

									<p className="author-date"><span className="date">November 2013</span> by <span className="author"><a href="#">John Doe</a></span></p>

									<p className="entry-content">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci.</p>

									<a href="#" className="read-more pull-right">Read more...</a>

								</div> 

							</article> 

						</div>

					</div> 

					<div className="row">
						
						<div className="col-sm-6 col-md-4">
							
							<article className="blog-entry second-row-entry">
								
								<figure>

									<img src="assests/img/blog/blog_entry_03.jpg" alt="Blog entry 03 image"/>

									<figcaption className="sr-only">Blog entry 03 image</figcaption>

								</figure>

								<div className="blog-entry-inner">

									<h4><a href="#">Sample Blog Title</a></h4>
								
									<p className="author-date"><span className="date">November 2013</span> by <span className="author"><a href="#">John Doe</a></span></p>

									<p className="entry-content">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam...</p>

									<a href="#" className="read-more pull-right">Read more...</a>

								</div> 

							</article> 

						</div>

						<div className="col-sm-6 col-md-4">
							
							<article className="blog-entry second-row-entry">
								
								<figure>

									<img src="assests/img/blog/blog_entry_04.jpg" alt="Blog entry 04 image"/>

									<figcaption className="sr-only">Blog entry 04 image</figcaption>

								</figure>

								<div className="blog-entry-inner">

									<h4><a href="#">Sample Blog Title</a></h4>

									<p className="author-date"><span className="date">November 2013</span> by <span className="author"><a href="#">John Doe</a></span></p>

									<p className="entry-content">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam...</p>

									<a href="#" className="read-more pull-right">Read more...</a>

								</div> 

							</article> 

						</div>

						<div className="col-sm-6 col-md-4">
							
							<article className="blog-entry second-row-entry">
								
								<figure>

									<img src="assests/img/blog/blog_entry_05.jpg" alt="Blog entry 05 image"/>

									<figcaption className="sr-only">Blog entry 05 image</figcaption>

								</figure>

								<div className="blog-entry-inner">

									<h4><a href="#">Sample Blog Title</a></h4>

									<p className="author-date"><span className="date">November 2013</span> by <span className="author"><a href="#">John Doe</a></span></p>

									<p className="entry-content">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam...</p>

									<a href="#" className="read-more pull-right">Read more...</a>

								</div> 

							</article>

						</div>

					</div> 

					<a href="#" className="btn btn-default yellow-white">Show More</a>

				</div>
			</section> 

			<div className="newsletter">

				<div className="container">

					<div className="row">

						<div className="col-md-6 col-md-offset-3">

							<h3>Subscribe to our newsletter</h3>
								
							<form className="newsletter-form">

								<div className="row">

									<div className="col-sm-8">

										<label className="sr-only" for="Email">Email</label>
										<input type="email" id="Email" placeholder="Your Mail"/>

									</div>

									<div className="col-sm-4">

										<button type="submit" className="btn btn-default white-blue">Send invitation</button>

									</div>

								</div> 

							</form> 
						</div>

					</div> 
				</div> 
				
			</div> 

		</section>

		<section id="contact">

			<div className="container">

				<div className="row">
					
					<div className="col-md-8 col-md-offset-2">

						<div className="title-content">
							
							<h2 className="section-title">Contact us</h2>

							<p>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

						</div>

					</div>

				</div> 
				
				<form className="contact-form">
					
					<div className="row">

						<div className="col-md-4">
							
							<label className="sr-only" for="Name">Name</label>
							<input type="text" name="name" id="Name" placeholder="Your Name"/>

						</div>
						
						<div className="col-md-4">
							
							<label className="sr-only" for="Email">Email</label>
							<input type="email" name="email" id="Email" placeholder="Your Mail"/>

						</div>

						<div className="col-md-4">
							
							<label className="sr-only" for="Subject">Subject</label>
							<input type="text" name="subject" id="Subject" placeholder="Subject"/>

						</div>

					</div> 

					<div className="row">

						<div className="col-md-12">
							
							<label className="sr-only" for="Message">Message</label>
							<textarea name="message" id="Message" rows="9" placeholder="Enter Message Here..."></textarea>

						</div>
						
					</div> 
					<button type="submit" className="btn btn-default white-blue">Send invitation</button>

				</form>	

			</div> 

		</section>

	</main>

	<footer id="footer">

		<div className="container">
			
			<div className="row">
				
				<div className="col-md-6 col-md-offset-3">

					<p className="mail">Mygmail1234@gmail.com</p>

					<p className="tel">(+971) 05 239 83412</p>

					<ul className="social-list">
						<li><a href="#"><i className="si social-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#"><i className="si social-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#"><i className="si social-google-plus" aria-hidden="true"></i></a></li>
						<li><a href="#"><i className="si social-rss" aria-hidden="true"></i></a></li>
						<li><a href="#"><i className="si social-dribbble" aria-hidden="true"></i></a></li>
						<li><a href="#"><i className="si social-flickr" aria-hidden="true"></i></a></li>
						<li><a href="#"><i className="si social-skype" aria-hidden="true"></i></a></li>
					</ul>

					<p className="copyright"> © Copyright <span id="year">2023</span> <span className="text-yellow">Rochan Ghimire</span>. All Rights Reserved</p>

				</div>
 
			</div>

		</div> 

	</footer>

        </Fragment>
    )
}

export default Index;