import { useMemo, useState } from "react";
import findPrime from "../../utils/primeNumber"

const Demo = ()=>{
    const [text, setText] = useState(0);
    const [isDarkTheame, setIsDarkTheame]= useState(true);
    console.log("Rendering...")
    const prime = useMemo(()=> findPrime(text),[text]);
    return(
        <div className={
            "m-4 p4 w-96 h-96 border border-black"+
            (isDarkTheame && " bg-gray-900 text-white")}
        >
            <div>
                <button
                className="m-2 p-2 bg-gray-100"
                onClick={()=>{setIsDarkTheame(!isDarkTheame)}}
                >Toggle Theame</button>
            </div>
            <div>
                <input 
                className="m-2 p-2 border border-black rounded-lg bg-gray-100"
                type="number"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                ></input>
            </div>
            <div>
                <h1>Nth prime No of {text} : {prime}</h1>
            </div>
        </div>
    )
}

export default Demo;