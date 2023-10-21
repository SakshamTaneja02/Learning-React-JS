import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Saksham'
      }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Saksham'
            })
        },2000)
    }

    render() {
        console.log('ParentComp Render')
        return (
      <div>
        ParentComp
        {/* <RegComp name={this.state.name} ></RegComp>
        <PureComp name={this.state.name} ></PureComp> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
