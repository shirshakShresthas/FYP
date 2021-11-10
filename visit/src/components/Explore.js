import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Image11 from '../img/ru.jpg';
import Image12 from '../img/4.JPG';
import Image13 from '../img/beni.jpg';
import Image14 from '../img/to.JPG';
import Image15 from '../img/1.JPG';

const Explore = () => {
    
    return (
        <div className="top-c row-0">
            <div className="containers">
                <div className="text-center">
                    <h2>Top Destination</h2>
                    <p className="lead"> </p>
                </div>
            </div>
            <div className="row no-gutter">

                <div className="col-md-6 col-sm-12 offset-0 single-grid single-col-right-pad" >

                        <figure className="effect-goliath">
                            <img id="ii" src={Image11} alt="img23" />   
                        </figure>
                </div>

                <div class="col-md-6 col-sm-12 offset-0">
                    <div className="row four-grid">

                        <div className="col-md-6 col-sm-6 col-xs-6 offset-0 middle-pad-2">
                            <div className="grid">
                                <figure className="effect-goliath">
                                    <img src={Image12} alt="img23" onClick={() => <Link to="/narchyang"/>} />
                                    
                                    <figcaption>
                                        <h2>Narchyang <span>Fall</span></h2>
                                        <p>Beautifull Waterfall of Narchyang Village</p>
                                        <Link to="/narchyang" size="small" color="primary">View More</Link>
                                    </figcaption>
                                </figure>

                            </div>

                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6 offset-0 left-pad">
                            <div className="grid">
                                <figure className="effect-goliath">
                                    <img src={Image13} alt="img23" onClick={() => <Link to="/beni"/>} />
                                    <figcaption>
                                        <h2>Headquarter <span>Beni Bazar</span></h2>
                                        <p>When Goliath comes out, you should run.</p>
                                        <Link to="/beni" size="small" color="primary">View More</Link>
                                    </figcaption>
                                </figure>

                            </div>

                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6 offset-0 middle-pad-2">
                            <div className="grid">
                                <figure className="effect-goliath">
                                    <img src={Image14} alt="img23" onClick={() => <Link to="/destinations"/>} />
                                    <figcaption>
                                        <h2>TODKE <span>View</span></h2>
                                        <p>Todke is famous for sightseeing and sunrise</p>
                                        <Link to="/destinations" size="small" color="primary">View More</Link>
                                    </figcaption>
                                </figure>

                            </div>

                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-6 offset-0 left-pad">
                            <div className="grid">
                                <figure className="effect-goliath">
                                    <img src={Image15} alt="img23" onClick={() => <Link to="/malika"/>} />
                                    <figcaption>
                                        <h2>Malika <span>Dhuri</span></h2>
                                        <p>View from Malika Dhuri</p>
                                        <Link to="/malika" size="small" color="primary">View More</Link>
                                    </figcaption>
                                </figure>

                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}
export default Explore;
