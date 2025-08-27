1. The difference between these selectors are based on their activities because getElementById is used to use for calling an element by his id, getElementsByClassName returns all the classes, for querySelector it returns the first selector and for querySelectorAll it calls all the selectors.

2. To create a new element into the DOM by using document.createElement() and to insert we use append, appendChild.

3. Event Bubbling is an event by which we can call the parent element. It works like a root and go one parent from another and works like a tree.

4. Event Delegation is like Event Bubbling but not for parents but for child. Event Delegation select the parent element and all the child will work automatically. It is useful because we don't need to use addEventListener to all the element cause we can call all of them by calling there parent and we can call the parent using Event Delegation.

5. preventDefault() can turn off the default behavior of an element like submit button.
stopPropagation() is used for turn off a event from a element without make any change to other child.
