
/*  import { useReducer } from "react"

const initialState = { color: "blue" }

const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return { color: "red" }
    case 'green':
      return { color: "green" }
    case 'blue':
      return { color: "blue" }
    default:
      return state
  }
}

const Usereducers = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <button onClick={() => dispatch({ type: 'red' })}>red</button>
      <button onClick={() => dispatch({ type: 'green' })}>green</button>
      <button onClick={() => dispatch({ type: 'blue' })}>blue</button>
      <br />
      <div style={{ width: "300px", height: "500px", backgroundColor: state.color }}></div>
    </>
  )
}

export default Usereducers   */

/*  import { useEffect,useState,useMemo } from "react";
const App=()=>{
const [myadd,setMyAdd]=useState(0);
const [mysub,setMySub]=useState(100);

const multi=useMemo(()=>{
   console.log("************");
   return myadd*10;
},[myadd])

return(
<>
<h1>My add: {myadd}</h1>
<h2>my Sub:{mysub}</h2>
<h1>My multiplication:{multi}</h1>
  <button onClick={()=>{setMyAdd(myadd+1)}}>Additoon</button>
   <button onClick={()=>{setMySub(mysub-1)}}>Subtraction</button>
</>
)
}
export default App;  */



























