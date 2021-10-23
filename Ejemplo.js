import React from 'react';
import './style.css';
//Nuevo
import View from './View';
import Text from './Text';

const imgSource =
  'https://www.ngenespanol.com/wp-content/uploads/2018/08/Las-5-mejores-playas-desconocidas-en-M%C3%A9xico-770x513.jpg'

  function sumar(a, b) {
    return a + b;
  }

  const arreglo = ['blanco', function() {
    return 'amarillo'
    }, 'palabras'];

  const [primerElemento, segundoElemento] = arreglo;

console.log({primerElemento, valor: segundoElemento()})

function Example() {
  /**
   * Propiedades del Componente
   */
  const [valores, setValores] = useState({
  });



    return (
      <>
      <View>
        <input type= "number" placeholder= "Escribe a" />
        <input type= "number" placeholder= "Escribe b" />
        <button type= "button">Aplicar</button>
      </View>
      <img className="image" src={imgSource} />
      <View>
        <Text>Hello Example!</Text>
        <Text>Hello Example 2</Text>
        <Text>Hello Example 3</Text>
      </View>
      <Text>Hello Example 3</Text>
      </>
    );
}

export default Example;