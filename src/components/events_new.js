import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'　　//リンク機能を有するパッケージ

import { postEvents } from '../actions';

class EventsNew extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field

        return (
            <div>
                <input { ...input } placeholder={ label } type={ type } />
                { touched && error && <span>{ error }</span> }
            </div>
        )
    }

    async onSubmit(values) {
        await this.props.postEvents(values)
        this.props.history.push('/')
    }

    render () {
        const { handleSubmit, pristine, submitting } = this.props   //pristine フォームに値を入力しないとボタンが押せないようにする  submitting ボタンを押したらtrueを返す

        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <div><Field label="Title" name="title" type="text" component={ this.renderField } /></div>
                <div><Field label="Body" name="body" type="text" component={ this.renderField } /></div>

                <div>
                    <input type="submit" value="Submit" disabled={ pristine || submitting } />    {/* pristine フォームに値を入力しないとボタンが押せないようにする。　submittingでボタンを複数回連続で押せないようにする */}
                    <Link to="/">Cancel</Link>
                </div>
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
