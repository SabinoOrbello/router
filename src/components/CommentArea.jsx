import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidUpdate = async (prevProps) => {
    if (this.props.asin !== prevProps.asin) {
      try {
        let resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjBmYjNkYWRhMDAwMThhNjlmNmQiLCJpYXQiOjE3MDQ4MDg3MDYsImV4cCI6MTcwNjAxODMwNn0.IvbhydGPB_jklLYAybAQ_kMZRYWPjHvo5fxaYf9uHhU",
          },
        });
        if (resp.ok) {
          let comments = await resp.json();

          this.setState({ comments: comments });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  render() {
    return (
      <>
        <div className="text-center">
          <CommentList commentsToShow={this.state.comments} />
          <AddComment asin={this.props.asin} />
        </div>
      </>
    );
  }
}
export default CommentArea;
