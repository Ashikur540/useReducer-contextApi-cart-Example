import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import { store } from "./redux/store";
import routes from "./routes/routes";



function App() {
  return (
    <Provider store={store}>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </Provider>
  );
}

export default App;
