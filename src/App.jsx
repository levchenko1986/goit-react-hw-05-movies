import Routes from "./components/Routes/Routes";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import "./App.css";

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes />
    </Container>
  );
}
