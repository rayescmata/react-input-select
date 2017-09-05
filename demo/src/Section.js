import React from 'react'
import '../scss/ComponentDemo.scss'

const Section = (props) => {
  return (
      <div className='componentDemoSection'>
        { props.children }
      </div>
  )
}

export default Section
