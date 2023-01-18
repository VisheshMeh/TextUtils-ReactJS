import React, {useState} from 'react'

export default function About() {
    const [myStyle,setMyStyle]= useState(
    {
        color:'black',
    backgroundColor : 'white'
    
    })
    const [btnText , setbtnText] = useState("Enable dark mode")
        const toggleStyle =() =>{
        if(myStyle.color==='black')
        {
        setMyStyle({
            color : 'white',
            backgroundColor : 'black',
            border: '1px solid white'
        })
        setbtnText("Enable light mode")
    }
    else{
        setMyStyle({color:'black',
        backgroundColor: 'white'
       
    })
    setbtnText("Enable dark mode")
    }
    }
  
<div className="Container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
    </div>
    
}
