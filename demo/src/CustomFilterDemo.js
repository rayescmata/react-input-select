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

class CustomFilterDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  customFilterFunction(data, filterValue) {
    if (!data || (data && data.length === 0)) {
      return null
    }

    if (filterValue.toString().trim().length === 0) {
      return data
    }

    return data
      .map((city) => {
        if (city.toString().toLowerCase().includes(filterValue.toLowerCase())) {
          return city
        }
      })
      .filter((city) => city)
      .sort((cityA, cityB) => {
        let aIndex = cityA.toString().toLowerCase().indexOf(filterValue.toLowerCase())
        let bIndex = cityB.toString().toLowerCase().indexOf(filterValue.toLowerCase())

        if (aIndex > bIndex) {
          return 1
        } else if (aIndex < bIndex) {
          return -1
        }

        return 0
      })
  }

  handleOnChange(evt) {
    this.setState({ inputValue: evt.target.value})
  }

  handleOnBlur(evt) {
    this.setState({ inputValue: evt.target.value})
  }

  handleOptionClick(item, arr, evt) {
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
        <ReactInputSelect
          containerClass = 'containerClassTest'
          containerId = 'containerIdTest'
          data = {data}
          dataFilter = {::this.customFilterFunction}
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

export default CustomFilterDemo
