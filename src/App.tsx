import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

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
                <p>
                    <a href='https://gatomek.github.io/project-flashcards-frontend/'>https://gatomek.github.io/project-flashcards-frontend/</a>
                </p>
            </div>
        </section>
    )
}

export default App
