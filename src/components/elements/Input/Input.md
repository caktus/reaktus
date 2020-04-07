A form input for simple text-based inputs
```jsx
import React, { useState } from 'react';
import FlexRow from '../../../styles/UtilityComponents/FlexRow.js';

const [text, setText] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [url, setUrl] = useState('');

<FlexRow>
    <Input type="text" onChange={e => setText(e.target.value)} label="Text" />
    <Input type="email" onChange={e => setEmail(e.target.value)} label="Email" />
    <Input type="password" onChange={e => setPassword(e.target.value)} label="Password" />
    <Input type="url" onChange={e => setUrl(e.target.value)} label="URL" />
</FlexRow>
```