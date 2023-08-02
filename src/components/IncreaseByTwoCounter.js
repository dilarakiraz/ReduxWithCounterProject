import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter} from '../redux/actions/counterActions'
import { connect } from 'react-redux'

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e=>{
          this.props.dispatch(increaseByTwoCounter()); //counterActions.js dosyasındaki increaseCounter değeri var demek. increaseCounter da counterReducerdan alır.payload ile 1 arttırır
        }}>

          2 arttır

        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) 
  }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
