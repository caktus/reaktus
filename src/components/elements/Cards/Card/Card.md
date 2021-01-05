```jsx
import FlexWrapRow from '../../../../styles/UtilityComponents/FlexWrapRow.js';

<FlexWrapRow>
    <Card></Card>
    <Card variant='interactive' onClick={() => console.log('You did it!!')}>
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ fontFamily: 'Arial', fontStyle: 'italic', fontWeight: 'lighter' }}>(click me)</p>
        </div>
    </Card>
</FlexWrapRow>
```