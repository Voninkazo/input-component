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
                <Inputs value="input text"></Inputs>
                <Inputs size="sm">Placeholder</Inputs>
                <Inputs size="md">Placeholder</Inputs>
                <Inputs fullWidth>Placeholder</Inputs>
                <Inputs multiLine rows="4"></Inputs>
            </div>
    )   
}

export default App;