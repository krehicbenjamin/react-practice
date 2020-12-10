import React, { Component } from 'react';


class JSFeatures extends Component {
    /*
    constructor() {
        super()
        this.state = {
            count: 0
        }
        
    }
    */


    state = {
        count : 0
    }

    increment = () => {
        this.setState(prevState => {
            return {                                //Arrow functions won't create their own this context thus will automatically adopt the this from the class that it's found in
                count: prevState.count + 1
            }
        })
    }
    
    decrement = () => {
        this.setState(prevState => {
            // this.setState(prevState => ({count: prevState.count + 1}) 
            return {
                count: prevState.count - 1
            }
        })
    }
    
    render() {
        const {count} = this.state;  // object destructuring 
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>    
        )
    }
}
 
export default JSFeatures;