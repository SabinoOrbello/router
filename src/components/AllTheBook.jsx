import Card from "react-bootstrap/Card";
import history from "../data/history.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const AllTheBook = () => {
  return (
    <Container>
      <Row className="g-2">
        {history.map((book) => {
          return (
            <Col xs={12} md={4} key={book.asin}>
              <Card className="book-cover d-flex flex-column">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default AllTheBook;
