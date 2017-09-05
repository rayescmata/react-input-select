import React, { PureComponent } from 'react'
import ReactInputSelect from '../../lib/ReactInputSelect'

const mockData = [{
  name: 'testName1',
  displayValue: 'testValue1'
}, {
  name: 'testName2',
  displayValue: 'testValue2'
}, {
  name: 'testName3',
  displayValue: 'testValue3'
}, {
  name: 'testName4',
  displayValue: 'testValue4'
}, {
  name: 'testName5',
  displayValue: 'testValue5'
}, {
  name: 'testName6',
  displayValue: 'testValue6'
}, {
  name: 'testName7',
  displayValue: 'testValue7'
}, {
  name: 'testName8',
  displayValue: 'testValue8'
}, {
  name: 'testName9',
  displayValue: 'testValue9'
}]

class ObjectDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      inputObject: {},
    }
  }

  handleOnChange(evt) {
    this.setState({ inputValue: evt.target.value})
  }

  handleOnBlur(evt) {
    this.setState({ inputValue: evt.target.value})
  }

  handleOptionClick(item, arr, evt) {
    this.setState({ inputObject: item, inputValue: item.displayValue })
  }

  render() {
    const {
      inputObject
      , inputValue
    } = this.state

    const data = mockData
    const dataKey = 'displayValue'
    const displayAll = false
    const isObject = true

    return (
      <div>
        <div className = 'demoResultDisplay'>
          <label>The selected value is: {inputValue}</label>
          <label>The selected object is: {JSON.stringify(inputObject)}</label>
        </div>
        <ReactInputSelect
          containerClass = 'containerClassTest'
          containerId = 'containerIdTest'
          data = {data}
          // dataFilter = {}
          dataKey = {dataKey}
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

export default ObjectDemo
