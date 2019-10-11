import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Header = (props) => {
    //console.log(props)
    return (
        <h1>{props.header}</h1>
      )
}
const Statistic = (props) => {
    return(
    <tr>
       <td>{props.text}</td><td>{props.value}</td>
    </tr>
    )
}

const Button = (props) => {
    return(
      <button className = {props.class} onClick = {props.onClick}>{props.text}</button>
 
    )
}

const Statistics = (props) => { 
    if (props.good === 0 && props.neutral === 0 && props.bad === 0){
        return(
            <p>Yhtään palautetta ei ole vielä annettu.</p>
        )

    }
    const average = (props.good * 1 + props.neutral * 0 + props.bad * -1)/ (props.good + props.neutral + props.bad)
    const positivePros = 100 * (props.good / (props.good + props.neutral + props.bad))
    return(
        <div>
            <table>
                <caption>Tilasto:</caption>
                <tbody>
                <Statistic text="Hyvä:" value= {props.good} />
                <Statistic text="Neutraali:" value = {props.neutral} />
                <Statistic text="Huono:" value = {props.bad} />
                <Statistic text="Yhteensä:" value = {props.good + props.neutral + props.bad} />
                <Statistic text="Keskiarvo:" value= {average.toFixed(1)} />
                <Statistic text="Positiivisia:" value = {positivePros.toFixed(0) + " %"} />
                </tbody>
            </table>
        </div>
    )
    

}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const header = 'Kiitos palautteesta'

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

       <Button class='button-good' onClick={increaseGoodByOne} text=':)' />
       <Button class='button-neutral' onClick={increaseNeutralByOne} text=':|' />
       <Button class='button-bad' onClick={increaseBadByOne} text=':(' />
    

       <Statistics  bad={bad} neutral={neutral} good={good} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

