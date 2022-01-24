import _ from 'lodash'   //配列を使いやすい形に直すことができる
import {
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT
} from '../actions'   //actionsで作成したtypeをインポート

export default (events = {}, action) => {  //countReducerを定義　関数として定義　index.jsで使えるようにexport stateは状態
    switch (action.type) {  //actionのtypeを拾うことができる 二種類の値を取れる（INCREMENTとDECREMENT）
        case READ_EVENTS:     //それぞれの場合の状態の変化の処理
            return _.mapKeys(action.response.data, 'id')　　//idで抽出したものをキーにして配列を再配置する
        case READ_EVENT:
        case CREATE_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }    //データを更新して返す
        default:
            return events
    }
}