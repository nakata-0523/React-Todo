import { INCREMENT, DECREMENT } from '../actions'   //actionsで作成したtypeをインポート

const initialState = { value: 0 }   //状態の初期値を定義　オブジェクトとして定義

export default (state = initialState, action) => {  //countReducerを定義　関数として定義　index.jsで使えるようにexport stateは状態
    switch (action.type) {  //actionのtypeを拾うことができる 二種類の値を取れる（INCREMENTとDECREMENT）
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}