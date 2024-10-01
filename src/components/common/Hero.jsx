import React from 'react'

const Hero = ({heading, subheading, description}) => {
  return (
    <section className="section-7">
    <div className="hero d-flex align-items-center">
      <div className="container">
        <div className="text-left">
          <span>{heading}</span>
          <h1>{subheading}</h1>
          <p dangerouslySetInnerHTML={{__html:description}}></p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
