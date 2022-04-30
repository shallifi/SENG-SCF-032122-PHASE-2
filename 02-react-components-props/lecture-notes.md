Today we built our React product table based off of [this diagram/wireframe from React.js](https://reactjs.org/docs/thinking-in-react.html)


`create-react-app` builds out the most up to date version of React, plus webpack and Babel - we do it because it is eeeeeeeasy

the command is `npx create-react-app <name-of-your-project>`

You can install dependencies individually to create a React app, so long as you have Node. Don't quite know why we would but we certainly can. Regardless we do need Babel and Webpack to effectively run a React app.
https://www.reddit.com/r/reactjs/comments/aw5qmn/are_babel_and_webpack_necessary_for_react/

### Babel
Reminder that Babel is our compiler. It translates the JSX into HTML and JS that the browser understands.


### Webpack
Webpack handles global vars (with IIFEs) and shakes down our dependency tree (drops code bundles that aren't being used) to make our app run lighter and more efficiently. (This is also called minifying our code.) Also is the bundler that sends our application to the browser.


### React.Fragments 
We can use this syntax `<> </>` - nice to use react fragments vs divs because our UI will be cleaner and easier to style. nested divs can make styling more challenging.


### import/export
as some of you have seen, import/export statements are not unique to React. They are provided to us via ES6, JS. We use import statements to:
1. import libraries
2. import React Components, JS files or functions

If we use export const without the `default` keyword we can import multiple things inside our `{}` import statement and export multiple functions from within one file (see the math.js inside utils and the accompanying import statement in App.js)

If we use export default WE DO NOT USE `{}` in our import statement
- with export default we can only import one thing per import statement
- also using export default you can only have one export statement per module/file
- however using export default we can alias our import if we want to

*** 

reminder that index.js is the entryway of our application into the index.html. App is our top level component that is passed to our index.html via .render()

Every other component in our React app is a descendent of App in some way (child, grandchild, etc).

index.js imports React and ReactDOM as well as our top level App using built in .render() and .createRoot() methods. createRoot is VERY new. You might see code that looks like this, it does the same thing:

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
document.getElementById('root')
);


Note you will see in older (but not that old!) versions of React, you have to import React from 'react' at the top of every single file. With newer versions of React this is no longer necessary.

### Definition of a component: any function that returns valid JSX. React requires that our components be PascaleCase. The return value of the component can have children but may not have siblings. If you break this rule you will see an error about adjacent JSX elements.


Props and passing to children. Helps us keep our application reusable and dynamic.
We only need to pass props as our parameter if we are planning to accept them inside our component.

Steps to build out a new React app - planning in advance can save us a ton of time:
1. create wireframe
2. we will use wireframe to map out component hierarchy

things we think about when determining where data is stored and how it is passed. who needs to know about the data? Knowing that we cannot pass information between siblings. only from parent to child and via functions, children can send some communication back up that chain, but for now we will only think about passing props from parent to child. 

Lifting state: when we determine that data is needed by a sibling of a component that has the data imported. Then the data needs to be imported one level higher, and props passed.
