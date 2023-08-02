import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    )
  }
}

function mapStateToProps(state){ //STATE BAĞLANDI
  return {counter:state.counterReducer} //state bilgisini counterReducerdan çek
}

export default connect(mapStateToProps)(Counter);
