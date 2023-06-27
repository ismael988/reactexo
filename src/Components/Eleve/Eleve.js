//Librairies
import classes from'./Eleve.module.css';
import React, { useEffect } from 'react';

function Eleve(props) {
//useEffect
useEffect(()=>{
console.log('[Eleve.js] UseEffect');
},[]);
useEffect(()=>{
console.log('[Eleve.js] UseEffect(didUpdate');
})
useEffect(()=>{
return()=>{
console.log('[Eleve.js] UseEffect(WillUnmount)');
}
},[]);
useEffect(()=>{
    console.log('[Eleve.js] le nom a été modifié');
    },[props.nom])

// variables
const moyenneClasses=[];
if(props.moyenne > 10){
    moyenneClasses.push(classes.green)
    }else if(props.moyenne == 10){
    moyenneClasses.push(classes.orange)
    }else{
    moyenneClasses.push(classes.red)
    }
    

//jsx
return (
<div className={classes.eleve}>
<h1 onClick={props.clic}>{props.nom}</h1>
<p>Moyenne scolaire :
<b className={moyenneClasses.join('')}>
{props.moyenne}/20</b>
</p>
<p>Age : {Math.floor(Math.random() * 100)}</p>
<i>{props.children}</i>
</div>

);
}
export default Eleve;