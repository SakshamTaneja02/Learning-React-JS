import React , { Component } from 'react';
import LifeCycleB from './LifecycleB';

class LifeCycleA extends Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
            name: 'Saksham'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('LifecycleA GetDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Sak'
        })
    }

    render(){
        console.log('LifecycleA render')
        return(
            <div>
                LifecycleA
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA