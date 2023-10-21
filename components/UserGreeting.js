import React , { Component } from 'react';

class UserGreeting extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            isLogged: false
        }
    }
    render(){
        // fourth approach using short circuit operator(use if we want to display something or nothing)
        return this.state.isLogged && <div>Welcome Saksham</div>
        // ternary condition approach (this is the best one)
        // return(
        //     this.state.isLogged?<div>Welcome Saksham</div>:<div>Welcome Guest</div>
        // )
        // conditional rendering using elemental variable approach
        // let message
        // if(this.state.isLogged) 
        // {
        //     message=<div>Welcome Saksham</div>
        // }
        // else
        // {
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // conditional rendering using if-else statements, also if-else statements do not work inside jsx
        // if(this.state.isLogged){
        //     return(
        //         <div>Welcome Saksham</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return(
        //     <div>
        //         <div>Welcome Saksham</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting