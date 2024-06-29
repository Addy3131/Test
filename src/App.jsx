import { useState } from 'react'
import { LearnComponent } from './components/learncomponent'
import { LearnComponent1 } from './components/learncomponent1'
import { Learnprops } from './components/learnprops'



function App() {
  let roll="roll baby"
  return (
    <>
    {/* <LearnComponent/>
    <LearnComponent1/> */}
    <Learnprops name="addy" roll={roll}/>
 
    </>
  )
}

export default App
