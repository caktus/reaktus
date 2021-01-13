A simple composable input for text based inputs.
  
Add some values and click "Log In" to see validation!
```jsx
  import React, { useState } from 'react';
  import Button from '../Button/Button';
  import FlexRow from '../../../styles/UtilityComponents/FlexRow.js';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

  const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
  }

  const customIconStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#82908d',
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 33,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const customIconWithFocus = {
    ...customIconStyles,
    background: "#89af5b",
  }

  const errorIconWithFocus = {
    ...customIconStyles,
    background: "#b04846",
  }

  const disabledIconWithFocus = {
    ...customIconStyles,
    background: "whitesmoke",
  }

  const _getIconStyles = (hasFocus, variant) => {
    if (variant === 'normal') return hasFocus ? customIconWithFocus : customIconStyles
    if (variant === 'error') return errorIconWithFocus;
    if (variant === 'disabled') return disabledIconWithFocus
    else return {}
  }

  const CustomIcon = ({ hasFocus, variant }) => {
    return <div style={_getIconStyles(hasFocus, variant)}><FontAwesomeIcon style={{ color: 'white' }} icon={faLock} /></div>
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  <div>
    <div style={wrapperStyles}>
      <Input.Label errors={errors.email}>Email</Input.Label>
      <Input 
          ref={emailRef}
          type="text" 
          value={email} 
          label="email"
          icon={faEnvelope}
          errors={errors.email}
          onChange={e => setEmail(e.target.value)} 
      />
      <Input.Errors errors={errors.email} />
    </div>
    <div style={wrapperStyles}>
      <Input.Label errors={errors.password}>Password</Input.Label>
      <Input 
        ref={passwordRef}
        type="password" 
        value={password} 
        label="password"
        icon={props => <CustomIcon {...props}/>}
        pl="6"
        errors={errors.password}
        onChange={e => {
            setPassword(e.target.value)
            setErrors({ ...errors, password: [] });
        }} 
      />
      <Input.Errors errors={errors.password} />
    </div>

    <FlexRow style={{ marginTop: '2em' }}>
      <Button onClick={() => setErrors({ password: ['Invalid credentials']})}>Log In</Button>
      <Button 
        variant="neutral" 
        onClick={() => emailRef && emailRef.current && emailRef.current.focus()}
      >
        Declarative Focus (email field)!
      </Button>
      <Button 
        variant="neutral" 
        onClick={() => passwordRef && passwordRef.current && passwordRef.current.focus()}
      >
        Declarative Focus (password field)!
      </Button>
    </FlexRow>
  </div>
```
