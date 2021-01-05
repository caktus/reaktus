A simple microinteraction-rich input for text-based inputs, with error state.  
  
Add some values and click "Log In" to see validation!
```jsx
import React, { useState } from 'react';
import Button from '../Button/Button';
import FlexCol from '../../../styles/UtilityComponents/FlexCol.js';

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({});

// <FlexCol>
<>
    <Input 
        type="text" 
        value={email} 
        label="email"
        errors={errors.email}
        onChange={e => setEmail(e.target.value)} 
    />

    <Input 
        type="password" 
        value={password} 
        label="password" 
        errors={errors.password}
        onChange={e => {
            setPassword(e.target.value)
            setErrors({ ...errors, password: [] });
        }} 
    />

    <Button onClick={() => setErrors({ password: ['Invalid credentials']})}>Log In</Button>
</>
// </FlexCol>
```
