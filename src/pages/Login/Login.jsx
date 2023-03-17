import React, { useEffect } from 'react'
import './login.css'

function Login() {
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
    })
  return (
    <div>
        <div id="id01" class="modal">
            <form class="modal-content animate" action="/auth/login" method='POST'>
                <div class="imgcontainer">
                    <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                </div>
                <div class="container">
                    <h3>Login</h3>
                    <form method="post" action="auth/login">
                        <div class="row uniform 50%">
                            <div class="7u$">
                                <input type="text" name="uname" id="uname" value="" placeholder="UserName" style="width:80%" required/>
                            </div>
                            <div class="7u$">
                                <input type="password" name="pass" id="pass" value="" placeholder="Password" style="width:80%" required/>
                            </div>
                        </div>
                        <div class="row uniform">
                            <p>
                                <b>Category : </b>
                            </p>
                            <div class="3u 12u$(small)">
                                <input type="radio" id="farmer" name="category" value="1" checked />
                                <label for="farmer">Farmer</label>
                            </div>
                            <div class="3u 12u$(small)">
                                <input type="radio" id="buyer" name="category" value="0" />
                                <label for="buyer">Buyer</label>
                            </div>
                        </div>
                        <center>
                            <div class="row uniform">
                                <div class="7u 12u$(small)">
                                    <input type="submit" value="Login" />
                                </div>
                            </div>
                        </center>
                    </form>
                </div>
            </form>
        </div>
        <div id="id02" class="modal">
            <form class="modal-content animate" action="Login/signUp.php" method='POST'>
                <div class="imgcontainer">
                    <span onClick={() => document.getElementById('id02').style.display='none'} class="close" title="Close Modal">&times;</span>
                </div>
                <div class="container">
                    <section>
                        <h3>SignUp</h3>
                        <form method="post" action="Login/signUp.php">
                            <center>
                                <div class="row uniform">
                                    <div class="3u 12u$(xsmall)">
                                        <input type="text" name="name" id="name" value="" placeholder="Name" required/>
                                    </div>
                                    <div class="3u 12u$(xsmall)">
                                        <input type="text" name="uname" id="uname" value="" placeholder="UserName" required/>
                                    </div>
                                </div>
                                <div class="row uniform">
                                    <div class="3u 12u$(xsmall)">
                                        <input type="text" name="mobile" id="mobile" value="" placeholder="Mobile Number" required/>
                                    </div>
                                    <div class="3u 12u$(xsmall)">
                                        <input type="email" name="email" id="email" value="" placeholder="Email" required/>
                                    </div>
                                </div>
                                <div class="row uniform">
                                    <div class="3u 12u$(xsmall)">
                                        <input type="password" name="password" id="password" value="" placeholder="Password" required/>
                                    </div>
                                    <div class="3u 12u$(xsmall)">
                                        <input type="password" name="pass" id="pass" value="" placeholder="Retype Password" required/>
                                    </div>
                                </div>
                                <div class="row uniform">
                                    <div class="6u 12u$(xsmall)">
                                        <input type="text" name="addr" id="addr" value="" placeholder="Address" style="width:80%" required/>
                                    </div>
                                </div>
                                <div class="row uniform">
                                    <p>
                                        <b>Category : </b>
                                    </p>
                                    <div class="3u 12u$(small)">
                                        <input type="radio" id="farmer" name="category" value="1" checked />
                                        <label for="farmer">Farmer</label>
                                    </div>
                                    <div class="3u 12u$(small)">
                                        <input type="radio" id="buyer" name="category" value="0" />
                                        <label for="buyer">Buyer</label>
                                    </div>
                                </div>
                                <div class="row uniform">
                                    <div class="3u 12u$(small)">
                                        <li>
                                            <input type="submit" value="Submit" name="submit" class="special" />
                                        </li>
                                    </div>
                                    <div class="3u 12u$(small)">
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
        </div>
    </div>
  )
}

export default Login
