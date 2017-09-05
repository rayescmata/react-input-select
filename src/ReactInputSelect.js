import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import OnClickOutside from 'react-onclickoutside'
import '../scss/ReactInputSelect.scss'

const SelectOptions = (props) => {
  const {
    data
    , dataKey
    , dropdownId
    , dropdownOptionId
    , dropdownOptions
    , isObject
    , onClick
    , visible
  } = props

  if (!visible || !dropdownOptions || (dropdownOptions && dropdownOptions.length === 0)) {
    return null
  }

  return (
    <div className = {`reactInputSelectDropdownContainer ${dropdownId}`}>
      {
        dropdownOptions.map((item, idx) => {
          return (
            <div className = {`reactInputSelectDropdownOption ${dropdownOptionId}`}
              onClick = {onClick.bind(null, item, data)}>
              {isObject ? item[dataKey] : item}
            </div>
          )
        })
      }
    </div>
  )
}

class ReactInputSelect extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  componentWillUnmount() {
    this.setState({
      visible: false
    })
  }

  filterOptions(data, filterValue, isObject, dataKey, dataFilter) {
    // IF FILTERVALUE IS EMPTY STRING OR SPACES
    if (filterValue.trim().length === 0) {
      return data
    }

    // IF NO DATA OR DATA IS EMPTY ARRAY, RETURN NULL
    if (!data || (data && data.length === 0)) {
      return null
    }

    // IF CUSTOMER FILTER FUNCTION IS SUPPLIED, RETURN THAT.
    if (dataFilter && typeof dataFilter === 'function') {
      return dataFilter(data, filterValue)
    }

    // RETURN DATA PROCESSED BY DEFAULT FUNCTION
    return data
      .map((item, idx) => {
        if (isObject && item[dataKey].toString().toLowerCase().includes(filterValue.toString().toLowerCase())) {
          return item
        } else if(item.toString().toLowerCase().includes(filterValue.toString().toLowerCase())) {
          return item
        }
      })
      .filter((item) => item)
  }

  handleClickOutside(evt) {
    this.handleOnBlur({ target: { value: this.props.value }})
  }

  handleOnBlur(evt) {
    if (this.props.onBlur && typeof this.props.onBlur === 'function') {
      this.props.onBlur(evt)
    }

    this.setState({ visible: false })
  }

  handleOnChange(evt) {
    if (this.props.onChange && typeof this.props.onChange === 'function') {
      this.props.onChange(evt)
    }
  }

  handleOnFocus() {
    this.setState({ visible: true })
  }

  handleOnOptionClick(item, data, evt) {
    if (this.props.onOptionClick && typeof this.props.onOptionClick === 'function') {
      this.props.onOptionClick(item, data, evt)
    }

    this.setState({ visible: false })
  }

  render() {
    const {
      containerClass
      , containerId
      , data
      , dataFilter
      , dataKey
      , displayAll
      , dropdownId
      , dropdownOptionId
      , inputClass
      , inputId
      , isObject
      , value
    } = this.props

    const {
      visible
    } = this.state

    const dropdownOptions = displayAll ? data : this.filterOptions(data, value, isObject, dataKey, dataFilter)

    return (
      <div className = {`reactInputSelectContainer ${containerClass}`}
        id = {`reactInputSelectContainerID ${containerId}`}>
        <input className = {`reactInputSelectField ${inputClass}`}
          id = {`reactInputSelectFieldID ${inputId}`}
          onChange = {::this.handleOnChange}
          onFocus = {::this.handleOnFocus}
          value = {value}
        />
        <SelectOptions
          data = {data}
          dataKey = {dataKey}
          dropdownId = {dropdownId}
          dropdownOptionId = {dropdownOptionId}
          dropdownOptions = {dropdownOptions}
          isObject = {isObject}
          onClick = {::this.handleOnOptionClick}
          visible = {visible}
        />
      </div>
    )
  }
}

ReactInputSelect.defaultProps = {
  containerClass: '',
  containerId: '',
  data: null,
  dataFilter: null,
  dataKey: 'value',
  displayAll: false,
  dropdownId: '',
  dropdownOptionId: '',
  inputClass: '',
  inputId: '',
  isObject: false,
  onChange: null,
  onBlur: null,
  onOptionClick: null,
  value: ''
}

ReactInputSelect.propTypes = {
  containerClass: PropTypes.string,
  containerId: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  dataFilter: PropTypes.func,
  dataKey: PropTypes.string,
  displayAll: PropTypes.bool,
  dropdownId: PropTypes.string,
  dropdownOptionId: PropTypes.string,
  inputClass: PropTypes.string,
  inputId: PropTypes.string,
  isObject: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onOptionClick: PropTypes.func,
  value: PropTypes.string.isRequired
}

export default OnClickOutside(ReactInputSelect)
