import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'


class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
          this.props.dispatch(decreaseCounter()); //counterActions.js dosyasındaki increaseCounter değeri var demek. increaseCounter da counterReducerdan alır.payload ile 1 arttırır
        }}>

          1 azalt

        </button></div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(decreaseCounter, dispatch)
  }
}

export default connect(mapDispatchToProps)(DecreaseCounter);
