# Project Structure

This project follows a feature-based architecture with clear separation of concerns.

## Directory Structure

```
src/
├── components/           # React components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── features/        # Feature-specific components
│   │   ├── home/        # Home page components
│   │   ├── about/       # About page components
│   │   └── vendors/     # Vendor-related components
│   └── shared/          # Shared/reusable components
│       └── ui/          # UI component library
├── assets/              # Static assets
│   ├── images/          # Image files
│   ├── icons/           # Icon files
│   └── fonts/           # Font files
├── styles/              # CSS and styling
│   ├── components/      # Component-specific styles
│   ├── layouts/         # Layout styles
│   └── utilities/       # Utility classes
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and helpers
└── main.tsx            # Application entry point
```

## Import Patterns

### Components
```typescript
// Import from specific feature
import { HeroSection } from './components/features/home';

// Import from layout
import { Header, Footer } from './components/layout';

// Import from shared UI
import { Button, Card } from './components/shared/ui';

// Import all components
import * as Components from './components';
```

### Utilities
```typescript
// Import utilities
import { cn } from './lib/utils';

// Import types
import { BaseComponentProps } from './types';

// Import hooks
import { useMobile } from './hooks';
```

## Benefits

1. **Feature-based organization**: Related components are grouped together
2. **Clear separation**: Layout, features, and shared components are distinct
3. **Easy imports**: Index files provide clean import paths
4. **Scalable**: Easy to add new features without cluttering the root
5. **Maintainable**: Clear structure makes it easy to find and modify code
6. **Reusable**: Shared components are easily accessible across features

## Adding New Features

1. Create a new directory in `src/components/features/`
2. Add your components
3. Create an `index.ts` file to export components
4. Update `src/components/index.ts` to include the new feature
5. Import and use in your app
