import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {ScrollToTop} from "./common/components/scrollToTop/ScrollToTop";

function App() {
    return (
        <div className="App">
            <ScrollToTop />
            <Header/>
            <Main/>
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
