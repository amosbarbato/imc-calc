import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';


function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setIMC] = useState(0);
  const [rating, setRating] = useState('');
  const [rate, setRate] = useState('');

  function handleHeightChange(e) {
    setHeight(Number(e.target.value));
  }

  function handleWeightChange(e) {
    setWeight(Number(e.target.value));
  }

  function calculateIMC() {
    const newIMC = weight / (height * height);
    setIMC(newIMC);
  
    if (newIMC < 18.5) {
      setRating("Abaixo do Peso");
      setRate("e você está abaixo do seu peso ideal.");
    } else if (newIMC < 25) {
      setRating("Peso Normal");
      setRate("e você está no seu peso ideal.");
    } else if (newIMC < 30) {
      setRating("Sobrepeso");
      setRate("e você está acima do seu peso ideal.");
    } else if (newIMC < 35) {
      setRating("Obesidade grau 1");
      setRate("e você já está na primeira fase da obesidade. Cuide-se!");
    } else if (newIMC < 40) {
      setRating("Obesidade grau 2");
      setRate("e você está bem acima do peso e alcançou a segunda fase da obesidade.");
    } else {
      setRating("Obesidade grau 3");
      setRate("e você está muito acima do peso. Seu caso é grave!");
    }
  }

  return (
    <div className="container mt-5 h-100 d-flex align-items-center justify-content-center flex-column">
      <h1>Calculadora de IMC</h1>
      <div className="content mt-3">

      </div>
      <div className="form-floating mb-3">
        <label htmlFor="height" className="form-label ps-4">Altura (m)</label>
        <input type="number" step='0.01' id='height' className="form-control bg-white text-secondary" value={height} onChange={handleHeightChange}/>
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="weight" className="form-label ps-4">Peso (kg)</label>
        <input type="number" step='0.01' id='weight' className="form-control bg-white text-secondary" value={weight} onChange={handleWeightChange}/>
      </div>
      <button className="button-71 my-3 text-white" onClick={calculateIMC}>
        Calcular IMC
        </button>

      {imc !== 0 && (

        <div class="alert alert-warning fade show" role="alert">
          <p className="text-center">
            <strong>{rating}!</strong> 
          </p>
          <p className="text-center">
            Seu IMC é {imc.toFixed(2)} {rate}
          </p>
        </div>

      )}
    </div>
  )
}


export default App
