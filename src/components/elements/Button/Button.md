A Simple Button
```jsx padded
import { POSITIVE, NEUTRAL, CAUTION } from './Button.js'
import FlexRow from '../../../styles/UtilityComponents/FlexRow.js';

<FlexRow>
    <Button variant={POSITIVE} onClick={() => console.log('clicked "positive"')}>Positive</Button>
    <Button variant={CAUTION} onClick={() => console.log('clicked "caution"')}>Caution</Button>
    <Button variant={NEUTRAL} onClick={() => console.log('clicked "neutral"')}>Neutral</Button>
</FlexRow>

```
