import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ( { items, removeItem, editItem } ) => {

  return (
    <div className="grocery-list">
      { items.map( (item) => {
        const { id, title } = item;
        return(
          <article key={id} className="grocery-item">
            {/* title */}
            <p className="title">
              {title}
            </p>
            {/* button */}
            <div className="btn-container">
            {/* button - edit */}
              <button 
                className="edit-btn"
                type="button"
                onClick={ () => editItem(id) }>
                <FaEdit/>
              </button>
              {/* button - delete */}
              <button 
                className="delete-btn"
                type="button"
                onClick={ () => removeItem(id) }>
                <FaTrash/>
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
