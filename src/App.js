import React, { Suspense, useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import NavBar from "./components/NavBar";
// import store from "./store/store";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <Provider store={store}>
//         <BrowserRouter>
//           <NavBar />
//           <div className="all-pages">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/cart" element={<Cart />} />
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </Provider>
//     </div>
//   );
// }

import Routes from "./routes/Routes";
import getRoutes from "./routes/route";
const App = () => {
  const [allRoutes, setAllRoutes] = useState([]);

  useEffect(() => {
    setAllRoutes([...getRoutes]);
  }, []);

  return (
    <Suspense fallback={null}>
      <Routes allRoutes={allRoutes} />
    </Suspense>
  );
};
export default App;
