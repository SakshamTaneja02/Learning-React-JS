import React from 'react';
import Person from './Person';

function NameList(){
    const names = [
        {
            id:'1',
            name:'A'
        },
        {
            id:'2',
            name:'B'
        },
        {
            id:'3',
            name:'C'
        }
    ]
    const nameList = names.map((name, index) => <Person key={index} person={name} />)
    return(
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList