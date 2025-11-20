import './FirstScreen.css';
import { useRef } from "react";


export default function FirstScreen({onAddProject}) {

    const refName = useRef();
    const refDescription = useRef();

    return (
      <div class="first-screen">
        <p>Inserisci il nome del tuo primo progetto</p>
        <div class="input-group">
          <label class="input-label">Nome:</label>
          <input class="input-text" type="text" ref={refName} />
        </div>
        <div class="input-group">
          <label class="input-label">Descrizione:</label>
          <textarea class="input-textarea" ref={refDescription} />
        </div>
        <button class="button--confirm" onClick={() => onAddProject(refName.current.value, refDescription.current.value)}>
          Conferma
        </button>
      </div>
    );
}