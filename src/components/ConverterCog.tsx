/*
REACT ZCONV by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// We import the library I wrote
// to convert between different
// number systems.
import * as zeppo from 'zeppo';

  
// Importing React to define our
// component.
import React from 'react';
  
// Defining our class-based component.
export class ConverterCog extends React.Component<
  {}, 
  {
    start: string,
    result: string,
    mode: string
  }
> {
    // Setting up
    // our stateful variables
    // here.
    constructor(props: any) {
        super(props);
        this.state = {
            start: '',
            result: '',
            mode: 'bin'
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.convertNum = this.convertNum.bind(this);
    }
    handleChange(event: any): void {
        this.setState(
            {
                start: event.target.value
            }
        )
    }

    changeMode(): void {
        if (this.state.mode === 'bin'){
            this.setState(
                {
                    mode: 'dec'
                }
            );
        }
        else {
            this.setState(
                {
                    mode: 'bin'
                }
            )
        }
    }
    convertNum(): void {
        const insult = 'R.O.F.L.'
        if (this.state.mode === 'bin'){
            if (zeppo.isBin(this.state.start) === true){
                this.setState(
                    {
                        result: zeppo.binToDec(this.state.start)
                    }
                );
            }
            else {
                this.setState(
                    {
                        result: insult
                    }
                );
            }
        }
        else {
            if (zeppo.isInt(this.state.start) === true){
                this.setState(
                    {
                        result: zeppo.decToBin(this.state.start)
                    }
                );
            }
            else {
                this.setState(
                    {
                        result: insult
                    }
                );
            }
        }
    }
    render(): React.ReactNode {
        return (
            <div className='content'>
             <input
              type='text'
              value={this.state.start}
              onChange={this.handleChange}
             />
             <button onClick={this.convertNum}>Compute</button>
             <button onClick={this.changeMode}>Switch Mode</button>
             <p>Mode: {this.state.mode}</p>
             <p>Result: {this.state.result}</p>
            </div>
        );
    }
}

export default ConverterCog;