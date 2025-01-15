import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Master from "./components/master";
import Card from "./components/card";

function App() {
  return (
    <>
      <Header />;
      <Master />
      <Card />
      <Card />
    </>
  );
}

export default App;
