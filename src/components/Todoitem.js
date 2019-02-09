import React, { Component } from 'react'
//protypes is imported from below
import PropTypes from 'prop-types';

export class Todoitem extends Component {

  //method to set the style of a todo item
getStyle = () => {
      return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        //ternary operator that returns a css style based on the value of the completed boolean in the todo obj
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    }

    // markComplete = (e) => {
    //   console.log(this.props)
    // }

    //method will generate an error props of undefined this unless this is bound to the method
    // markComplete(e){
    //   console.log(this.props)
    // }

  render() {

    //deconstruction of the todo object to simply var reference in the code to be returned
    const { id, title } = this.props.todo;

    return (

      
      //jxs code may include inline styling. styles do not use hyphens instead use camelcase
      //<div style={{ backgroundColor: '#f4f4f4'}}>

      //may also use a variable to insert a style. Single curly brackets are needed for var reference
      // <div style={itemStyle}>

      //the style may also be set using a function
      <div style={this.getStyle()}>
        <p>
          {/*<input type="checkbox" onChange={this.props.markComplete.bind(this)}/>*/}

          {/*<input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> {' '}
        { this.props.todo.title }</p>*/}

        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '} {/* add of empty space beside the check box */}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        
        </p>



      </div>
    )
  }
}

//proptype definition name starts with the class name
Todoitem.propTypes= {
  //proptype may be object or array etc and marked as required
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// const itemStyle ={
//   backgroundColor: '#f4f4f4'
// }

export default Todoitem
