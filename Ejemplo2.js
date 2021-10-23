import React, { useState, useEffect } from 'react';
import './style.css';
//Nuevo
import Text from './Text';
import View from './View';

import API from './API';

const imgSource =
  'ttps://www.ngenespanol.com/wp-content/uploads/2018/08/Las-5-mejores-playas-desconocidas-en-M%C3%A9xico-770x513.jpg';

function sumar(a, b) {
  return a + b;
}

function Example() {
  const [valores, setValores] = useState({
    A: undefined,
    B: undefined,
  });

  const [personajes, setPersonajes] = useState([]);


  const capturarCambios = (event, propiedad) => {
    setValores({
      ...valores,
      [propiedad]: +event.target.value,
    });
  };
  const imprimirValores = () => {
    const resultado = sumar(valores.A, valores.B);
    alert(resultado);
    console.log(valores);
  };
  const final = () => {
    console.log('fina del Componet');
  };
  const cargarPersonajes = () => {
    API.getCharacters().then((data) => {
      console.log(data)
      setPersonajes(data);
    });
  };
  const inicio = () => {
    console.log('inicio del Componet');
    cargarPersonajes();
    return final;
  };

   useEffect(inicio, []);

  return (
    <>
      <View>
        <input
          value={valores.A}
          onChange={(event) => capturarCambios(event, 'A')}
          type="number"
          placeholder="Escribe a"
        />
        <input
          value={valores.B}
          onChange={(event) => capturarCambios(event, 'B')}
          type="number"
          placeholder="Escribe a"
        />
        <button onClick={imprimirValores} type="button">
          Aplicar
        </button>
      </View>
      <img className="image" src={imgSource} />
      <View>
        {personajes.map((personaje) => (
          <Text key={personaje.char_id}> {personaje.name}</Text>
        ))}
      </View>
    </>
  );
}
export default Example;