import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout/>,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />
  //       },
  //       {
  //         path: "about",
  //         element: <About />
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />
  //       }
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userId" element={<User />} />
        {/* <Route loader={githubInfoLoader} path="github" element={<Github />} /> */}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
