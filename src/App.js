import React from 'react';
import Form from './Components/Form'
import List from './Components/List'
import './App.css';
import TextField from './Components/TextField';
import Texts from './Components/Texts'

class App extends React.Component {
  state = {
    items: [],
    texts: [],
    errors: '',
    maxChar: 20
  }

  formSubmit = (e, formState) => {
    e.preventDefault()
    this.setState({items: [...this.state.items , formState]})
  }

  textSubmit = (e, text) => {
    e.preventDefault()
    if(text.message.length <= this.state.maxChar){
      this.setState({errors: ''})
      this.setState({texts: [...this.state.texts, text]})
    } else{
      this.setState({errors: 'Your Message is Too Long!'})
    }
  }
  
    render(){
      return (
        <div className="App">
          <h1>Form submit test App</h1>
          <h4>Enter your name and age to see your name and age</h4>
          
          <Form formSubmit = {this.formSubmit}/>
          <List items ={this.state.items}/>

          <h4>Write a text message</h4>
          <TextField maxChar = {this.state.maxChar} textSubmit = {this.textSubmit}/>
          {this.state.errors}
          <Texts texts = {this.state.texts} />
        </div>
    );}
}

export default App;
