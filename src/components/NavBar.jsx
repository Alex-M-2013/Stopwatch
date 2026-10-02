import "../styles/NavBar.css";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const NavBar = () => (
    <div id="navbar">
        <h1>Stopwatch</h1>
        <ThemeSwitcher />
    </div>
);
