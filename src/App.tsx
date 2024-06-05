
import './App.css'
import {HeroSection} from "./pages/HeroSection";
import BmiResult from "./pages/BmiResult";
import {BmiLimitations} from "./pages/BmiLimitations";
import line from "./assets/images/pattern-curved-line-right.svg"
function App() {

    return (
        <div id="app">
            <HeroSection/>
            <BmiResult/>
            <img src={line} alt="rightCurvedLine" />
            <BmiLimitations/>
        </div>
    )
}

export default App
