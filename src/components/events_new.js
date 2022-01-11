import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link }　from 'react-router-dom'　　//リンク機能を有するパッケージ

//import { postEvents } from '../actions';

class EventsNew extends Component {
  render () {
    return (
      <React.Fragment>
          <div>foo</div>
      </React.Fragment>
    )
  }
}

//const mapDispatchToProps = ({ postEvents }) //下のコードの省略版
// const mapDispatchToProps = dispatch => ({       //状態遷移の処理
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(null, null)(EventsNew)
