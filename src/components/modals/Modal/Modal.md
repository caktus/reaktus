A fullscreen or windowed modal. Windowed modals render a full-screen semi-opaque clickable underlay.
```jsx
import { useState } from 'react';
import FlexRow from '../../../styles/UtilityComponents/FlexRow.js';
import Button from '../../elements/Button/Button.js';

const [showModal, setShowModal] = useState(false);

<>
    <FlexRow>
        <h2>It's a work in progress...</h2>
    </FlexRow>
</>
```