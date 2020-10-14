import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function Service() {
    return <section id="services">
        <div class="container">
            <div class="section-header">
                <h2>Our Services</h2>
                <p>Capreg Soft provides a vast range of IT services to meet the needs of different clients that
                competes with different rivals in this digital era where technology is progressing day by day
            </p>
            </div>

            <div class="row">

                <div class="col-lg-4">
                    <div class="box wow fadeInLeft">
                        <div class="icon svgImg"><img src="./assets/img/web-development.svg" alt="No Image" height="90px"
                            width="100px" /></div>
                        <h4 class="title"><a href="#">Web Development</a></h4>
                        <p class="description">Web Development is our strength.In case you’re looking for
                        overhauling of your existing website and for creating a new website our team of
                        skillfull web developers will assured you that we deliver a unique, powerful, dynamic
                        and efficient looking website on time.</p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="box wow fadeInRight">
                        <div class="icon svgImg"><img src="./assets/img/app-development.svg" alt="No Image" height="90px"
                            width="100px" /></div>
                        <h4 class="title"><a href="#">Mobile Applications</a></h4>
                        <p class="description">Mobile application development in Pakistan has grasping exceptional
                        growth in the recent years. CapregSoft company develop mobile applications in
                        WahCantt,Pakistan. We cooperate with our clients from the abstract stage to final
                        development.
                    </p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="box wow fadeInLeft" data-wow-delay="0.2s">
                        <div class="icon svgImg"><img src="./assets/img/desktop-apps.svg" alt="No Image" height="90px" width="100px" />
                        </div>
                        <h4 class="title"><a href="#">Desktop Applications</a></h4>
                        <p class="description">Our developers have broad vision of present-day technologies as well
                        as provides complex systems and solutions for problems.Our desktop application
                        development services provides an efficient,user-friendly desktop applications
                        that can run offline as well.</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
}