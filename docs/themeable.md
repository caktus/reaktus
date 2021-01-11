### Styled-System
Reaktus uses [styled-system](https://styled-system.com/getting-started) to make its UI Components fully customizable.

When <strong>contributing</strong> to Reaktus, it is recommended that you become familiar with the styled-system approach.

When <strong>using</strong> Reaktus, here are some examples of how you can make Reaktus components fit in perfectly with your project:

1. <strong>Theming! \[Recommended\] </strong>

  styled-system super-charges your pluggable themes.

  The following is the default theme for Reaktus. By following this pattern and updating the values, you control every aspect of your component's styles, without having to about stepping on required styles.

  ```javascript { "file": "../../src/styles/defaultTheme.js" }
  ```

2. <strong>Inline Props</strong>

  Any small context-specific tweaks can be made to individual instances of Reaktus UI Components using inline props:
  Note here the use of the scalar defintion "rounded". These props can refer to values or scales defined in either Reaktus' or your custom theme...

  `<Button variant="primary" borderRadius="rounded">Oh hey</Button>`

  OR they can refer to standard values:

  `<Button variant="primary" borderRadius="5px">Oh hey</Button>`

  ```jsx

  return <Card>Oh hey</Card>
  ```
