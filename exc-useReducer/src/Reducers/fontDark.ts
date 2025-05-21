type State = {
    isDark: boolean,
    fSize: number
}

type Action ={
    type: "dark" | "increase" | "reduce"
}

const properties = (state: State, action : Action): State=>{
    switch(action.type){
        case "dark":
            return {isDark: !state.isDark, fSize: state.fSize}
        case "increase":
            return {fSize: state.fSize+1,  isDark: state.isDark}
        case "reduce":
            return {fSize: state.fSize-1,  isDark: state.isDark}
        default:
            return state
    }
}

export default properties