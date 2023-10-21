import React , { Component } from 'react'

class ClassCounterOne extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            cnt:0,
            name: ""
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.cnt} times`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.cnt !== this.state.cnt) {
            console.log("Document title")
            document.title = `Clicked ${this.state.cnt} times`
        }
    }

    increment = () => {
        this.setState({
            cnt: this.state.cnt+1
        })
    }
    
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={e=>{
                    this.setState({name: e.target.value})
                }}></input>
                <button onClick={this.increment}>Click Me {this.state.cnt}</button>
            </div>
        )
    }
}

export default ClassCounterOne