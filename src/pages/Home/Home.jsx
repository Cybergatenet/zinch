import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'

// import images
import img1 from '../../assets/images/mushroom.JPG'
import img2 from '../../assets/images/banana.JPG'
import Sliders from '../../components/Sliders/Sliders'

function Home() {
	useEffect(() => {
		// Get the modal
		var modal = document.getElementById('id01');

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}

		var modal1= document.getElementById('id02');

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal1) {
				modal1.style.display = "none";
			}
		}

		

	}, [])

	const login = () => {
		document.getElementById('id01').style.display = 'block'
	}

	const signup = () => {
		document.getElementById('id01').style.display = 'block'
	}
  return (
    <>
		  <Navbar />
		  <section id="banner" className="wrapper">
			  <div className="container">
				  <h2>Zinch Integrated Farm</h2>
				  <p>Our Product Your Market</p>
				  <br /><br />
				  <center>
					  <div className="row uniform">
						  <div className="6u 12u$(xsmall)">
							  <button className="button fit" onClick={login} style={{ width: "auto" }}>LOGIN</button>
						  </div>
						  <div className="6u 12u$(xsmall)">
							  <button className="button fit" onClick={signup} style={{ width: "auto" }}>REGISTER</button>
						  </div>
					  </div>
				  </center>
			  </div>
		  </section>
		  <section id="one" className="wrapper style1 align-center">
			  <div className="container">
				  <header>
					  <h2>Zinch Integrated Farm</h2>
					  <p>Explore the new way of trading Farm Produce...</p>
				  </header>
				  <div className="row 200%">
					  <section className="4u 12u$(small)">
						  <i className="fa fa-clock rounded fa-5x"></i>
						  <p>Digital Market</p>
					  </section>
					  <section className="4u 12u$(small)">
						  <i className="fa rounded fa-comments fa-5x"></i>
						  <p>Our Blog</p>
					  </section>
					  <section className="4u$ 12u$(small)">
						  <i className="fa rounded fa-user fa-5x"></i>
						  <p>Register with us</p>
					  </section>
				  </div>
			  </div>
		  </section>
          {/* react siders here */}
            <section className="wrapper align-center" style={{ height: "100vh" }}>
                <Sliders />
            </section>

          {/* react siders here */}

		  <section className='section'>
			  <div className="blog row">
				  <div className="font-weight-bold text-white col-md-6">
					  <p className="display-3 mt-5"><b>Fish Farming </b></p>
					  <p className="display-3"><b style={{ color: "orange" }}>Sales &</b></p>
					  <p className="display-5 "><b>Distribution</b> </p>
					  <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Pariatur iusto provident, eum velit perspiciatis laborum <br /> porro odio voluptas quasi inventore saepe tempore, <br /> molestias quidem ut neque quas, expedita aliquam sequi?</p>
					  <button className="button btn text-white my-3"><b>Place Order</b></button>
				  </div>
				  <div className='col-md-4'>
					  <form className='form-group' style={{ background: "black" }}>
						  <div className="loginform p-3 text-center">
							  <div>
								  <p className="h3 px-5 text-warning font-weight-bold">Login Here</p>
							  </div>

							  <input style={{ background: "transparent", border: "1px solid orange", color: "white" }} type="text" placeholder="Enter Email Here" />
							  {/* <hr> */}

							  <input style={{ background: "transparent", border: "1px solid orange", color: "white" }} type="password" placeholder="Enter password Here" />
							  {/* <hr> */}

							  <p><button className="button px-5 btn text-center font-weight-bold text-white ">LOGIN</button></p>

							  <div className="text-center text-white">
								  <p>Don't have an account?</p>
								  <p>
									  <Link className="nav-link text-warning" to="">Sign up <span className="text-white">Here</span></Link>
								  </p>
								  <p>Log in with</p>
								  <div className="d-flex justify-content-around links">
									  <Link to="#"><img src={"../../assets/images/fb.png"} alt={'fb.png'} /></Link>
									  <Link to="#"><img src={"../../assets/images/twt.png"} alt={'twt.png'} /></Link>
									  <Link to="#"><img src={"../../assets/images/gg.png"} alt={'gg'} /></Link>
									  <Link to="#"><img src="../../assets/images/www.png" alt={'www'} /></Link>
								  </div>
							  </div>
						  </div>
					  </form>
				  </div>
			  </div>
		</section>


		{/* <div className="lorem text-center text-white bg-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam non, dignissimos incidunt pariatur voluptatem ipsa. Odit modi provident odio ipsa numquam recusandae rem eius aliquid quo. Expedita, repellendus assumenda.</div> */}

        {/* <section>
            <div className="container d-lg-flex">
                <div className="shape d-lg-flex p-4 my-4 border shadow">
                    <img className='img' src={img1} alt={img1} />
                    
                    <div className="px-3"><p className="font-weight-bold h3">Get the Best <br /> When it comes to fish farming</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Pariatur iusto provident, eum velit perspiciatis laborum <br /> porro odio voluptas quasi inventore saepe tempore, <br /> molestias quidem ut neque quas, expedita aliquam sequi?</p>
                        <button className="btn text-white h4">View more</button>
                    </div>
                </div>
                <div className="shape2 m-lg-5 border shadow">
                    <img className='img' src={img2} alt={img2} />
                </div>
            </div>
        </section> */}
    

    {/* <section>
        <div  className="bg-white my-5">
            <div  className="text-center text-info">
                <p  className="h3"><b>LEARN AND LEAD</b></p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, doloribus?</p>
                <p className="h6">Sign Up as</p>
            </div>
    
            <div>
                <ul className=" list-unstyled text-center d-lg-flex justify-content-center pt-3">
                    <li><Link  className="nav-link text-warning font-weight-bold"        to="#">Learner</Link></li>
                    <li><Link  className="nav-link text-warning font-weight-bold"        to="#">Farmer</Link></li>
                    <li><Link  className="nav-link text-warning font-weight-bold"        to="#">Buyer</Link></li>
                </ul>
            </div>
        </div>
    </section> */}

    {/* <section>
        <div className="container">
            <div className="row">
                <div className="col-md-4 my-4 d-flex">
                    <div>
                        <img src="./images/icon-fully-customizable.svg" />
                    </div>

                    <div className="ml-3 text-dark">
                        <h5>Learner</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, velit!</p>
                    </div>
                </div>
                <div className="col-md-4 my-4 d-flex">
                    <div>
                        <img src="./images/icon-brand-recognition.svg" />
                    </div>

                    <div className="ml-3 text-dark">
                        <h5>Farmer</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, velit!</p>
                    </div>
                </div>
                <div className="col-md-4 my-4 d-flex">
                    <div>
                        <img src="./images/icon-fully-customizable.svg" />
                    </div>

                    <div className="ml-3 text-dark">
                        <h5>Buyer</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, velit!</p>
                    </div>
                </div>       
            </div>
        </div>
    </section> */}

    
    {/* <section>
        <div className="Project bg-info p-5 text-white">
            <div className="container">
                <p className="h3 py-3">Would You Get Our Farm Produces?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eos obcaecati optio in nihil est <br /> perferendis soluta assumenda qui voluptates.</p>
            </div>
        </div>
    
        <div className="">
            <div className="bg-dark text-light p-5 d-lg-flex justify-content-between">
                <div className="col-md-3">
                    <div className="logo">
                        <div className="h3 text-warning">Zinch <span className="text-white">&reg;</span></div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, asperiores.</p>
                    <div className="my-4 d-flex">
                        <img src="./images/fb.png" className="bg-dark p-2 btn" />
                        &nbsp;
                        <img src="./images/twt.png" className="bg-dark p-2 btn" />
                        &nbsp;
                        <img src="./images/pi.png" className="bg-dark p-2 btn" />
                        &nbsp;
                        <img src="./images/www.png" className="bg-dark p-2 btn" />
                    </div>
                </div>
    
                <div className="col-md-3">
                    <b className="ml-3">Important Links</b>
                    <ul className="list-unstyled">
                        <li><Link to="#" className="nav-link text-white">Home</Link></li>
                        <li><Link to="#" className="nav-link text-white">About</Link></li>
                        <li><Link to="#" className="nav-link text-white">Services</Link></li>
                        <li><Link to="#" className="nav-link text-white">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <b className="ml-3">Useful Links</b>
                    <ul className="list-unstyled">
                    <li><Link to="#" className="nav-link text-white">Get Started</Link></li>
                    <li><Link to="#" className="nav-link text-white">How it works</Link></li>
                    <li><Link to="#" className="nav-link text-white">FAQ</Link></li>
                    <li><Link to="#" className="nav-link text-white">Blog</Link></li>
                    </ul>
                </div>
    
                <div className="col-md-3">
                    <b className="ml-3">Webloaded Solution</b>
                    <ul className="list-unstyled">
                        <li><Link to="#" className="nav-link text-white">Date Entry Jobs</Link></li>
                        <li><Link to="#" className="nav-link text-white">Online Jobs</Link></li>
                        <li><Link to="#" className="nav-link text-white">Sitemap</Link></li>
                        <li><Link to="#" className="nav-link text-white">Terms</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section> */}
	{/* <footer>
        <div className="container text-center my-3">
            <p className="text-center h6 text-info p-3">Get new posts by Email</p>
            <input className="text-center " type="text" placeholder="Your Email" />
        </div>
        <div className=" cookies bg-info text-white text-center px-3">
            <p>We use cookies on our website to give you <br /> the most relevant experience by <br /> remembering your preferences and <br /> repeat visits. By clicking "Accept", you <br /> consent to the use of all the cookies.</p>
        </div>
        <div className="text-center my-5">
            <button className="text-white btn ">Accept</button>
            <button className="text-white btn ">Reject</button>
            <button className="text-white btn ">Privacy Policy</button>
        </div>
    </footer> */}
	<Footer />
    </>
  )
}

export default Home
