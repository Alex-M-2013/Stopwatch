import "./App.css";
import { NavBar } from "./components/NavBar";
import { Stopwatch } from "./components/Stopwatch";
import { GitHubLink } from "./components/GitHubLink";

export const App = () => (
    <>
        <NavBar />

        <div id="container">
            <Stopwatch />
        </div>

        <GitHubLink />
    </>
);
