//By default, React is a single-page application (SPA), meaning it only has one HTML file (index.html). But we often need multiple views or pages (e.g., Home, About, Contact). React Router lets you create these pages and navigate between them without refreshing.
import { BrowserRouter,Routes,Route } from "react-router-dom";

//import pages andcomponents

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <div className="pages">
      <Routes>
        <Route
        path="/"
        element={<Home/>}
        >
        </Route>
      </Routes>
     </div>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
