import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyAlert from "./components/MyAlert";
import Container from "react-bootstrap/esm/Container";
import history from "./data/history.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <section>
        <Container>
          <MyAlert />
        </Container>
      </section>
      <section>
        <Container>
          <BookList book={history} />
        </Container>
      </section>
    </div>
  );
}

export default App;
