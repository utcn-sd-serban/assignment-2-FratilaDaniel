import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SmartQuestionsList from './view/SmartQuestionsList';
import SmartCreateQuestion from './view/SmartCreateQuestion';
import SmartFilterQuestions from './view/SmartFilterQuestions';
import SmartLogUser from './view/SmartLogUser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Addition', () => {
  it('knows that 2 and 3 make 5', () => {
    expect(2 + 3).toBe(5);
  });
});  

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SmartCreateQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SmartFilterQuestions />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SmartLogUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SmartQuestionsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// it('test test', () =>{

//   const div = document.createElement('div');
//   const wrapper = ReactDOM.render(<App />, div);
//   const logInButton = wrapper.find('button.onLogIn');
//   logInButton.simulate('click');
//   const text = wrapper.find('p').text();
//   expect(text).toEqual('Count: -1');

// }); //nu ma pricep