import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Sliders.css'
import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import apple1 from '../../assets/images/apple.JPG'
import apple2 from '../../assets/images/Apple3.jpg'
import mango from '../../assets/images/mango1.JPG'
import muchroom from '../../assets/images/mushroom.JPG'

function Sliders() {
    const [slides, setSlides] = useState([])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
//   return (
    if(slides.length < 1) {
        return (
            <Carousel 
            draggable={true}
            showDots={true}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="all .5"
            transitionDuration={1000}
            >
                <div className="card shadow-sm mx-2" style={{ minHeight: "460px", maxHeight: "460px", height: "460px", border: "1px solid rgba(0,0,0,0.3)", boxShadow: "0px 2px 2px rgba(0,0,0,0.3)", borderRadius: "10px" }}>
                    <div className="img">
                        <img src={apple1} height="200px" alt="error image" />
                    </div>
                    <div className="content" style={{ position: "relative" }}>
                        <div className="title">Get the Best When it comes to fish farming</div>
                        <p>Create an Account and follow our update...</p>
                        <div style={{ display: "flex", flexDirection:"row", justifyContent: "space-around", alignItems: "center", bottom: "-50px", position: "relative" }}>
                            <Link href="/login" className="btn btn-danger mr-2">Place Order Now</Link>
                            <small className='mx-5'>{24} in Stock</small>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm mx-2" style={{ minHeight: "460px", maxHeight: "460px", height: "460px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.3)", boxShadow: "0px 2px 2px rgba(0,0,0,0.3)" }}>
                    <div className="img">
                        <img src={apple2} height="200px" alt="error image" />
                    </div>
                    <div className="content" style={{ position: "relative" }}>
                        <div className="title">Get Fresh Fruits and Vegeables</div>
                        <p>Create an Account and follow our update...</p>
                        <div style={{ display: "flex", flexDirection:"row", justifyContent: "space-around", alignItems: "center", bottom: "-50px", position: "relative" }}>
                            <Link href="/login" className="btn btn-danger mr-2">Place Order Now</Link>
                            <small className='mx-5'>{24} in Stock</small>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm mx-2" style={{ minHeight: "460px", maxHeight: "460px", height: "460px", border: "1px solid rgba(0,0,0,0.3)", boxShadow: "0px 2px 2px rgba(0,0,0,0.3)", borderRadius: "10px" }}>
                    <div className="img">
                        <img src={muchroom} height="200px" alt="error image" />
                    </div>
                    <div className="content" style={{ position: "relative" }}>
                        <div className="title">Place Order for all products</div>
                        <p>Create an Account and follow our update...</p>
                        <div style={{ display: "flex", flexDirection:"row", justifyContent: "space-around", alignItems: "center", bottom: "-50px", position: "relative" }}>
                            <Link href="/login" className="btn btn-danger mr-2">Place Order Now</Link>
                            <small className='mx-5'>{24} in Stock</small>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm mx-2" style={{ minHeight: "460px", maxHeight: "460px", height: "460px", border: "1px solid rgba(0,0,0,0.3)", boxShadow: "0px 2px 2px rgba(0,0,0,0.3)", borderRadius: "10px" }}>
                    <div className="img">
                        <img src={mango} height="200px" alt="error image" />
                    </div>
                    <div className="content" style={{ position: "relative" }}>
                        <div className="title">Get fresh fish and smoked fish</div>
                        <p>Create an Account and follow our update...</p>
                        <div style={{ display: "flex", flexDirection:"row", justifyContent: "space-around", alignItems: "center", bottom: "-50px", position: "relative" }}>
                            <Link href="/login" className="btn btn-danger mr-2">Place Order Now</Link>
                            <small className='mx-5'>{24} in Stock</small>
                        </div>
                    </div>
                </div>

                
            </Carousel>
        )
    }else{
        return(
            <Carousel 
            draggable={true}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="all .5"
            transitionDuration={500}
            >
                {issues.map((issue, index) => 
                    <div key={issue.id} className="card shadow-sm mx-2" style={{ minHeight: "450px", maxHeight: "450px", height: "450px", border: "px", borderRadius: "10px" }}>
                        <div className="img">
                            <img src={'./uploads/'+issue.avatar} alt={issue.avatar} />
                        </div>
                        <div className="content" style={{ position: "relative" }}>
                            <div className="title">{issue.issue_title}</div>
                            <p>{issue.issue_body.substr(0,75)}...</p>
                            <div style={{ position: "absolute", bottom: "-50px" }}>
                                <Link to={"/donate?id="+issue.id} className="btn btn-danger mr-2">Buy now</Link>
                                <small className='mx-5'>{issue.id} Orders in Stock</small>
                            </div>
                        </div>
                    </div>
                )}
            </Carousel>
        )
    }
}

export default Sliders