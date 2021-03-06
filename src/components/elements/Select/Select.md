A Select component build from composable UI primitives.
  
It aspires to be fully WAI compliant one day, but isn't quite there yet.

```jsx
  import React from 'react';
  import data from '../../../data.json';

  const optionStyles = {
    width: '100%',
    padding: '1em .5em',
    margin: 0.
  }

  const actionBarStyles = {
    cursor: 'pointer',
    background: '#fff',
    padding: '1em',
    color: 'steelblue',
    textDecoration: 'underline',
    borderTop: '1px solid grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const [city, setCity] = React.useState('');

  const selectRef = React.useRef();

  const filterOption = (value, option) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return option.name.toLowerCase().slice(0, inputLength) === inputValue
  }

  <Select
    onSelection={(c) => setCity(c)}
    autocomplete
    filterOption={filterOption}
    dropdownPosition="bottom"
    labelAccessor="name"
    ref={selectRef}
  >
    <Select.Label color="white" py={2} display="block">
      Cities
    </Select.Label>
    <Select.InputContainer>
      <Select.Input borderColor="grey" />
      <Select.Dropdown
        boxShadow="depth5"
        border="none"
        borderColor="grey"
      >
        <Select.OptionsList>
          {data.map((city) => (
            <Select.Option
              key={city.id}
              value={city.id}
              option={city}
              css={{
                "&:hover": {
                  background: "black",
                },
              }}
            >
              <div style={optionStyles}>{city.name}</div>
            </Select.Option>
          ))}
        </Select.OptionsList>
        <div
          style={actionBarStyles}
          tabIndex="0"
          onClick={() => {
            selectRef && selectRef.current.closeDropdown()
            alert("You can access certain public methods on the Select component by accessing its ref. \n\nFor example, `selectRef.current.closeDropdown()`")
          }}
        >
          <p>Because I'm composed of primitives, you can add arbitrary JSX any old place. Click Me!</p>
        </div>
      </Select.Dropdown>
    </Select.InputContainer>
  </Select>
```


Swappable input component:

```jsx
  import React from 'react';
  import Input from '../Input/Input';
  import data from '../../../data.json';

  const optionStyles = {
    width: '100%',
    padding: '1em .5em',
    margin: 0.
  }

  const filterOption = (value, option) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return option.name.toLowerCase().slice(0, inputLength) === inputValue
  }

  const handleDropdownChange = open => {
    console.log('dropdown changed! Is it open? ', open)
  }

  <Select
    onSelection={(c) => setCity(c)}
    onDropdownChange={handleDropdownChange}
    autocomplete
    filterOption={filterOption}
    labelAccessor="name"
  >
    <Select.Label color="white" py={2} display="block">
      Cities
    </Select.Label>
    <Select.InputContainer>
      <Select.Input renderInput={() => <Input />} />
      <Select.Dropdown
        boxShadow="depth5"
        border="none"
        borderColor="grey"
      >
        <Select.OptionsList>
          {data.map((city) => (
            <Select.Option
              key={city.id}
              value={city.id}
              option={city}
              css={{
                "&:hover": {
                  background: "black",
                },
              }}
            >
              <div style={optionStyles}>{city.name}</div>
            </Select.Option>
          ))}
        </Select.OptionsList>
      </Select.Dropdown>
    </Select.InputContainer>
  </Select>
```

Or just a regular dropdown:

```jsx
  import React from 'react';
  import Input from '../Input/Input';
  import data from '../../../data.json';

  const optionStyles = {
    width: '100%',
    padding: '1em .5em',
    margin: 0.
  }

  const [city, setCity] = React.useState('');

  <Select
    onSelection={(c) => setCity(c)}
    labelAccessor="name"
  >
    <Select.Label>Just pick one</Select.Label>

    <Select.InputContainer>
      <Select.Input />
      <Select.Dropdown
        boxShadow="depth5"
        border="none"
        borderColor="grey"
      >
        {data.map((city) => (
          <Select.Option
            key={city.id}
            value={city.id}
            option={city}
            css={{
              "&:hover": {
                background: "black",
              },
            }}
          >
            <div style={optionStyles}>{city.name}</div>
          </Select.Option>
        ))}
      </Select.Dropdown>
    </Select.InputContainer>
  </Select>
```