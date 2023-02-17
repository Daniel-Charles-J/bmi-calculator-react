import "./Dashboard.css";
import { useState } from "react";

function Dashboard() {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmiValue, setBmiValue] = useState('');
    const [message, setMessage] = useState('');
    const [unit, setUnit] = useState("Metric")

    const units = (e) =>{
        e.preventDefault();
        let innerText = e.currentTarget.innerText;
        innerText = innerText === "Metric" ? "Standard" : "Metric";
        e.currentTarget.innerText = innerText;
        setUnit(innerText);
        console.log(unit);
    }

    const findBmi = (e) => {
        e.preventDefault();

        if (weight === 0 || height === 0) {
          alert('Please enter a valid weight and height')
        } else {
           let bmi = unit === "Metric" ?  weight/height/height*10000 :  (weight / (height * height) * 703);
           setBmiValue(bmi.toFixed())

          if (bmi < 18.5) {
            setMessage('You are underweight')
          }else if(bmi >= 18.5 && bmi < 25){
            setMessage('You are Healthy')
          } else if (bmi >= 25 && bmi < 30) {
            setMessage('You are Over weight')
          } else {
            setMessage('You are obesity')
          }
        }
      }
    
      const clear = (e) => {
        window.location.reload()
      }

  return (
    <div className="main-container">
      <div className='container'>
      <button className="unit-btn" onClick = {units}>Metric</button>
        <h2 className='title-result'>BMI Calculator</h2>
        <form onSubmit={findBmi}>
          <div>
            <label>Weight {unit === "Metric" ? "(kg)" : "(lbs)"}</label>
            <input type = "number" onChange={(e) => setWeight(e.target.value)} placeholder = "0"/>
          </div>
          <div>
            <label>Height {unit === "Metric" ? "(cm)" : "(in)"}</label>
            <input  type = "number" onChange={(e) => setHeight(e.target.value)} placeholder = "0" />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-refresh' onClick={clear} type='submit'>Clear</button>
          </div>
        </form>

        <div className='title-result'>
          <h3>Your BMI is: {bmiValue}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;