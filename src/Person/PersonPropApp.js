import React from 'react';

import PersonProp from './PersonProp';

function PersonPropApp() {
  return (
    <div className="App">
    <PersonProp name="Max" age="28" />
    <PersonProp name="Manu" age="29" >My Hobbies: Racing</PersonProp>
    <PersonProp name="Stephanie" age="26" />
    </div>
  );
}

export default PersonPropApp;
