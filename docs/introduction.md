# Reaktus, by Caktus 🌵
  
### Reaktus is a React component library by Caktus Group.
  
---
<!-- ## 🚀 To use
1. In your project, install `reaktus` using `npm`. `react`, `react-dom` and `styled-components` are peer dependencies.
```bash
npm i reaktus styled-components
```
  
2. Then import:
```jsx static
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
``` -->

## 🚀 Setup
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
---
## 💣 Test
1. Run tests:
```bash
npm run test
```

---
## 💪 Develop
  
Components are found in `src/components` grouped by high-level functionality. Each component lives in its own directory because each component comes with a minimum of four required files:  
  
1. The component, eg `Button.js`  
<br/>
2. The styles, eg `Button.styled.js`  
<br/>
3. The example, eg `Button.md`  
<br/>
4. and the test, eg `Button.test.js`  
  
It's important to maintain these naming conventions and structure; not only for ease of development and scalability, but because styleguidist knows not to render `*.styled.js` and `*.test.js` as examples.

---  
## 🔨 Tooling
The development package for reaktus was built to be light and easy to traverse.  
  
We're using [Styleguidist](https://react-styleguidist.js.org/) for developing components in isolation.  It's lighter weight than storybook, and feels a bit cleaner to work with.  

Styling is accomplished using the [styled-components](https://styled-components.com/) library. It's the best tool for accomplishing richly interactive and truly modular React components.

For our bundling needs we use [rollup.js](https://rollupjs.org/guide/en/) because it's new (as of the date this sentence was written) and worth trying out!

---