import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './login.css'

function Login() {
    // useEffect(() => {
    //     // Get the modal
    //     var modal = document.getElementById('id01');

    //     // When the user clicks anywhere outside of the modal, close it
    //     window.onClick = function(event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }
    //     }

    //     var modal1= document.getElementById('id02');

    //     // When the user clicks anywhere outside of the modal, close it
    //     window.onClick = function(event) {
    //         if (event.target == modal1) {
    //             modal1.style.display = "none";
    //         }
    //     }
    // })
  return (
    <div>
        <Navbar />
        <div id="id01" className="">
            {/* <form className="modal-content animate" action="/auth/login" method='POST'> */}
                <div className="imgcontainer">
                    <span onClick={() => alert('btn clicked')} className="close" title="Close Modal">&times;</span>
                </div>
                <div className="container">
                    <h3>Login</h3>
                    <form method="post" action="auth/login">
                        <div className="row uniform 50%">
                            <div className="7u$">
                                <input type="text" name="uname" id="uname" placeholder="UserName" style={{ width:"80%" }}required/>
                            </div>
                            <div className="7u$">
                                <input type="password" name="pass" id="pass" placeholder="Password" style={{ width:"80%" }} required/>
                            </div>
                        </div>
                        <div className="row uniform">
                            <p>
                                <b>Category : </b>
                            </p>
                            <div className="3u 12u$(small)">
                                <input type="radio" id="farmer" name="category" />
                                <label htmlFor="farmer">Farmer</label>
                            </div>
                            <div className="3u 12u$(small)">
                                <input type="radio" id="buyer" name="category" />
                                <label htmlFor="buyer">Buyer</label>
                            </div>
                        </div>
                        <center>
                            <div className="row uniform">
                                <div className="7u 12u$(small)">
                                    <button type="submit">Login</button>
                                </div>
                            </div>
                        </center>
                    </form>
                </div>
            {/* </form> */}
        </div>
        {/* <div id="id02" className="modal">
            <form className="modal-content animate" action="Login/signUp.php" method='POST'>
                <div className="imgcontainer">
                    <span onClick={() => document.getElementById('id02').style.display='none'} className="close" title="Close Modal">&times;</span>
                </div>
                <div className="container">
                    <section>
                        <h3>SignUp</h3>
                        <form method="post" action="Login/signUp.php">
                            <center>
                                <div className="row uniform">
                                    <div className="3u 12u$(xsmall)">
                                        <input type="text" name="name" id="name" value="" placeholder="Name" required/>
                                    </div>
                                    <div className="3u 12u$(xsmall)">
                                        <input type="text" name="uname" id="uname" value="" placeholder="UserName" required/>
                                    </div>
                                </div>
                                <div className="row uniform">
                                    <div className="3u 12u$(xsmall)">
                                        <input type="text" name="mobile" id="mobile" value="" placeholder="Mobile Number" required/>
                                    </div>
                                    <div className="3u 12u$(xsmall)">
                                        <input type="email" name="email" id="email" value="" placeholder="Email" required/>
                                    </div>
                                </div>
                                <div className="row uniform">
                                    <div className="3u 12u$(xsmall)">
                                        <input type="password" name="password" id="password" value="" placeholder="Password" required/>
                                    </div>
                                    <div className="3u 12u$(xsmall)">
                                        <input type="password" name="pass" id="pass" value="" placeholder="Retype Password" required/>
                                    </div>
                                </div>
                                <div className="row uniform">
                                    <div className="6u 12u$(xsmall)">
                                        <input type="text" name="addr" id="addr" value="" placeholder="Address" style={{ width:"80%" }} required/>
                                    </div>
                                </div>
                                <div className="row uniform">
                                    <p>
                                        <b>Category : </b>
                                    </p>
                                    <div className="3u 12u$(small)">
                                        <input type="radio" id="farmer" name="category" value="1" checked />
                                        <label for="farmer">Farmer</label>
                                    </div>
                                    <div className="3u 12u$(small)">
                                        <input type="radio" id="buyer" name="category" value="0" />
                                        <label for="buyer">Buyer</label>
                                    </div>
                                </div>
                                <div className="row uniform">
                                    <div className="3u 12u$(small)">
                                        <li>
                                            <input type="submit" value="Submit" name="submit" className="special" />
                                        </li>
                                    </div>
                                    <div className="3u 12u$(small)">
                                        <li>
                                            <input type="reset" value="Reset" name="reset"/>
                                        </li>
                                    </div>
                                </div>
                            </center>
                        </form>
                    </section>
                </div>
            </form>
        </div> */}
        <Footer />
    </div>
  )
}

export default Login
