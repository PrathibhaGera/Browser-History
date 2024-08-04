import React from 'react'
import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails

  const handleDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="list-item">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <p>{title} </p>
        <p> {domainUrl}</p>
      </div>
      <div>
        <button className="del-el" data-testid="delete" onClick={handleDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="del-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
