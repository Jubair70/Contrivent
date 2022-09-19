import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import './styles.css';

function App() {
  return (
    <div>
     <h1>Contrivent</h1>
     <EventDashboard/>
    </div>
  );
}

export default App;
