import "./App.css";
import Description from "./componetes/Description";
import Image from "./componetes/Image";
import Name from "./componetes/Name";
import Price from "./componetes/Price";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function App() {
  let firstName = "yasmine benabda";
  return (
    <main>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="App">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/s/a/sans-titre-1_877.jpg"
          />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Card.Text>
              <Price />
            </Card.Text>
            <Button variant="primary">Ajouter au panier</Button>
          </Card.Body>
        </Card>
        {firstName ? (
          <div>
            <h1> Hello {firstName}</h1>
            <img
              src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/10/iphone-1665068319.jpg"
              alt=""
              width="300px"
            />
          </div>
        ) : (
          <h1>Hello there</h1>
        )}
      </div>
    </main>
  );
}

export default App;
