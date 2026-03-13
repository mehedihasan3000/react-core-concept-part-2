import { use } from "react"
import Comment from "./Comment";

export default function Comments({commentPromise}) {

    const comments = use(commentPromise);
    console.log(comments);
    
    return (
        <div className="card">
            <h3>All Comments are here: {comments.length}</h3>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}