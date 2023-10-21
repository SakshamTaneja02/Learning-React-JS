import React , { Component } from 'react';

// using JS 
// class Welcome = () =>  {
//     return (
    // <div className='dummyClass'>
        // <h>Hello Saksham</h>
    // </div>
// )
// }

// using JSX tags
// const Welcome = () => {
//     return React.createElement(
//         'div',
//         {id:'1', className:'dummyClass'},
//         React.createElement('h1',null,'Hello Saksham')
//     )
// }

// class Welcome extends Component{
//     render()
//     {
//         return <h>Hello {this.props.name}</h>
//     }
// }

// destructuring of class
class Welcome extends Component{
    render()
    {
        const {name,heroName} = this.props
        // const {stat1,state2} = this.state code to destructuring a state 
        return(
            <div>
                {name} is {heroName}
            </div>
        )
    }
}

export default Welcome ;