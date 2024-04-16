# Dynamic Tabs Component

This JavaScript module provides a dynamic and accessible tabs component that can be easily integrated into any web project. It offers customizable options for navigation and content selectors, active class names, and the ability to update the URL based on the active tab. The component is designed with accessibility in mind, utilizing ARIA roles and properties to enhance usability for all users.

## Features

- Dynamic tabs functionality with customizable options.
- ARIA roles and attributes for enhanced accessibility.
- Keyboard navigation support (Arrow keys).
- Optional URL update based on the active tab.

## Installation

Simply copy the JavaScript code provided into a `.js` file in your project, or embed it directly into your HTML file within `<script>` tags.

## Usage

1. **HTML Structure:** 
   
   Your HTML should have a structure that includes elements for the tabs' navigation and content. Each tab navigation item should have a corresponding content item. Use the `data-tab` attribute to distinguish between navigation (`nav`) and content (`content`) elements.

   ```html
   <div id="myTabs">
       <div data-tab="nav">Tab 1</div>
       <div data-tab="nav">Tab 2</div>
       <div data-tab="content">Content 1</div>
       <div data-tab="content">Content 2</div>
   </div>
   ```

## Initialization

Instantiate the Tabs class with the selector of your tabs container. You can also pass an options object to customize the selectors, active class names, and URL update behavior.

   ```js
   new Tabs('#myTabs', {
       navSelector: '[data-tab="nav"]',
       contentSelector: '[data-tab="content"]',
       activeClass: 'active',
       contentActiveClass: 'active-content',
       updateURL: true
   });
   ```

## Options

The following options can be customized:

- navSelector: Selector for the tab navigation items. Default is [data-tab="nav"].
- contentSelector: Selector for the tab content items. Default is [data-tab="content"].
- activeClass: Class name added to the active navigation item. Default is 'active'.
- contentActiveClass: Class name added to the active content item. Default is 'active-tab'.
- updateURL: Whether to update the URL hash based on the active tab. Default is true.

## Accessibility

This tabs component uses ARIA roles and properties to ensure that it is accessible to users with assistive technologies. Navigation items are marked as tabs and content items as tab panels. Keyboard navigation with arrow keys is supported, enhancing the user experience for keyboard users.

## Contributing

Feel free to fork the project, submit pull requests, or report bugs and suggestions in the issues section of the repository.