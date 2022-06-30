import Router from 'preact-router';
import { Link } from 'preact-router/match';
import Home from './Home';
import About from './About';

export default function App() {
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
            <Router>
                <Home path="/" />
                <About path="/about" />
            </Router>
        </>
    );
}
