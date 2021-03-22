import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  // Declared as a class property and assigned an arrow function to it.
  // handleChange() will always be bound to the particular instance of the component it is defined in.
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) =>
      dispatch({
        type: "ADD_TODO",
        payload: formData,
      }),
  };
};

// no mapStateToProps() needed so null as first argument is ok
export default connect(null, mapDispatchToProps)(CreateTodo);

// OR

// handleSubmit = event => {
//     event.preventDefault();
//     this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={event => this.handleSubmit(event)}>
//           <p>
//             <label>add todo</label>
//             <input
//               type="text"
//               onChange={event => this.handleChange(event)}
//               value={this.state.text}
//             />
//           </p>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default connect()(CreateTodo);
