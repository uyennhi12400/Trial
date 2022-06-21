import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    <Title name='Save'/> 
    <Title name='Cancel'/> 
    <Title name='Renting'/> 
    <Title name='Buy'/> 
    <Title name='Set Auction'/> 
    <Task2 name = '1. The Behaviorist Theory'/>
    <Task2 name = '2. The Psychodynamic Theory'/>
    <Task2 name = '3. The Humanistic Theory'/>
    <Task2 name = '4. The Cognitive Theory'/>
    <Task2 name = '5. Biological Theory'/>
    <Task3 title ='A Simple Component' para ='React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.' /> 
    <Task3 title ='A Stateful Component' para ='In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().'/> 
    <Task3 title ='An Application' para = 'Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.' /> 
    <Task3 title ='A Component Using External Plugins' para = 'React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.' /> 
    
  </React.StrictMode>
);

