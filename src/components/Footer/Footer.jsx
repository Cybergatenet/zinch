import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer-distributed" style={{ backgroundColor: "black" }} id="aboutUs">
		<center>
			<h1 style={{ font: "35px calibri" }}>About Us</h1>
		</center>
		<div className="footer-left">
			<h3 style={{ fontFamily: 'Times New Roman, cursive' }}>Zinch &copy; </h3>
		{/* <!--	<div className="logo">
				<a href="index.php"><img src="images/logo.png" width="200px"></a>
			</div>--> */}
			<br />
			<p style={{ fontSize: "20px", color: "white" }}>Our product Your market !!!</p>
			<br />
		</div>

		<div className="footer-center">
			<div>
				<i className="fa fa-map-marker"></i>
				<p style={{ fontSize: "20px" }}>Zinch Integrated<span>Farn</span></p>
			</div>
			<div>
				<i className="fa fa-phone"></i>
				<p style={{ fonSize: "20px" }}>08066576058</p>
			</div>
			<div>
				<i className="fa fa-envelope"></i>
				<p style={{ fontSize: "20px" }}><a href="mailto:cybergatenet@gmail.com" style={{ color: "white" }}>cybergatenet@cyerbgate.com</a></p>
			</div>
		</div>

		<div className="footer-right">
			<p className="footer-company-about" style={{ color: "white" }}>
				<span style={{ fontSize: "20px" }}><b>About Zinch</b></span>
				Zinch is an e-commerce agricultural platform for lievstocks and farm produce
			</p>
			<div className="footer-icons">
				<a  href="#"><i style={{ marginLeft: "0", marginTop: "5px" }} className="fa fa-facebook"></i></a>
				<a href="#"><i style={{ marginLeft: "0", marginTop: "5px" }} className="fa fa-instagram"></i></a>
				<a href="#"><i style={{ marginLeft: "0", marginTop: "5px" }} className="fa fa-youtube"></i></a>
			</div>
		</div>
	</footer>
  )
}

export default Footer
