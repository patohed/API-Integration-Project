import React from 'react';

function FilterBar({ buscarPersonaje, filtrarPorStatus, filtrarPorGender, filtroStatus, filtroGender }) {
  return (
    <div className="containerBus">
      <input type="search" className="select" placeholder="Buscar personaje..." maxLength={15} onChange={buscarPersonaje} />
      <select name="status" className="select" onChange={filtrarPorStatus} value={filtroStatus}>
        <option value="all">Status-All</option>
        <option value="Alive">Alive</option>
        <option value="Uknown">Uknown</option>
        <option value="Dead">Dead</option>
      </select>
      <select name="gender" className="select" onChange={filtrarPorGender} value={filtroGender}>
        <option value="all">Gender-All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="uknown">Uknown</option>
      </select>
    </div>
  );
}

export default FilterBar;
  
  