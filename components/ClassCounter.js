import React from 'react'
import { Component } from 'react'

class ClasssCounter extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            cnt: 0
        }
    }

    increment = () => {
        this.setState(prevState => {
            return{
                cnt:prevState.cnt+1
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Click ME :{this.state.cnt} </button>
            </div>
        )
    }
}

export default ClasssCounter