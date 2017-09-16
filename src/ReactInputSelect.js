import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import OnClickOutside from 'react-onclickoutside'
import '../scss/ReactInputSelect.scss'

const SelectOptions = (props) => {
  const {
    activeIndex
    , data
    , dataKey
    , dropdownClass
    , dropdownOptionClass
    , dropdownOptions
    , isObject
    , onClick
    , style
    , visible
  } = props

  if (!visible || !dropdownOptions || (dropdownOptions && dropdownOptions.length === 0)) {
    return null
  }

  return (
    <div className = {`reactInputSelectDropdownContainer ${dropdownClass}`}
      style = {style.dropdown || {}}>
      {
        dropdownOptions.map((item, idx) => {
          return (
            <div className = {`reactInputSelectDropdownOption ${idx === activeIndex ? 'activeDropdownOption' : ''} ${dropdownOptionClass}`}
              onClick = {onClick.bind(null, item, data)}
              style = {style.options || {}}>
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
      activeIndex: -1,
      visible: false
    }
  }

  componentWillUnmount() {
    this.setState({
      activeIndex: -1,
      visible: false
    })
  }

  filterOptions(data, filterValue, isObject, dataKey, dataFilter) {
    // IF FILTERVALUE IS EMPTY STRING OR SPACES
    if (filterValue.trim().length === 0) {
      return data
    }

    // IF NO DATA OR DATA IS EMPTY ARRAY, RETURN EMPTY ARRAY
    if (!data || (data && data.length === 0)) {
      return []
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
    this.handleBlur({ target: { value: this.props.value }})
  }

  handleBlur(evt) {
    if (this.props.onBlur && typeof this.props.onBlur === 'function') {
      this.props.onBlur(evt)
    }

    this.setState({
      activeIndex: -1,
      visible: false
    })
  }

  handleChange(evt) {
    if (this.props.onChange && typeof this.props.onChange === 'function') {
      this.props.onChange(evt)
    }
    
    this.setState({ activeIndex: -1 })
  }

  handleFocus() {
    this.setState({ visible: true })
  }

  handleKeyDown(options, evt) {
    const {
      activeIndex
    } = this.state

    switch(evt.which) {
      // TAB KEY
      case 9:
        this.setState({
          activeIndex: -1,
          visible: false
        })
        break
      // ENTER KEY
      case 13:
        this.handleOptionClick(options[activeIndex], options, evt)
        break;
      // UP ARROW
      case 38:
        if (activeIndex > 0) {
          this.setState({ activeIndex: activeIndex - 1 })
        }
        break;
      // DOWN ARROW
      case 40:
        if (activeIndex < options.length) {
          this.setState({ activeIndex: activeIndex + 1 })
        }
        break;
      default:
        break;
    }
  }

  handleOptionClick(item, data, evt) {
    if (this.props.onOptionClick && typeof this.props.onOptionClick === 'function') {
      this.props.onOptionClick(item, data, evt)
    }

    this.setState({
      activeIndex: -1,
      visible: false
    })
  }

  render() {
    const {
      containerClass
      , containerId
      , data
      , dataFilter
      , dataKey
      , displayAll
      , dropdownClass
      , dropdownOptionClass
      , inputClass
      , inputId
      , isObject
      , style
      , value
    } = this.props

    const {
      activeIndex
      , visible
    } = this.state

    const dropdownOptions = displayAll ? data : this.filterOptions(data, value, isObject, dataKey, dataFilter)

    return (
      <div className = {`reactInputSelectContainer ${containerClass}`}
        id = {`reactInputSelectContainerID ${containerId}`}
        style = {style.container || {}}>
        <input className = {`reactInputSelectField ${inputClass}`}
          id = {`reactInputSelectFieldID ${inputId}`}
          onChange = {this.handleChange.bind(this)}
          onFocus = {this.handleFocus.bind(this)}
          onKeyDown = {this.handleKeyDown.bind(this, dropdownOptions)}
          style = {style.input || {}}
          value = {value}
        />
        <SelectOptions activeIndex = {activeIndex}
          data = {data}
          dataKey = {dataKey}
          dropdownClass = {dropdownClass}
          dropdownOptionClass = {dropdownOptionClass}
          dropdownOptions = {dropdownOptions}
          isObject = {isObject}
          onClick = {this.handleOptionClick.bind(this)}
          style = {style || {}}
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
  dropdownClass: '',
  dropdownOptionClass: '',
  inputClass: '',
  inputId: '',
  isObject: false,
  onChange: null,
  onBlur: null,
  onOptionClick: null,
  style: {},
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
  dropdownClass: PropTypes.string,
  dropdownOptionClass: PropTypes.string,
  inputClass: PropTypes.string,
  inputId: PropTypes.string,
  isObject: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onOptionClick: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string.isRequired
}

export default OnClickOutside(ReactInputSelect)
