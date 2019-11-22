import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';


const Statistic = (props) => {
  return(
  <p  className="info">Tästä anekdootista on tykätty {props.aanet} kertaa</p>
  )
}

const Button = (props) => {
    return(
      <button className = {props.class} onClick = {props.onClick}>{props.text}</button>
 
    )
}


const App = (props) => {
    const [selected, setSelected] = useState(0)


    //saman kokoinen taulukko kuin anecdotes
    const copy = [...props.anecdotes]
    //täytetään se nollilla
    copy.fill(0)
    console.log(copy)

    const [votes, setVotes] = useState(copy)

    const nextAnecdote = () => {
        setSelected(getRandomInt(props.anecdotes.length))
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const voteAnecdote = () => {

        const copyvotes = [...votes]
    
        console.log(copyvotes)

        copyvotes[selected] +=1
        console.log(copyvotes)

        console.log('ääni annettu')
    
        setVotes(copyvotes)
        
        console.log('paikka on: '+ selected)    
        console.log('arvo on  ' + copyvotes[selected])   
    }

    const mostLiked = votes.indexOf(Math.max(...votes))
    
  
    return (
      <div>
        <h1>Päivän anekdootti</h1>
        <p>{props.anecdotes[selected]}</p>
        <Statistic aanet= {votes[selected]} />
        <Button onClick={voteAnecdote} text='Tykkää' /><Button onClick={nextAnecdote} text='Seuraava anekdootti' />
        <h1>Tykätyin anekdootti</h1>
        <p>{props.anecdotes[mostLiked]}</p>
        <Statistic aanet= {votes[mostLiked]} />

        

      </div>

    )
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )