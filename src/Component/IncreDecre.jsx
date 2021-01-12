import React, {Component} from 'react';

export default class IncreDecre extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            count: this.props.amount,
            countZero: false,
        }
    }
    
    increase = () => 
    {
        let num = this.state.count;
        this.setState({count: num + 1, countZero: false});
    }

    decrease = () => 
    {
        let num = this.state.count;
        if(num === 0)
        {
            this.setState({countZero: true});
        }else{
            this.setState({count: num - 1});
        }
    }
    
    render()
    {
        return(
            <div>
                <button onClick = {this.increase}>Increment</button>
                <button onClick = {this.decrease}>Decrement</button>
                {this.state.countZero? <h1>Cannot go below zero</h1> : <h1>{this.state.count}</h1>}
            </div>
        );
    }
}