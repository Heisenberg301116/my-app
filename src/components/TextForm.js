import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here")

    const f = () => {
        let upper_case_text = text.toUpperCase();
        setText(upper_case_text)
        props.alert_fun('success', "Converted to Upper Case !!!")
    }

    const clean = () => {
        setText('')
        props.alert_fun('success', "Cleared the text box !!!")
    }

    const g = (event) => {
        setText(event.target.value)
    }

    const toggle_style = (color) => {
        if (color == "black") {
            document.title = "Dark Mode"
            return {
                backgroundColor: props.color == "white" ? "white" : "black",
                color: props.color == "white" ? "black" : "white",                
            }
        }
        else {
            document.title = "Light Mode"
            return {
                backgroundColor: props.color == "white" ? "white" : "black",
                color: props.color == "white" ? "black" : "white"
            }
        }
    }

    return (
        <>
            <div style={{ color: props.color == "black" ? "white" : "black" }}>
                <h1>{props.heading}</h1>

                <div className="text-box" >
                    <div>
                        <textarea className="form-control" id="myBox" rows="10" value={text} onChange={g} style={toggle_style(props.color)}></textarea>
                    </div>

                    <button className="btn btn-primary my-2" onClick={f}>Convert to Uppercase</button>

                    <button className="btn btn-primary mx-2 my-2" onClick={clean}>Clear</button>
                </div>

            </div >

            <div className='my-5' style={{ color: props.color == "black" ? "white" : "black" }}>
                <h2>Your text summary</h2>
                <p>Total words = {text.split(" ").length}</p>
                <p>Total characters = {text.length}</p>
                <p>{text}</p>
            </div>
        </>
    )
}