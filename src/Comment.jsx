export default function Comment({comment}) {
    const {name, email, body} = comment;
    // console.log(comment)
    return (
        <div className="card">
            <h4>{name}</h4>
            <h6>{email}</h6>
            <p>{body}</p>
        </div>
    )
}