import { Navigate, Route, Routes } from "react-router";
import Characters from "./pages/Characters";
import DetailsCharacters from "./pages/DetailsCharacters";
import Planets from "./pages/Planets";
import DetailsPlanet from "./pages/DetailsPlanet";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />

      <main className="ml-40 p-8">
        <Routes>
          <Route path="/" element={<Navigate to="/characters" replace />} />

          <Route path="/characters" element={<Characters />} />

          <Route path="/character/:id" element={<DetailsCharacters />} />

          <Route path="/planets" element={<Planets />} />

          <Route path="/planet/:id" element={<DetailsPlanet />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
