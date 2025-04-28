import React from 'react'

const App = () => {

  const Show = (name,e) => {
    // alert(`My Name is ${n}`)
    console.log(e);

    alert(`Nmae is:${name}, Type: ${e.type}, Name: ${e.target.name}, Value: ${e.target.value}, point: ${e.pageX}`)
  }
  return (
    <>
      {/* <h1>Hellow</h1>
      <button onClick={Show}>Click</button> */}

      {/* when you pass argument */}
      {/* <h1>Hellow</h1>
      <button onClick={() => { Show("Imran") }}>Click</button> */}

      {/* <h1>Hellow</h1>
      <button onClick={Show} name="btn" value="20">Click</button> */}


      <h1>Hellow</h1>
      <button name='myBtn' value="90" onClick={(e) => { Show("Imran", e) }}>Click</button>
    </>
  )
}

export default App