// Librairies
import './App.module.css';
import React, { useEffect, useState } from 'react';

import styledComponent  from 'styled-components';
// Importer le composant correctement
import Eleve from "../Components/Eleve/Eleve";

function App() {
  const [eleve, setEleve] = useState([
    {
      nom: 'Léa Gontier',
      moyenne: 14,
      citation: "Allez toujours plus loin"
    },
    {
      nom: 'Julien Gontier',
      moyenne: 5,
      citation: "Le feu ça brûle"
    }
  ]);
  const h1Style={ 
    color: 'green',
    backgroundColor: 'lightgreen',

   }
  const App={ 
    textAlign:'center'

   }

  const buttonClickedHandler = (nouveauNom) => {
    const nouveauxEleves = [...eleve];
    nouveauxEleves[0].nom = nouveauNom;
    setEleve(nouveauxEleves);
  }

  // UseEffect
  useEffect(() => {
    console.log('[App.js] UseEffect');
    return () => {
      console.log('[App.js] UseEffect (didUnmount)');
    }
  }, []);

  useEffect(() => {
    console.log('[App.js] UseEffect (didUpdate)');
  });

  const MonBoutonStylise=styledComponent.button
  // code css
  `padding: 10px 30px;
   background-color:black;
   color: white;
   cursor: pointer;
   &:hover{
    background-color:white;
    color: black;
   }
   `;
  
  

  return (
    <div style={App}>
      <div>
        <h1 style={h1Style} >Bienvenue dans la classe T°L 2</h1>
      </div>
      <div>
        <MonBoutonStylise onClick={buttonClickedHandler.bind(this, "Elon Musk")}>
          Transformer le premier élève
        </MonBoutonStylise>
      </div>
      <Eleve
        nom={eleve[0].nom}
        moyenne={eleve[0].moyenne}
        clic={() => buttonClickedHandler('Julie Martin')}
      >
        {eleve[0].citation}
      </Eleve>
      <Eleve
        nom={eleve[1].nom}
        moyenne={eleve[1].moyenne}
        clic={() => buttonClickedHandler('Steve Jobs')}
      >
        {eleve[1].citation}
      </Eleve>
    </div>
  );
}

export default App;
