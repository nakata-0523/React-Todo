import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'　　//リンク機能を有するパッケージ
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvents } from '../actions';

class EventsNew extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field

        return (
            <TextField
                hintText = { label }
                floatingLabelText = { label }
                type = { type }
                errorText = { touched && error }
                { ...input }
                fullWidth = { true }
            />
        )
    }

    async onSubmit(values) {
        await this.props.postEvents(values)
        this.props.history.push('/')
    }

    render () {
        const { handleSubmit, pristine, submitting, invalid } = this.props   //pristine フォームに値を入力しないとボタンが押せないようにする  submitting ボタンを押したらtrueを返す invalid バリデーションエラーがある時ボタンが押せないようにする
        const style = { margin : 12 }

        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <div><Field label="Title" name="title" type="text" component={ this.renderField } /></div>
                <div><Field label="Body" name="body" type="text" component={ this.renderField } /></div>

                <RaisedButton label="Submit" type="submit" style={ style } disabled={ pristine || submitting || invalid } />
                <RaisedButton label="Cancel" style={ style } containerElement={<Link to="/" />} />
            </form>
        )
    }
}

const validate = values => {
    const errors = {}

    //入力フォーム（Title, Body）に何も記入がない場合に入力してくださいを表示させる
    if (!values.title) errors.title = "Error a title, please."
    if (!values.body) errors.body = "Error a body, please."

    return errors
}

const mapDispatchToProps = ({ postEvents }) //下のコードの省略版

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
