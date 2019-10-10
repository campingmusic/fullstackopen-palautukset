import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
    //console.log(props)
    return (
        <h1>{props.header}</h1>
      )
}

const Stats = (props) => {
    const average = (props.good * 1 + props.neutral * 0 + props.bad * -1)/ (props.good + props.neutral + props.bad)
     //console.log(average)
    return(
        <div>
        <h1>{props.header}</h1>
    {/*<p>Palautetta ei ole vielä annettu.</p>*/}
        <p>:) x {props.good}</p>
        <p>:| x {props.neutral}</p>
        <p>:( x {props.bad}</p>
        <p>Palaute annettu {props.good + props.neutral + props.bad} kertaa</p>
        <p>Keskiarvo {average}<br />(kun hyvä on 1, neutraali on 0 ja huono -1)</p>
        </div>
    )
    

}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const header = 'Kiitos palautteesta'
     /*const header2 = 'Tilasto'*/

        /*
    const handleClick = () => {
            console.log('clicked')
    }
        */
     const increaseGoodByOne = () => {
            console.log('Good clicked')
            setGood(good + 1)
    }
    
    const increaseNeutralByOne = () => {
            console.log('Neutral clicked')
            setNeutral(neutral + 1)
    }
        
    const increaseBadByOne = () => {
            console.log('Bad clicked')
            setBad(bad + 1)
        }



    return (
      <div>
        <Header header={header} />

       <button className='button-good' onClick={increaseGoodByOne}>:)</button>
       <button className='button-neutral'onClick={increaseNeutralByOne}>:|</button>
       <button className='button-bad'onClick={increaseBadByOne}>:(</button>
    

       <Stats  bad={bad} neutral={neutral} good={good} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

