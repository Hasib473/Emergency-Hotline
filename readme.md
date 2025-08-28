
###  Answering  the questions :

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
 Ans : getElementById is one of the important js DoM method . It Means select one element by its Id . Its return single Dom element . Its only work for Id selector .
       getElementByClassName is also one of the important method . Its mean select all element using given class . Its return HTML collection.
       querySelector/ querySelectorAll selects elements using CSS selectors. quesrySelector return NodeList of all matching elements.
   
   
2. How do you **create and insert a new element into the DOM**?
Ans : Create and insert a new elemnt  into the DOM code is:
      Suppose i have a container id and i watn to add a new div element with him. so the code is
      let newDiv = document.createElement('div');
      let container = document.getElementById('container');
      container.appendChild(newDiv);
  

3. What is **Event Bubbling** and how does it work?
  Ans: When we do something like click on a small element inside a bigger one, the action also happens on the bigger elements around it automatically.
   Basically its called Event Bubbling .
   When we click on the child element it first runs on that element, then automatically moves up to its parent, then grandparent, and so on, until it reaches the top of the page.
   
4. What is **Event Delegation** in JavaScript? Why is it useful?
 Ans : Event Delegation is when we put an event listener on a parent element instead of many child elements. The parent handles events for its children automatically.
      Its useful because
       (i) we don’t need to add listeners to every child.
       (ii) Works even for new elements added later.
   
5. What is the difference between **preventDefault() and stopPropagation()** methods?
  Ans:  preventDefault() stops the default action of an element
        stopPropagation() stops the event from bubbling up or down in the DOM
        
