import React from 'react';
import Inputs from './Inputs';

function App() {
    return (
            <div>
                <div>
                     <Inputs>Placeholder</Inputs>
                </div>
               <div> 
                   <Inputs error>Placeholder</Inputs>
                </div>
                <div> 
                   <Inputs disabled>Placeholder</Inputs>
                </div>
                <div className="flex-container">
                    <Inputs helperTexts="Some texts">Placeholder</Inputs>
                    <Inputs helperTexts="Some texts" error>Placeholder</Inputs>
                </div>
                <div className="flex-container">
                    <Inputs startIcon="mobile">Placeholder</Inputs>
                    <Inputs endIcon="thumbup">Placeholder</Inputs>
                </div>
              <div>
                <Inputs value="input text">Placeholder</Inputs>
              </div>
              <div className="flex-container">
                <Inputs size="sm">Placeholder</Inputs>
                <Inputs size="md">Placeholder</Inputs>
              </div>
               <div>
                <Inputs fullWidth>Placeholder</Inputs>
               </div>
               <div> 
                   <Inputs multiLine rows="4"></Inputs>
                </div>
            </div>
    )   
}

export default App;