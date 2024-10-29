import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { blog } from "./Data/Blog";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function App() {
  let headerInfo = {
    email: "bariksatya113@gmail.com",
    phone: "6371011439",
  };
  return (
    <>
      <Header headerInfo={headerInfo}>
        <h1>This is Header part</h1>
      </Header>
      <Container>
        <Row>
          <Col className="col-12 text-center py-4">
            <h1>Our courses</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Course1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Course2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Course3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Course4</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {blog.map((v, i) => {
            return <ProductItems pitems={v} key={i} />;
          })}
        </Row>
        <Footer />
      </Container>
    </>
  );
}
function ProductItems({ pitems }) {
  return (
    <div className="col-lg-3 mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>{pitems.body}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default App;
