import React from 'react'
import './category.css'
import ItemCard from '../components/ItemCard'

export default function Category() {
  return (
    <div className='category_wrapper'>
      <div className='category_inner'>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  )
}
