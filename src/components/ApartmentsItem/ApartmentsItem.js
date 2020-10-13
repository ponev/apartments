import React from 'react'

import './ApartmentsItem.scss'

export const ApartmentsItem = ({id, imageUrl, title, address, roomsCount, square, floor, maxFloor, price, description, toggleLike, liked}) => {
  const likeClass = ['apartment__like']
  const likeIcon = !liked.includes(id) ? 'fa fa-heart-o' : 'fa fa-heart'

  if (liked.includes(id)) {
    likeClass.push('apartment__like-active')
  }

  return (
    <div className="apartment">
      <img src={imageUrl} alt={title} className="apartment__image"/>
      <div className="apartment__info">
        <button
          className={likeClass.join(' ')}
          onClick={() => toggleLike(id)}
        >
          <i className={likeIcon}></i>
        </button>
        <h2 className="apartment__title">
          {title === '' ? <>{roomsCount}-комн. квартира, {square} м<sup>2</sup>, {floor}/{maxFloor} этаж </>: title}
        </h2>
        <address className="apartment__address">{address}</address>
        <div className="apartment__full-price">{price.toLocaleString()} &#8381;</div>
        <div className="apartment__price-info">{Math.floor(price / square).toLocaleString()} &#8381; / м<sup>2</sup></div>

        <div className="apartment__description">{description.slice(0, 190)}...</div>
      </div>
    </div>
  )
}