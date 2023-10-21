import React from 'react' ;

// function Greet(){
//     return <h1>Hello Saksham</h1>
// } using JS Script

// using ES^ script

// const Greet = props => {
//     return (
//         <div>
//             <h>
//                 {props.name} 
//             </h>
//             {props.children}
//         </div>
//     )
// }

// destructuring props (Two Ways)
// first way
// const Greet = ({name,heroName}) =>
// {
//     return (
//         <div>
//             <h>
//                 Hello {name} aka {heroName} 
//             </h>
//         </div>
//     )
// }
// second way
const Greet = props =>
{
    const {name,heroName} = props
    return(
        <div>
            Hello {name} aka {heroName} 
        </div>
    )
}

export default Greet