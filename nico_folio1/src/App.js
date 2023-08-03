import "./App.css";
import "./components/principal/example.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Example } from "./components/principal/Example";
import Titulo from "./components/principal/Titulo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Example />} errorElement={<h1>Error Router</h1>}>
      <Route index element={<Titulo />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
