import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Fotter from "./components/Fotter";
//import Homescreen from "./screens/Homescreen";
function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Fotter />
    </>
  );
}

export default App;
