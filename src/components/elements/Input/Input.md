A simple composable input for text based inputs.
  
Add some values and click "Log In" to see validation!
```jsx
import React, { useState } from 'react';
import Button from '../Button/Button';
import FlexRow from '../../../styles/UtilityComponents/FlexRow.js';
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const wrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: 200,
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
        icon={faLock}
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
