import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const countSixes = sixes + 1;

        setRuns(updatedRuns)

        setSixes(countSixes);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)

        const countFours = fours + 1;
        setFours(countFours);
    }

    return (
        <div>
            {
                runs >= 100 && <p>You scored 100</p>
            }
            {
                runs >= 50 && <p>You scored 50</p>
            }
            <h1>Total six: {sixes}</h1>
            <h1>Total four: {fours}</h1>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}