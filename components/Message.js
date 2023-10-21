import React , {Component} from 'react';

class Message extends Component {
    constructor()
    {
        super()
        this.state={
            message: 'Welcome Chutiye' 
        }
    }

    changeMessage()
    {
        this.setState({
            message: 'Thank you Chutiye'
        })
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.changeMessage() }>Subscribe kar Chutiye</button>
            </div>
        )
    }
}

export default Message ;