# React Component Lifecycles and UseEffect
 
## A React components 3 phases.
- Mounting 
    - “Birth” When the component is first rendered
    - State is initialized 
- Updating 
    - “Life” the re-rendering of a component
    - React updates the DOM base on changes made to state
    - Cleanup lingering side effects 
- Unmounting
    - “Death” component is removed
    - Cleanup lingering side effects  

## Side Effects
When a function affects something outside of itself, it’s considered to have caused a side effect. Fetching, event listeners, and interval timers are all examples of side effects. In React, the primary purpose of a component is to render JSX. Components may need data fetched from a server, so we will need to cause a side effect. That’s where useEffect() comes in. Use effect is a hook (like useState) that allows us to manage the side effects in our components. 


## useEffect()
```
useEffect(()=>{
    //Initial render and re-renders 
})

useEffect(()=>{
    //The dependency array, when empty, causes useEffect to run only once on the initial render
},[])

useEffect(()=> {
    //When the dependency has a state variable, use effect will run whenever a change is made to that variable.
},[stateVar])

useEffect(() => {
    return () => {
        // A function can be returned by useEffect as a "Clean up" function to remove any lingering background functionality when a component is unmounted. 
    }
},[stateVar])

``
