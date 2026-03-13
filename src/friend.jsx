export default function Friend({friend}) {
    console.log(friend)
    const {name, email, website} = friend;
    return (
        <>
            <div className="card">
                <h4>{name}</h4>
                <p>{email}</p>
                <p>{website}</p>
            </div>
        </>
    )
}