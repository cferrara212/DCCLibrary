import React, { Component } from 'react';
import './App.css';
import TitleBar from "./TitleBar/TitleBar"


class App extends Component {
    constructor(props){
        super(props);
        this.books=[
            {title: "Ready Player One", author: "Earnest Cline"},
            {title: "All The Light We Cannot See", author: "Anthony Doerr"},
            {title: "The First And Last Freedom", author: "Juda Krishnamurit"},
        ];
        this.state ={
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber ++;
        if(tempBookNumber == this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToLastBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber --;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length -1
        }
        this.setState({
            bookNumber: tempBookNumber
        })
            
    }

render (){
    return(
        <div className="container-fluid">
            <TitleBar  />
            <div className="row">
                <div className="col-md-4">
                    {/* button here to move to previous book viewed */}
                    <button onClick={this.goToLastBook}>Previous Book</button>
                </div>
                    
                <div className="col-md-4">
                    {/*display book */}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                </div>
                    
                <div className="col-md-4">
                    {/* button here to move to next book viewed */}
                    <button onClick={this.goToNextBook}>Next Book</button>
                </div>
            </div>
            
        </div>
    )
}
}

export default App;