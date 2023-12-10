import { Header } from "./components/Header";
import "./index.css";
import { RoutesMain } from "./routes/routesMain";

export default function App() {
  return (
    <div className=" bg-gray-900 min-h-screen">
      <Header/>
      <RoutesMain/>
    </div>
  )
}
