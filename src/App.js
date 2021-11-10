import React, {Component} from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profile = [
    { name:"taro", age:21, tex:"I like cat." },
    { name:"hanako", tex:"I like dog." },
    {}
  ]
  return (
    <div>
      {
        profile.map((profile) => {
          return <User name={profile.name} age={profile.age} text={profile.tex}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>私の名前は{props.name}です。{props.age}才です。{props.text}</div>
}

User.defaultProps = {
  name: "NoName",
  age: 100,
  text: "No text"
}

User.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  test: propTypes.string
}

export default App;
