import React, { PureComponent } from 'react'
import ReactInputSelect from '../../lib/ReactInputSelect'

const mockData = [
  'Abra',
  'Albay',
  'Buenavista',
  'Butuan',
  'Cabadbaran',
  'Cagayan de Oro',
  'Carcar',
  'Cebu',
  'Davao',
  'Iligan',
  'Lapu-lapu',
  'Manila',
  'Mandaue',
  'Surigao',
  'Toledo',
  'Zamboanga'
]

class RegularDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  handleOnChange(evt) {
    this.setState({ inputValue: evt.target.value })
  }

  handleOnBlur(evt) {
    this.setState({ inputValue: evt.target.value })
  }

  handleOptionClick(item) {
    this.setState({ inputValue: item })
  }

  render() {
    const {
      inputValue
    } = this.state

    const data = mockData
    const displayAll = false
    const isObject = false

    return (
      <div>
        <div className = 'demoResultDisplay'>
          <label>The selected value is: {inputValue}</label>
        </div>
        <ReactInputSelect containerClass = 'containerClassTest'
          containerId = 'containerIdTest'
          data = {data}
          // dataFilter = {}
          // dataKey = {}
          displayAll = {displayAll}
          dropdownId = 'dropdownIdTest'
          dropdownOptionId = 'dropdownOptionIdTest'
          onChange = {::this.handleOnChange}
          onBlur = {::this.handleOnBlur}
          onOptionClick = {::this.handleOptionClick}
          inputClass = 'inputClassTest'
          inputId = 'inputIdTest'
          isObject = {isObject}
          value = {inputValue}
        />
      </div>
    )
  }
}

export default RegularDemo
