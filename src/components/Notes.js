import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({notes, onRemove}) => {
    let message
    if(notes.length === 0){
        return  message = "Заметок нет"
    }
    return(
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note =>(
                <CSSTransition
                key={note.id}
                classNames={"note"}
                timeout={800}
                >
                    <li className="list-group-item note" key={note.id}>
                        <div>
                            <strong>{note.title || `${message}`}</strong>
                            <em>{new Date().toLocaleDateString()}</em>&nbsp;
                            <small>{new Date().toLocaleTimeString()}</small>
                        </div>
                        <button 
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onRemove(note.id)}
                        >&times;</button>    
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}