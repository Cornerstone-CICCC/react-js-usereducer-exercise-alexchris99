import { useReducer } from "react"
import properties from "../Reducers/FontDark"

export function State(){
    const [state, dispatch] = useReducer(properties, {isDark: false, fSize: 16})

  return (
    <div>
        <p style={{fontSize: `${state.fSize}px` }} className={state.isDark ? " text-white bg-black" : "text-black bg-white"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis veritatis ipsum cum doloribus distinctio veniam quod voluptatibus soluta nesciunt maiores corporis, eligendi dolorem delectus accusantium vel ratione, facere deleniti.</p>
        <button type="button"
            onClick={
                ()=>dispatch({
                    type: "dark"
                    })}>Toggle Dark Mode</button>
        <button type="button"
            onClick={
                ()=>dispatch({
                    type: "increase"
                    })}>Increase Font Size</button>
        <button type="button"
            onClick={
                ()=>dispatch({
                    type: "reduce"
                    })}>Decrease Font Size</button>
    </div>
  )
}