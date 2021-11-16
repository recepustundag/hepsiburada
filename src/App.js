/* style */
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "./actions/product";
import "./assets/scss/App.scss";
import Header from "./components/Header";

const Wrapper = React.lazy(() => import("./components/Wrapper"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <Wrapper />
      </Suspense>
    </div>
  );
}

export default App;
