import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Card style={{ width: "14rem", border: this.state.selected ? "3px solid red" : "none" }}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              this.setState({ selected: !this.state.selected });
              this.props.changeSelectedBook(this.props.book.asin);
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            {/*this.state.selected && <CommentArea asin={this.props.book.asin} /> */}
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SingleBook;
