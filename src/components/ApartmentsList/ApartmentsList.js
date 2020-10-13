import React, {useState, useEffect} from 'react'
import './ApartmentsList.scss'
import ApartmentsItem from '../ApartmentsItem'

export const ApartmentsList = () => {
  const [apartments, setApartments] = useState([])
  const [liked, setLiked] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('liked') || '[]')
    setLiked(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('liked', JSON.stringify(liked))
  }, [liked])

  const toggleLike = id => {
    setLiked(prev => {
      if (!prev.includes(id)) {
        return [...prev, id]
      }
      return prev.filter(likeId => likeId !== id)
    })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/apartments`)
      .then(response => response.json())
      .then(data => setApartments(data))
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="apartments-list">
      {
        apartments.map(item => <ApartmentsItem
          key={item.id}
          {...item}
          toggleLike={toggleLike}
          liked={liked}
        />)
      }
    </div>
  )
}