import { ThemeProvider } from "./components/Theme/ThemeProvider"

import { Calculator } from "./components/Calculator/Calculator"
import { ThemeToggle } from "./components/Theme/ThemeToggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="flex w-full h-screen justify-center items-center">
        <Calculator />
      </div>
      <ThemeToggle />
    </ThemeProvider>
  )
}

export default App
