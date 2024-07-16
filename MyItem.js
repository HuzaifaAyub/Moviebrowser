import React from "react";

class Item extends React.Component{
   
   constructor(props){
    super(props)

    this.state={
        clicks:0,
        totalRemaining: 1000,
    }
   }



    clickme(){
        this.setState({
            clicks: this.state.clicks +1,
            totalRemaining: this.state.totalRemaining-1
        })
    
   }
   
    render(){
        return(<div>
            <button onClick={() => this.clickme()}>wasssup gang {this.props.name}</button>
            <span>{this.state.clicks} is the number of click, {this.state.totalRemaining}</span>
            </div>
            )
    }
}

export default Item;