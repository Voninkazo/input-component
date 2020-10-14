import React from 'react';
import Inputs from './Inputs';

function App() {
    return (
            <div>
                <Inputs>Placeholder</Inputs>
                <Inputs error>Placeholder</Inputs>
                <Inputs disabled>Placeholder</Inputs>
                <Inputs helperTexts="Some texts">Placeholder</Inputs>
                <Inputs helperTexts="Some texts" error>Placeholder</Inputs>
                <Inputs startIcon="mobile"></Inputs>
                <Inputs endIcon="thumbup"></Inputs>
            </div>
    )   
}

export default App;