import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("All the text has been converted to uppercase!", "SUCCESS");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("All the text has been converted to lowercase!", "SUCCESS");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("All the text written previously was cleared !", "SUCCESS");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

   
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Text has been copied to clipboard!", "SUCCESS");
    }

    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All the extra space available in text was removed!", "SUCCESS");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'rgb(228, 188, 3)':'#black',textAlign:'center'}}> 
            <h1 className='mb-4'style={{textAlign:'center',color: 'rgb(228, 188, 3)'}}>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#787878':'#E5E4E2', color: props.mode==='dark'?'black':'#black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#black',textAlign:'centre'}}>
            <h2 style={{textAlign:'center',color: '#E4BC03'}}>SUMMARY :</h2>
            <p style={{textAlign:'center',color: '#E4BC03'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} WORDS & {text.length} CHARACTERS</p>
            <p style={{textAlign:'center',color: '#E4BC03'}}>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} MINUTES OF TIME SPENT TO READ THIS CONTENT</p>
            <h2 style={{textAlign:'center',color: '#E4BC03'}}>PREVIEW</h2>
            <p style={{textAlign:'center',color: '#E4BC03',fontSize:'2rem'}}>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}

