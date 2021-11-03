import React, { Component } from 'react';
import './App.css';
import TitleBar from "./TitleBar/TitleBar"
import BookViewer from './BookViewer/BookViewer.jsx';
import CreateBook from './CreateBook/CreateBook';

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
        if(tempBookNumber === this.books.length){
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

    createNewBook = (newBook) => {
        console.log('from the create book on app component', newBook);
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length -1
        })
    }

render (){
    return(
        <div className="container-fluid">
            <TitleBar  />
            <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToLastBook} />
            <CreateBook createNewBook={this.createNewBook} />
        </div>    
    )
}
}

export default App;