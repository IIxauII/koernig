You are an expert in Ionic Framework, Angular, and mobile app development. You write functional, maintainable, performant, and accessible code following Ionic and Angular best practices for cross-platform mobile applications.

## Project Setup

- Use `ionic start` command to create new projects
- Available templates: `tabs`, `sidemenu`, `blank`
- Templates include best practices for scalable codebases
- Use `ionic start --list` to see all available templates
- Provide project name and template as command arguments to bypass prompts

## Angular Integration

- Ionic v8 works with Angular standalone components (default in Angular v20+)
- Use `@ionic/angular` package for Angular integration
- Ionic components integrate seamlessly with Angular router
- Follow Angular best practices (see angular.md) in addition to Ionic-specific patterns

### Lifecycle Hooks

- Use Ionic lifecycle hooks in addition to Angular lifecycle hooks
- Ionic page lifecycle: `ionViewWillEnter`, `ionViewDidEnter`, `ionViewWillLeave`, `ionViewDidLeave`
- These hooks fire at different times than Angular lifecycle hooks
- Use `ionViewWillEnter` for data loading that should happen every time the page is entered
- Use `ionViewDidEnter` for operations that need the view to be fully rendered
- Use `ionViewWillLeave` for cleanup before leaving the page
- Use `ionViewDidLeave` for cleanup after the page has left

### Navigation

- Use Angular Router with Ionic navigation
- Ionic navigation works seamlessly with Angular's router
- Use `routerLink` for navigation in templates
- Use `Router` service for programmatic navigation
- Handle deep linking appropriately
- Configure routes with proper redirects

## Theming

- Use CSS variables (CSS custom properties) for theming Ionic components
- CSS variables allow dynamic theming without recompiling
- Override Ionic's CSS variables to customize component appearance
- CSS variables are scoped and can be set at different levels (component, page, app)
- Use platform-specific styles to adapt UI to iOS and Android design guidelines
- Support dark mode using CSS variables and media queries
- Support high contrast mode for accessibility
- Use Ionic's color generator tool for creating custom color palettes

## Development Workflow

- Use `ionic serve` for development server
- Preview apps in browser during development
- Use platform-specific development tools for iOS and Android
- Handle hardware back button appropriately on Android
- The hardware back button on Android should navigate back in navigation history
- Use Ionic's hardware back button handling utilities

### Keyboard Management

- Handle on-screen keyboard interactions properly on mobile devices
- Keyboard can affect viewport and layout
- Use Ionic's keyboard utilities to manage keyboard behavior
- Adjust viewport when keyboard appears/disappears
- Prevent content from being hidden behind keyboard
- Test keyboard interactions on actual devices, not just browser

### Focus Management

- Implement proper focus management for accessibility
- Ensure focus moves logically through interactive elements
- Manage focus when navigating between pages
- Handle focus for keyboard navigation
- Test with screen readers for accessibility compliance

## Layout and Structure

- Use Ionic's responsive grid system
- Leverage CSS utilities for common styling needs
- Use global stylesheets appropriately
- Implement dynamic font scaling for accessibility

## Performance

- Always use `trackBy` function with `*ngFor` when iterating over Ionic components
- Provide stable identity for each loop element to help Angular manage change propagation efficiently
- Use `trackBy` to return a unique identifier (like `id`) for each item in the list
- This prevents Angular from recreating components and only updates content inside components
- Example: `<ion-item *ngFor="let item of items; trackBy:trackItems">` with `trackItems(index: number, itemObject: any) { return itemObject.id; }`
- Optimize for mobile devices with efficient DOM writes
- Use hardware-accelerated transitions
- Implement touch-optimized gestures
- Consider lazy loading for better performance
- Use skeleton screens for improved perceived performance

## Deployment

- Build for iOS App Store following Ionic guidelines
- Build for Android Play Store following Ionic guidelines
- Configure Progressive Web App (PWA) features appropriately
- Test on target platforms before deployment

## Security

- Follow Ionic security best practices (to be expanded)
- Use secure storage for sensitive data
- Implement proper authentication patterns

## Troubleshooting

- Use Ionic debugging tools and techniques
- Address common build errors
- Resolve runtime issues
- Handle native errors appropriately
- Fix CORS errors when necessary

