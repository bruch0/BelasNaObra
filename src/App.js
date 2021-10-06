import React from 'react';
import { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Pages/Home/Home';
import Calculator from './Components/Pages/Calculator/Calculator'
import About from './Components/Pages/About/About'

function App() {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
      
    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
        
        useEffect(() => {
            const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
            }
        
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    
        return windowDimensions;
    }
    
    const viewportDimensions = useWindowDimensions();
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact>
                        <Home viewportWidth={viewportDimensions.width}/>	
                    </Route>
                    <Route path='/calculadora' exact>
                        <Calculator />	
                    </Route>
                    <Route path='/sobre' exact>
                        <About viewportWidth={viewportDimensions.width} />	
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;
