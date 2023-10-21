import React , {Component} from 'react' ;

class ClassClick extends Component{
    clickHandler()
    {
        console.log('ok')
    }
    render()
    {
        return(
            <div onClick={this.clickHandler}>
                <button>Click</button>
            </div>
        )
    }
}

export default ClassClick