import React, { Fragment } from 'react';

import { WhatWeDo } from "./Componets/WhatWeDo";
import { Client } from "../Shared/Client";
import { Testomonials } from "../Shared/Testomonials";
import { Team } from "./Componets/Team";
import { SocialMedia } from "../Shared/SocialMedia";

export function AboutUs() {
    return <Fragment>
        <section id="innerBanner">
            <div class="inner-content">
                <h2><span>About Us</span></h2>
                <div>
                </div>
            </div>
        </section>

        <main id="main">
            <WhatWeDo />
            <Client />
            <Testomonials />
            <Team />
            <SocialMedia />
        </main>
    </Fragment>
}