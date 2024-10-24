import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="absolute bottom-5 right-5">
            <Button variant="secondary" className="rounded-full w-12 h-12" onClick={toggleTheme}>
                {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </Button>
        </div>
    )

    function toggleTheme() {
        if (theme === 'dark') setTheme('light');
        else setTheme('dark');
    }
}