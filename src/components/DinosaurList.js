import React from 'react'
import DeleteButton from './DeleteButton'
import MoveButton from './MoveButton'

const DinosaurList = (props) => {

  const dinosaurNodes =
  props.dinosaurs.map((dinosaur, index) => {
    return(
      <li key={index} className="dinosaur-item">
      <h4>{dinosaur.species}</h4>
      <DeleteButton id={dinosaur.id} onDelete={props.onDelete}/>
      <MoveButton id={dinosaur.id} foodType={dinosaur.foodType} onMove={props.onMove}/>
      </li>
    )
  })

  return(
    <ul className="dinosaur-list">
    {dinosaurNodes}
    </ul>
  )
}

export default DinosaurList
