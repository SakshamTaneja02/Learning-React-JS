import React , {Component} from 'react';

class EventBind extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this) // part of the third method
    }
    // clickHandler()
    // {
    //     this.setState({
    //         message:'Googoogaagaa'
    //     })
    //     console.log(this)
    // } used for first second and third method
    clickHandler = () => {
        this.setState({
            message:' GooGOOgaga'
        })
    } // the fourth method (third and fourth are the modt prefered approaches third being the best for now)
    render()
    {
        return(
            <div>  
                <div>{this.state.message}</div> 
                {/* <button onClick={this.clickHandler}>Click</button> this statement gives an error  so to prevent it we use event binding*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> this method of event binding increase the complexity as we have to render this everytime  */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> same problem as above */}
                {/* <button onClick={this.clickHandler}>Click</button>  */}
                {/*  this is the best as binding happens once in render method */ }
                <button onClick={this.clickHandler}>Click</button>
             </div>
        )
    }
}

export default EventBind