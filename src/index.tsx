import ReactDOM from "react-dom";
import Field from "./components/field";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <GlobalStyle>
      <Field />
    </GlobalStyle>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
