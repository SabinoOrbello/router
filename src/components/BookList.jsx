import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import CommentArea from "./CommentArea";
class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBookAsin: null,
  };
  changeSelectedBook = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };
  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Inserisci il titolo del libro.."
              className="mb-2"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Row>
              {this.props.book
                .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
                .map((b) => (
                  <Col key={b.asin}>
                    <SingleBook book={b} changeSelectedBook={this.changeSelectedBook} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>{this.state.selected && <CommentArea asin={this.state.book.selectedBookAsin} />}</Col>
        </Row>
      </>
    );
  }
}
export default BookList;
