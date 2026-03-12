import { use } from "react"

export default function Friends({friendsPromise}) {
    const friends = use(friendsPromise);
    console.log(friends);
    return (
        <>
            <h1>Total Friends: {friends.length}</h1>
        </>
    )
}