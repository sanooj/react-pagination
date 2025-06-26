# React Pagination Component

A flexible and customizable pagination component for React applications.

## Installation

```bash
npm install react-pagination
```

## Usage

```tsx
import { Pagination } from "react-pagination";

// Basic usage
<Pagination
data={items}
renderItem={(item) => <div>{item.name}</div>}
/>

// With custom configuration
<Pagination
data={items}
renderItem={(item) => <div>{item.name}</div>}
pageSize={10}
className="custom-pagination"
buttonClassName="custom-button"
/>
```

## Props

### Required Props

- `data`: `T[]` - The array of items to paginate
- `renderItem`: [(item: T) => ReactElement](cci:1://file:///Users/sanooj/learn/npm-local/react-pagination/src/pageNavigation.tsx:33:0-81:2) - A function that renders each item

### Pagination Props

- `pageSize`: `number` - Number of items per page (default: 10)
- `as`: `ElementType` - The HTML element to use as the wrapper (default: 'div')

### Styling Props

- `className`: `string` - Class name for the pagination container (default: 'pagination')
- `wrapperClassName`: `string` - Class name for the items wrapper (default: 'pagination-wrapper')
- `buttonClassName`: `string` - Class name for all pagination buttons (default: 'button')
- `activeButtonClassName`: `string` - Class name for the active page button (default: 'active')
- `nextButtonClassName`: `string` - Class name for the next button (default: 'next')
- `previousButtonClassName`: `string` - Class name for the previous button (default: 'previous')
- `navigationClassName`: `string` - Class name for the navigation container (default: 'navigation')

### Button Props

- `buttonProps`: `Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">` - Additional props to pass to all buttons
- `nextButtonLabel`: `string` - Text for the next button (default: 'Next')
- `previousButtonLabel`: `string` - Text for the previous button (default: 'Previous')

### HTML Attributes

The component extends `HTMLAttributes<HTMLDivElement>`, so you can pass any valid HTML attributes to the container div.

## Example

```tsx
<Pagination
  data={items}
  renderItem={(item) => <div>{item.name}</div>}
  pageSize={10}
  className="my-pagination"
  buttonClassName="my-button"
  activeButtonClassName="my-active-button"
  nextButtonLabel="→"
  previousButtonLabel="←"
  buttonProps={{
    type: "button",
    style: { padding: '8px 16px' }
  }}
/>
```

## Accessibility

The component includes proper ARIA attributes for better accessibility:
- `aria-label` for all buttons
- `aria-current="page"` for the active page button
- `aria-disabled` for disabled buttons

## TypeScript Support

The component is fully typed and supports TypeScript. Import types as needed:

```typescript
import type { PaginationProps } from 'react-pagination';
```

## Development

To build the package:

```bash
npm run build
```

## License

ISC
