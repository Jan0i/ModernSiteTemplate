import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
