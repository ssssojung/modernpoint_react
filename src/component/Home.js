import React from 'react';

import Header from './Header';
import Mainbanner from './Mainbanner';
import '../css/home.scss';
function Home(props) {
    return (
        <section id={props.section[0].id}>
            <Header/>
            <Mainbanner mainbn='mainbanner'/>
        </section>
    );
}

export default Home;