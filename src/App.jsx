import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./index.css";
import { RoutesMain } from "./routes/RoutesMain";

export default function App() {
  return (
    <div className=" bg-gray-900 min-h-screen">
      <Header />
      <RoutesMain />
      <Footer />
    </div>
  );
}
