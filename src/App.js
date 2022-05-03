import React from "react";
import "./style.css";
import { provider} from 'react-redux';
import store from "./store"


export default function App() {
  return (
    <provider>
     <div>
       <h1>
         hellow
       </h1>
     </div>
    </provider>

  );
}
