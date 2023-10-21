import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentZ(){
    return(
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User Context Value {user}, {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentZ