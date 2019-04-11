import React, { Component } from 'react';
import '../App.css';


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
                console.log('>>>>>>>>>>YOU FOUND THE RESULTS<<<<<<<<< ' , {result})
                },
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log({error})
                }
            )
    event.preventDefault();
     }

  
    render() {
      const { value } = this.state; //allows this.state to be assumed
      const { handleSubmit, handleChange } = this; 
      return (
        <section>
          <form onSubmit={handleSubmit}>
            <label>
              Submit ID to See Results in Console:
              <input type="text" placeholder="apprentice id here" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          
          {/* <div style={{color: "white"}}>
          {item ? this.showIdCard() : null}
          </div>  */}
        {/* TODO: should show after click to Submit // ComponentDidMount or ComponentDidUpdate or UpdateDidMount */}
        </section>
      );
    }
  }
// }
    


  export default GetApprenticeById;