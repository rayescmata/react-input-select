# react-input-select

  The React-input-select component is, to say the least, the love child of the select and input elements.

  It's a simple attempt at making a select list but with more customizability and custom event handling.

  And a work in progress.

## Installation
  
  The component is only available through npm, so just run:
  
  `npm install react-input-select`

## Usage
  import it into you project with:

  ```javascript
  import ReactInputSelect from 'react-input-select'`

  class ReactComponent extends React.Component {
    constructor() {
      super()
    }

    render() {
      return (
        <ReactInputSelect
          data = {[]}
          value = ''
        />
      )
    }
  }
  ```

## Props
  Prop Name | Type | Description
  --------- | ------------------ | -----------
  containerClass | String | A custom classname for the component's parent div.
  containerId | String | A custom id for the component's parent div
  data | Array of Strings/Objects | the array of data to be used as dropdown options.
  dataFilter | Function | A custom filtering function. Should take in two(2) parameters: the data supplied to the component, and the filter string
  dataKey | String | The key for the text to display in the dropdown. Applicable only if isObject is `true`.
  displayAll | Boolean | Boolean variable used to determine whether the dropdown should be displayed regardless of the filtering string value or not.
  dropdownId | String | A custom id for the dropdown div.
  dropdownOptionId | String | A custom id for the dropdown options.
  inputClass | String | A custom classname for the input field.
  inputId | String | A custom id for the input field.
  isObject | Boolean | Boolean variable to determine where the supplied data is an array of objects or strings.
  onChange | Function | The onChange event function for the input field. Should take take in one(1) parameter: the event.
  onBlur | Function | The onBlur event function for the input field. Should take take in one(1) parameter: the event.
  onOptionClick | Function | The onCLick event function for dropdown options. Should take in four(4) parameters: the clicked item, the item's index, the supplied data, and the click event.
  value | String | Value for the input field.

