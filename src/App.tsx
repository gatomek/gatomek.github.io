import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Application} from "./components/Application/Application.tsx";

function App() {
    return (
        <section id="center">
            <div className="hero">
                <img src={heroImg} className="base" width="170" height="179" alt=""/>
                <img src={reactLogo} className="framework" alt="React logo"/>
                <img src={viteLogo} className="vite" alt="Vite logo"/>
            </div>
            <div>
                <h1>@Gatomek</h1>
                <Application origins={
                    [
                        {name:'netlify', url: 'https://flightradar-gatomek.netlify.app'},
                        {name:'github', url: 'https://gatomek.github.io/project-flightradar-frontend'}
                    ]
                }>
                    Flightradar
                </Application>

                <Application origins={[{name:'github', url: 'https://gatomek.github.io/project-flashcards-frontend'}]}>
                    Flashcards
                </Application>

                <Application origins={[{name:'github', url: 'https://gatomek.github.io/kata-flightradar-radars'}]}>
                    Radars
                </Application>

                <Application origins={[{name:'github', url: 'https://gatomek.github.io/kata-flightradar-flight'}]}>
                    Flight
                </Application>
            </div>
        </section>
    )
}

export default App
