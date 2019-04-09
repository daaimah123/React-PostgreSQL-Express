import React, { Component } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';


class GetById extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '', 
        error: null, 
        isLoaded: false, 
        items: [],
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value}); //id number typed into value box
    }
  
    handleSubmit(event) {
      fetch(`/events/${this.state.value}`)//this is the result
            .then((res) => {
            return res.json()})
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    item: result, //saving obj from 1 event into item obj
                });
                console.log({result})
                },
                // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log({error})
                //FIXME: not showing
                // console.log("Name" + this.item.state.name)
                // console.log("Date" + this.item.state.date)
                // console.log("City" + this.item.state.city)
                }
            )
//TODO: can I change this to be a line that appears on screen after submitting instead of alert
    alert('An event name was submitted: ' + this.state.value);
    console.log("name: " + this.state.item.name)
    event.preventDefault(); //TODO: need further explaination, and wth is the default
     }

  
    render() {
      const { value } = this.state; //allows this.state to be assumed
      const { handleSubmit, handleChange } = this; 
      return (
        <section>
          <form onSubmit={handleSubmit}>
            <label>
              Get An Event:
              <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        {/* TODO: should show after click to Submit */}
         {/* {items.map(item => ( */}
          {/* <div key={item.name} className="row">  */}
            {/* <CardDeck> */}
            {/* <CardGroup> */}
            {/* <Card border="dark" style={{ width: '18rem', color: 'black'}}>
                <Card.Header>Name: {item.name} </Card.Header>
                <Card.Body>
                  <Card.Title>Date: {item.date}</Card.Title>
                  <Card.Text> City: {item.city} <br/> Topic: {item.topic}
                  </Card.Text>
                </Card.Body>
              </Card> */}
            {/* </CardDeck> */}
            {/* </CardGroup> */}
            {/* </div> */}
          
        ))}
        </section>
      );
    }
  }
// }
    


  export default GetById;