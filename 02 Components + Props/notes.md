# Components and Props

## What is a Component?

A Component is a reusable piece of UI.

Example:

- Header
- Sidebar
- Footer
- Dashboard

---

## Types of Components

### Functional Component

```jsx
function Welcome() {

    return <h1>Hello</h1>;

}
```

### Arrow Function Component

```jsx
const Welcome = () => {

    return <h1>Hello</h1>;

}
```

---

## What are Props?

Props stands for Properties.

Props allow data to be passed from Parent Component to Child Component.

---

## Parent to Child Communication

Parent

```jsx
<Greeting name="Chaitanya" />
```

Child

```jsx
function Greeting({ name }) {

    return <h1>{name}</h1>;

}
```

---

## Props are Read Only

Props cannot be modified inside child components.

---

## Destructuring Props

Preferred:

```jsx
function User({ name }) {

    return <h1>{name}</h1>;

}
```

---

## Benefits

- Reusable Components
- Cleaner Code
- Easy Maintenance
- Better Scalability

# Components and Props Questions

## Q1 What is a Component?

A reusable piece of UI.

---

## Q2 What are Props?

Props are used to pass data from Parent Component to Child Component.

---

## Q3 Can Props be modified?

No.

Props are read-only.

---

## Q4 Difference Between Props and State?

Props

- Passed from Parent
- Read-only

State

- Managed inside component
- Can change

---

## Q5 What is Props Destructuring?

Extracting values directly from props.

Example:

```jsx
function User({ name }) {

    return <h1>{name}</h1>;

}
```

---

## Q6 How Does Data Flow in React?

Parent → Child

One-Way Data Flow

---

## Q7 Why Use Components?

- Reusability
- Maintainability
- Scalability

---

## Q8 Functional Component vs Class Component?

Modern React uses Functional Components with Hooks.

Class Components are legacy.
