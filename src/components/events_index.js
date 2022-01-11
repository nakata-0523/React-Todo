import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Link }　from 'react-router-dom'　　//リンク機能を有するパッケージ

import { readEvents } from '../actions';

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key = {event.id}>
        <td>{ event.id }</td>
        <td>{ event.title }</td>
        <td>{ event.body }</td>
      </tr>
    ))
  }

  render () {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            { this.renderEvents() }
          </tbody>
        </table>

        <Link to="/events/new">New Events</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })     //値の取得  eventsをキーにしてstateのeventsを取得

const mapDispatchToProps = ({ readEvents }) //下のコードの省略版
// const mapDispatchToProps = dispatch => ({       //状態遷移の処理
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
