import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { Link } from 'preact-router/match';
import Home from 'views/Home';
import 'styles/globals.css';

export default function App() {
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
            <Router>
                <Home path="/" />
                <AsyncRoute
                    path="/about"
                    getComponent={() =>
                        import('views/About').then((mod) => mod.default)
                    }
                />
            </Router>
        </>
    );
}
