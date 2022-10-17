import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import { canvas_size } from "./constants";
import store from "./store";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CanvasBoard height={canvas_size.height} width={canvas_size.width} />
    </Provider>
  );
};

export default App;
