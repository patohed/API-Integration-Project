import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Header from './components/handler/Header';
import FilterBar from './components/handler/FilterBar';
import Card from './components/card/Card';

function App() {

    const [personajes,setPersonajes] = useState([]);
    const [personajesOriginales, setPersonajesOriginales] = useState([]);
    const [buscar,setBuscar] = useState("");
    const [filtroStatus, setFiltroStatus] = useState("all");
    const [filtroGender, setFiltroGender] = useState("all");


   
useEffect(()=>{

const obtenerPersonajes=async()=>{
    const response=await axios.get('https://rickandmortyapi.com/api/character') 
    setPersonajes(response.data.results)
    setPersonajesOriginales(response.data.results);
    };

    obtenerPersonajes();
},[]);


const buscarPersonaje = (e) => {
  const palabraClave = e.target.value;
  setBuscar(palabraClave);
  if (palabraClave === '') {
    
    setPersonajes(personajesOriginales);
  } else {
    
    const resultado = personajesOriginales.filter((personaje) =>
      personaje.name.toLowerCase().includes(palabraClave.toLowerCase())
    );
    setPersonajes(resultado);
  }
};

const filtrarPorStatus = (e) => {
  const statusSeleccionado = e.target.value;
  setFiltroStatus(statusSeleccionado);
  if (statusSeleccionado === 'all') {
    
    setPersonajes(personajesOriginales);
  } else {
    
    const resultado = personajesOriginales.filter((personaje) =>
      personaje.status.toLowerCase() === statusSeleccionado.toLowerCase()
    );
    setPersonajes(resultado);
  }
};

const filtrarPorGender= (e) => {
  const genderSeleccionado = e.target.value;
  setFiltroGender(genderSeleccionado);
  if (genderSeleccionado === 'all') {
    
    setPersonajes(personajesOriginales);
  } else {
    
    const resultado = personajesOriginales.filter((personaje) =>
      personaje.gender.toLowerCase() === genderSeleccionado.toLowerCase()
    );
    setPersonajes(resultado);
  }
};

return (
    <div>
      <Header />
      <FilterBar
        buscarPersonaje={buscarPersonaje}
        filtrarPorStatus={filtrarPorStatus}
        filtrarPorGender={filtrarPorGender}
        filtroStatus={filtroStatus}
        filtroGender={filtroGender}
      />
      <section className="container-card">
        {personajes.map((personaje) => (
          <Card key={personaje.id} personaje={personaje} />
        ))}
      </section>
    </div>
  );
}


export default App
