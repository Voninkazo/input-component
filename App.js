import React, { Component } from 'react';
import Inputs from './Inputs';

class App extends Component {
  constructor() {
    super();
    this.state ={
      value : 'value from state',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
		this.setState({
			value,
		});
		console.log('value in state', this.state.value);
  }
  render() {
    return (
            <div>
              <h1>Sandy Input Components</h1>
                <div>
                  <p>{`<Input />`}</p>
                  <Inputs>Placeholder</Inputs>
                </div>
               <div> 
                  <p>{`<Input error />`}</p>
                  <Inputs error>Placeholder</Inputs>
                </div>
                <div> 
                  <p>{`<Input disabled />`}</p>
                  <Inputs disabled>Placeholder</Inputs>
                </div>
                <div className="flex-container">
                  <div className="flex-column">
                    <p>{`<Input helperTexts="Some texts" />`}</p>
                    <Inputs helperTexts="Some texts">Placeholder</Inputs>
                  </div>
                  <div className="flex-column">
                    <p>{`<Input helperTexts="Some texts" error />`}</p>
                    <Inputs helperTexts="Some texts" error>Placeholder</Inputs>
                  </div>
                </div>
                <div className="flex-container">
                <div className="flex-column">
                    <p>{`<Input startIcon />`}</p>
                    <Inputs startIcon="mobile">Placeholder</Inputs>
                </div>
                <div className="flex-column">
                    <p>{`<Input endIcon />`}</p>
                    <Inputs endIcon="thumbup">Placeholder</Inputs>
                </div>
                </div>
              <div>
              <p>{`<Input value="text" />`}</p>
                <Inputs
                 value="input text"
                 value={this.state.value}
						    handleChange={this.handleChange}
                />
              </div>
              <div className="flex-container">
              <div className="flex-column">
                <p>{`<Input size="sm" />`}</p>
                <Inputs size="sm">Placeholder</Inputs>
                </div>
                <div className="flex-column">
                <p>{`<Input size="smd" />`}</p>
                <Inputs size="md">Placeholder</Inputs>
                </div>
              </div>
               <div>
                <p>{`<Input fullWidth />`}</p>
                <Inputs fullWidth>Placeholder</Inputs>
               </div>
               <div> 
                   <p>{`<Input multiLine rows="4" />`}</p>
                   <Inputs multiLine rows="4">Placeholder</Inputs>
                </div>
            </div>
    )   
  }
}

export default App;