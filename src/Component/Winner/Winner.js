import "./Winner.css"
const Winner = (props) => {
    return (
        <div className="winner-container">
            <div className={"text"}>
                <div>
                    <div>
                        Player {props.winner} wins!
                    </div>
                    <button onClick={props.resetHandler}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Winner;