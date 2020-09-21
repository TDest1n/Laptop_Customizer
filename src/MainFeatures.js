import React from 'react';
import './App.css';
import Options from './Options';


function MainFeatures(props) {
   
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
    
        
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
           <Options  
            features={props.features}
            selected={props.selected}
            updateFeature={props.updateFeature}
            feature={feature}
           />
          </fieldset>
        )
      })
      return( 
      <form className="main__form">
       <h2>Customize your laptop</h2>
       {features}
      </form>
      )
}

export default MainFeatures;