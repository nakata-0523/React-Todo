import React, {Component} from 'react';

// class App extends Component {
//   render() {

//     //return内は一つだけにしないといけないのでタグで囲って一つの塊にする
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am Changed")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
