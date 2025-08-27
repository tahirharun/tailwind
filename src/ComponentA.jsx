import { useState } from "react"
import ComponentB from "./ComponetB"

function ComponentA(){
    const {user, setUser} = useState("haruntahir")
    return(
        <div className="box">
           <h1>ComponentA</h1> 
           <h2>{`Hello${user}`}</h2>
            <ComponentB />
        </div>
    )

}
export default ComponentA