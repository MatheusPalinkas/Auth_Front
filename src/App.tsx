import { Router } from "./router";
import { Loading } from "./components/Loading";

import { LoadingContextProvider } from "./contexts/LoadingContext";

import "./styles/reset.css";

function App() {
  return (
    <LoadingContextProvider>
      <Loading />
      <Router />
    </LoadingContextProvider>
  );
}

export default App;
