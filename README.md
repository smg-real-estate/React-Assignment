# README

Welcome to the _SMG Real Estate_ React Assignment! 🤩

## Setup

With either yarn or npm installed, run:

```bash
yarn install | npm install
yarn start | npm start
```

## Instructions

This is a TypeScript React project. Complete the following challenges in order:

### Core Requirements

1. **Display Listings**
   - Use the existing `Listing` component from `src/components/Listing`
   - Load and display all listings from `/src/assets/listings.json` on the Home Page

1. **Navigation**
   - Implement listing detail pages with clickable listings
   - Add a back button for navigation to home page
   - Use React Router for routing

1. **Card Component**
   - Create a new reusable `Card` component
   - Reference style: [Bootstrap Cards with Images](https://getbootstrap.com/docs/4.0/components/card/#images)
   - Required elements:
     - Featured image
     - Title
     - Description (truncated to 20 characters)

1. **Styling**
   - Add responsive CSS styling
   - Ensure consistent design across components
   - Consider using CSS-in-JS or a styling framework of your choice

1. **Testing**
   - Write unit tests for all components
   - Achieve meaningful test coverage
   - Use React Testing Library or Jest

### Bonus Challenges

1. **API Integration**
   - Create a simple backend server
   - Implement REST API endpoints for listings
   - Refactor frontend to fetch data from API instead of static JSON
   - Handle loading and error states

1. **UI Enhancement**
   - Reference: Implement features inspired by [Homegate.ch](https://www.homegate.ch)
   - Focus on visual similarity and user experience

1. **Feature Addition**
   - Choose and implement one additional feature from Homegate.ch
   - Document your choice and reasoning

### Evaluation Criteria

- Code quality and organization
- TypeScript usage
- Component reusability
- Testing coverage
- UI/UX considerations
