import ListGroup from "react-bootstrap/ListGroup";
const SingleComment = ({ comment }) => {
  return <ListGroup.Item className="mb-2">{comment.comment}</ListGroup.Item>;
};
export default SingleComment;
