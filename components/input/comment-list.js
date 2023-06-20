import classes from "./comment-list.module.css";

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.commentsList.map((comment) => (
        <li key={comment._id}>
          <p>
            {comment.newComment.eventId} - {comment.newComment.text}
          </p>
          <div>
            By <address>{comment.newComment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
