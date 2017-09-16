import CustomFilterDemo from './CustomFilterDemo'
import InputDemo from './InputDemo'
import ObjectDemo from './ObjectDemo'
import React, { PureComponent } from 'react'
import RegularDemo from './RegularDemo'
import Section from './Section'
import '../scss/ComponentDemo.scss'

const Demo = () => {
  return (
    <div>
      <h2>React-Input-Select</h2>

      <div className = 'demoContainer'>
        <div className = 'descriptionBox'>
          <h3>Overview:</h3>
          <p>The React-input-select component is, to say the least, the love child of the select and input elements. It does the functions of both elements -
            allowing for custom input, a dropdown list of options, options filtering, all the standard functionalities one would expect but with a little
            more technical customizability</p>
        </div>

        <div className = 'descriptionBox'>
          <h3>Demo: Try it!</h3>
          <p>The Component is able to handle both string arrays and object arrays, albeit they need to be sorted before hand for the initial state.</p>
          <p>Also, if the supplied with an array of objects, the returned item will be an object.</p>
        </div>

        <Section>
          <RegularDemo />
        </Section>

        <Section>
          <ObjectDemo />
        </Section>

        <div className = 'descriptionBox'>
          <p>And you can also supply your own filtering function, should you need it! The custom function below takes in the data and the filter string and sorts the resulting options based on the index of the filter string on the data item.</p>
        </div>

        <Section>
          <CustomFilterDemo />
        </Section>

        <div className = 'descriptionBox'>
          <p>But in cases where the an item isn't on the list, then the user can just input whatever they want - handled by two events: onChange, and onBlur</p>
        </div>

        <Section>
          <InputDemo />
        </Section>
      </div>
    </div>
  )
}

export default Demo
