import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Link }　from 'react-router-dom'　　//リンク機能を有するパッケージ

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions';

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key = {event.id}>
        <TableRowColumn>{ event.id }</TableRowColumn>
        <TableRowColumn>
          <Link to={ `/events/${ event.id }` }>
            { event.title }
          </Link>
        </TableRowColumn>
        <TableRowColumn>{ event.body }</TableRowColumn>
      </TableRow>
    ))
  }

  render () {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={ style } containerElement={<Link to="/events/new"/>}>
          <ContentAdd /> {/*ボタンの＋マーク*/}
        </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll = { false }
            adjustForCheckbox = { false }
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>TITLE</TableHeaderColumn>
              <TableHeaderColumn>BODY</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox = { false }>
            { this.renderEvents() }
          </TableBody>
        </Table>
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
