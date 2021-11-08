import React, {Component} from 'react';

class App extends Component {
  render() {

    //return内は一つだけにしないといけないのでタグで囲って一つの塊にする
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am Changed")}} />
      </React.Fragment>
    )
  }
}

// function App() {
//   return(
//     <React.Fragment>
//       <label htmlFor="forname">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked.")}} />
//     </React.Fragment>
//   )
// }
export default App;
