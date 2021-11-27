import React, { useState } from "react";

function selectRandom(arr) {
    let arrLen = arr.length
    let idx = Math.floor(Math.random() * arrLen)
    return arr[idx]
}

const EightBall = props => {
    const prompts = props.answers
    const [Color, setColor] = useState("black")
    const [Msg, setMsg] = useState("Think of a question")
    const style = {
        backgroundColor: Color,
        borderRadius: "50%",
        color: "white",
        width: "150px",
        height: "150px",
        justifyContent: "center"
    }
    const updateBall = () => {
        let curPrompt = selectRandom(prompts)
        setColor(curPrompt.color)
        setMsg(curPrompt.msg)
    }
    return (
        <div style={style} onClick={updateBall}>
            <p style={{textAlign: "center", lineHeight: "150px", verticalAlign: "middle"}}>{Msg}</p>
        </div>
    )
}

export default EightBall;