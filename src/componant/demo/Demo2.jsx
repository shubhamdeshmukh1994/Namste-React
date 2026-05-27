import { useEffect, useMemo, useRef, useState } from "react";
import findPrime from "../../utils/primeNumber"

const Demo2 = ()=>{
    const [isDarkTheame, setIsDarkTheame]= useState(true);
    const [y, setY] = useState(0);
    console.log("Rendering...")
    let x = 0;
    const z = useRef(0);
    /** not z=0 but {current:0} */
    const i = useRef(null);
    // useEffect(()=>{
    //     i.current = setInterval(()=>{
    //         console.log("Interval "+ Math.random())
    //     },1000);

    //    return(()=>{
    //     clearInterval(i.current);
    //    }) 
    // },[])
    return(
        <div className={
            "m-4 p4 w-96 h-96 border border-black"}
        >
            <div>
                <button
                className="m-2 p-2 bg-gray-100"
                onClick={()=>{
                    i.current = setInterval(()=>{
                        console.log("Interval "+ Math.random())
                    },1000);
                }}
                >start Interval</button>
            </div>
            <div>
                <button
                className="m-2 p-2 bg-gray-100"
                onClick={()=>{
                    clearInterval(i.current)
                }}
                >Stop Interval</button>
            </div>
            <div>
                <button
                className="m-2 p-2 bg-gray-100"
                onClick={()=>{
                    x=x+1;
                    console.log("x = : ",x)
                }}
                >increase x {x}</button>
            </div>
            <div>
                <button
                className="m-2 p-2 bg-gray-100"
                onClick={()=>{
                    setY(y+1)
                    console.log("y = : ",y)
                }}
                >increase y {y}</button>
            </div>
             <div>
                <button
                className="m-2 p-2 bg-gray-100"
                onClick={()=>{
                    z.current = z.current+1;
                    console.log("z = ",z.current)
                }}
                >increase Ref {z.current}</button>
            </div>

            
            
        </div>
    )
}

export default Demo2;