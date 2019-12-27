import React, { Component } from 'react';
import ChoosePlayer from './ChoosePlayer';

export default class Status extends Component {
    handleSetPlayer(e){
        this.props.setPlayer(e)
    }

    renderHtml(){
        if (this.props.winner) {
            return(<h2>Winner is {this.props.winner}</h2>)
        }
        else{
            return this.props.player ?
            <h2>Next Player is {this.props.player}</h2> :
            <ChoosePlayer player={(e) => this.handleSetPlayer(e)} />
        }
    }
    
    render() {
        return (
            <span>{this.renderHtml()}</span>
        )
    }
}
