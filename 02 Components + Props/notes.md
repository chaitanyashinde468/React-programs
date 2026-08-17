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
