# React Fundamentals + JSX

## What is React?

React is a JavaScript library used for building user interfaces.

Developed by Facebook.

---

## Is React a Library or Framework?

React is a Library.

Reason :

React focuses only on UI.

Frameworks provide :

Routing,
State Management,
Structure

React needs additional libraries for those.

---

## JSX

JSX stands for JavaScript XML.

Allows writing HTML-like syntax inside JavaScript.

---

## Why JSX?

- Easier to read
- Easier to write
- Easier to maintain

---

## JSX Rules

### Single Parent Element

```jsx
<>
</>
```

---

### className instead of class

```jsx
<div className="container">
```

---

### camelCase Event Names

```jsx
<button onClick={handleClick}>
```

---

## Virtual DOM

React creates a virtual copy of DOM.

Only changed elements are updated.

---
Problem
---
Updating Real DOM is expensive.

---
React Solution
---
React creates :

Virtual DOM

in memory.

---
When state changes:
---
Old Virtual DOM
      ↓
New Virtual DOM
      ↓
Diffing
      ↓
Update only changed nodes

This process is called:

---
Reconciliation
---

---

## Reconciliation

Process of comparing old Virtual DOM and new Virtual DOM.

---

## Advantages of React

- Reusable Components
- Better Performance
- One-Way Data Flow
- Large Ecosystem

# React Fundamentals Questions

## Q1 What is React?

React is a JavaScript library for building user interfaces.

---

## Q2 Is React a Framework?

No.

React is a Library.

---

## Q3 What is JSX?

JavaScript XML.

HTML-like syntax inside JavaScript.

---

## Q4 Why use JSX?

Improves readability and developer experience.

---

## Q5 What is Virtual DOM?

A lightweight copy of Real DOM maintained by React.

---

## Q6 What is Reconciliation?

Process of comparing old and new Virtual DOM.

---

## Q7 Why is React Fast?

React updates only changed DOM elements.

---

## Q8 What is Component-Based Architecture?

Building UI using reusable independent components.

---

## Q9 What is One-Way Data Flow?

Data flows from Parent to Child.

---

## Q10 Who Developed React?

Facebook (Meta).
