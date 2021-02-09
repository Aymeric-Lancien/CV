import React from "react";

const Experience = () => {
  return (
    <div className='experience'>
      <h3>Expérience</h3>
      <div className='exp-1'>
        <h4>Formation développement web</h4>
        <h5>2020-2021</h5>
        <p>
          Formation en développement web à la Wild Code School de Nantes. J'y ai appris 
          les bases, les bonnes pratiques ainsi que les outils afin de progresser en tant 
          que développeur junior! 
        </p>
      </div>
      <div className='exp-2'>
        <h4>Intérimaire</h4>
        <h5>2019-2020</h5>
        <p>
          Préparateur de commandes dans l'entrepôt d'U logistique.
        </p>
      </div>
      <div className='exp-3'>
        <h4>Armée</h4>
        <h5>2018-2019</h5>
        <p>
          GAV en gendarmerie départementale et classes au 35e RAP. J'ai pu découvrir
          le travail en équipe et les valeurs humaines.
        </p>
      </div>
    </div>
  );
};

export default Experience;
