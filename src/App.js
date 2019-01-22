import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import Icon from './Icon';
import api from './api/api';

import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const topics = [
  {
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative, component based routing for React',
    resources: [
      {
        name: 'URL Parameters',
        id: 'url-parameters',
        description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
        url: 'https://reacttraining.com/react-router/web/api/Route/component'
      },
      {
        name: 'Programatically navigate',
        id: 'programmatically-navigate',
        description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url: 'https://reacttraining.com/react-router/web/api/Route/component'
      }
    ]
  },
  {
    name: 'React.js',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle Events',
        id: 'react-lifecycle',
        description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: 'https://reacttraining.com/react-router/web/api/Route/component'
      },
      {
        name: 'React AHA Moments',
        id: 'react-aha',
        description: "A collection of 'Aha' moments while learning React.",
        url: 'https://reacttraining.com/react-router/web/api/Route/component'
      }
    ]
  },
  {
    name: 'Functional Programming',
    id: 'functional-programming',
    description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
    resources: [
      {
        name: 'Imperative vs Declarative programming',
        id: 'imperative-declarative',
        description: 'A guide to understanding the difference between Imperative and Declarative programming.',
        url: 'https://reacttraining.com/react-router/web/api/Route/component'
      },
      {
        name: 'Building User Interfaces with Pure Functions and Function Composition',
        id: 'fn-composition',
        description: 'A guide to building UI with pure functions and function composition in React',
        url: 'https://reacttraining.com/react-router/web/api/Route/component'
      }
    ]
  }
]

function Resource ({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId)

  return (
    
    <div className='headerBackDiv'>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  )
}


function Topic({match}){
  
    const topic = topics.find(({id})=>id===match.params.topicId);      
  return(
    <div>
      <div className='headerBackDiv'>
      <h1>{topic.name}</h1>
      <p>{topic.description}</p>
      </div>
      
      <ul style={{'background':'#baec0b'}} className='head-ul'>
        {topic.resources.map((sub)=> (
          <li key={sub.id}>
          <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        )
           
        )}
      </ul>
      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>

  )
}

function Home(){
  return(
    <h2 className='headerBack'>
      Home
    </h2>
  )
}

function Topics() {
  return(
    <div>
      <h1 className='headerBack'>Topics</h1>
    <ul style={{'background':'#bee5e9'}} className='head-ul'>

    {topics.map(({name,id})=>{
       return <li key={id}><Link to={`/topics/${id}`}>{name}</Link></li>
    })}
    </ul>

    <Route path='/topics/:topicId' component={Topic} />

    </div>
 
  )
}


class App extends Component {
  render() {



    return (
      <Router>
        <div className="App">
        <header className="App-header">
         <h1>Nested Routes</h1>          
        </header>

        <div>
          <ul style={{'background':'pink'}} className='head-ul'>
            <li><Link  to='/' >Home</Link></li>
            <li><Link to='/topics' >Topics</Link></li>

          </ul>

          <Route exact path='/' component={Home}/>
          <Route  path='/topics' component={Topics}/>

        </div>

      </div>
      </Router> 

    );
  }
}

export default App;
