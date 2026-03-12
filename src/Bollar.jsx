import { useState } from "react"

export default function Bollar() {

    const [ball, setBall] = useState(0);
    const [wideBall, setWideBall] = useState(0);
    const [noBall, setNoBall] = useState(0);

    const handleBall = () => {
        const countBall = ball + 1;
        setBall(countBall);
    }

    const handleWideBall = () => {
        const countWideBall = wideBall + 1;
        setWideBall(countWideBall);
    }

    const handleNoBall = () => {
        const countNoBall = noBall + 1;
        setNoBall(countNoBall);
    }

    return (
        <div>
            {
                ball === 6 && <p>Over Complete</p>
            }
            {
                wideBall && <p>Get out from the field for your wide ball</p>
            }
            {wideBall === 2 && <p>Fuck! Get out from the field for your 2 wide ball</p>}
            {noBall && <p>Now I will kill you for your no ball</p>}
            <p>Ball: {ball}</p>
            <p>No Ball: {noBall}</p>
            <p>Wide Ball: {wideBall}</p>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleNoBall}>No Ball</button>
            <button onClick={handleWideBall}>Wide Ball</button>
        </div>
    )
}