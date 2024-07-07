import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductMen from "./pages/ProductMen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/men",
    element: <ProductMen />,
  },
  /* create the path for women */
  /* ... */
  {
    path: "/warenkorb",
    element: <Home />,
    /* create the page Warenkorb and call it for /warenkorb */
  },
  /* create the path for product detail */
  /* ... */
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/**
 *
 * alternative, older version of react router
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
{
  /* <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/men" Component={ProductMen} />
        <Route path="/women" Component={ProductWomen} />
        <Route path="/warenkorb" Component={Warenkorb} />
        <Route path="/product/:id" Component={ProductDetail} />
      </Routes>
    </BrowserRouter> */
}
