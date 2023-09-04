import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import "./App.css";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import Home from "./Components/Home/Home";
import Productos from "./Components/Productos/Productos";
import Cart from "./Components/Cart/Cart";
import Empresa from "./Components/Empresa/Empresa";
import Marcas from "./Components/Marcas/Marcas";
import Producto from "./Components/Producto/Producto";
import MyUser from "./Components/User/User";
import Shipping from "./Components/Cart/Shipping";
import PaymentMethod from "./Components/Cart/PaymentMethod";
import Placeholder from "./Components/Cart/Placeorder";
import OrderScreen from "./Components/Cart/OrderScreen";
import PrivateRoute from "./PrivateRoute";
import ComprobationRoute from "./ComprobationRoute";
import LogCallback from "./Components/Login/log_callback";
import Log_out from "./Components/Login/log_out";

import Chat from "./Components/chatbot";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Nav />

          <Wrapper>
            <Routes>
              <Route element={<Log_out />} path="/login/singout" />
              <Route element={<ComprobationRoute />}>
                <Route element={<LogCallback />} path="/login/callback" />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route element={<MyUser />} path="/myUser" />
                <Route element={<Shipping />} path="/shipping" />
                <Route element={<PaymentMethod />} path="/payment" />
                <Route element={<Placeholder />} path="/placeorder" />
                <Route element={<OrderScreen />} path="/order/:id" />
              </Route>

              <Route element={<Home />} path="/" />
              <Route element={<Productos />} path="/productos" />
              <Route element={<Producto />} path="/productos/:id" />
              <Route element={<Cart />} path="/carrito/:id?" />

              <Route element={<Empresa />} path="/empresa" />
              <Route element={<Marcas />} path="/marcas" />
            </Routes>
          </Wrapper>

          <Chat />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
