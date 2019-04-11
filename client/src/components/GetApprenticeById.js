import React, { Component } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';


class GetApprenticeById extends Component {
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
      fetch(`/techtonica/apprentices/${this.state.value}`)//this is the result
            .then((res) => {
            return res.json()})
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    item: result, //saving obj from 1 event into item obj
                });
                console.log('result: ' , {result})
                },
                // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log({error})
                }
            )
//TODO: can I change this to be a line that appears on screen after submitting instead of alert
  alert(this.state.value);
    //displayMe //FIXME: want to display chosen id info and display
    
    event.preventDefault(); //TODO: need further explaination, and wth is the default
     }

  
    render() {
      // console.log(this.state.item.result)
      const { value, result, item, items } = this.state; //allows this.state to be assumed
      const { handleSubmit, handleChange } = this; 
      return (
        <section>
          <form onSubmit={handleSubmit}>
            <label>
              Input An ID Number:
              <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          
          {/* <div style={{color: "white"}}>
          {item ? item.result.first_name : null}
          </div>  */}
        {/* TODO: should show after click to Submit // ComponentDidMount or ComponentDidUpdate or UpdateDidMount */}
         {items.map(item => ( 
           <div key={item.name} className="row"> 
            {/* <CardDeck> */}
            {/* <CardGroup> */}
            <Card border="dark" style={{ width: '18rem', color: 'black'}}>
                <Card.Header>Name: {item.name} </Card.Header>
                <Card.Body>
                  <Card.Title>Date: {item.date}</Card.Title>
                  <Card.Text> City: {item.city} <br/> Topic: {item.topic}
                  </Card.Text>
                </Card.Body>
              </Card>
            {/* </CardDeck> */}
            {/* </CardGroup> */}
            </div>
         ))}
        </section>
      );
    }
  }
// }
    


  export default GetApprenticeById;