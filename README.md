# Reaktus
### A component library for React, by Caktus Group 🌵

## 🚀 Use
1. In your project, install `reaktus` using `npm`. `react`, `react-dom` and `styled-components` are peer dependencies.
```bash
npm i reaktus styled-components
```
  
2. Then import:
```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'reaktus';

function MyForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <Input type='email' value={email} onChange={e => setEmail(e.target.value)} label="Email" />
            <Input type='password' value={password} onChange={e => setPassword(e.target.value)} label="Password" />
            <Button type='positive' onClick={() => alert('Not really logging in.')}>Log in!</Button>
        </form>
    )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```
  
  
## 🔥 Develop
1. Clone the repo:
```bash
git clone https://github.com/caktus/reaktus.git
```
  
2. Install dependencies:
```bash
cd reaktus
npm i
```
  
3. Start `styleguidist` server:
```bash
npm run start
```

4. Open browser to `localhost:6060`


## 🔨 Test
1. Clone the repo:
```bash
git clone https://github.com/caktus/reaktus.git
```
  
2. Install dependencies:
```bash
cd reaktus
npm i
```

3. Run tests:
```bash
npm run test
```
