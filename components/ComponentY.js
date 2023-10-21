import React from 'react'
import { useContext } from 'react'
import ComponentZ from './ComponentZ'
import { UserContext, ChannelContext } from '../App'


function ComponentY(){
    
    const  user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    
    return(
        <div>
            <ComponentZ/>
            {user} - {channel}
        </div>
    )
}

export default ComponentY