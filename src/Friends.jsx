import { use } from "react"
import Friend from "./friend";

export default function Friends({friendsPromise}) {
    const friends = use(friendsPromise);
    console.log(friends);
    return (
        <>
            <h1>Total Friends: {friends.length}</h1>
            {
                friends.map( friend => <Friend key={friend.id} friend={friend}></Friend> )
            }
        </>
    )
}