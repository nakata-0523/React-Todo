import { combineReducers } from 'redux'  //結合する機能
import events from './events'  //count.jsからcountの状態を持つreducerをインポート

export default combineReducers({ events })   //countを結合・のちに他のファイルで使うためexport 使うreducerを引数に入れるだけで結合できる