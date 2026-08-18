# State and useState

## What is State?

State is data managed inside a React component.

State can change over time.

---

## What is useState?

A React Hook used to create and manage state.

Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

## Why State?

When state changes:

React re-renders the component.

---

## Types of State

### Number

```jsx
const [count, setCount] = useState(0);
```

### String

```jsx
const [name, setName] = useState("Chaitanya");
```

### Boolean

```jsx
const [loading, setLoading] = useState(false);
```

### Object

```jsx
const [user, setUser] = useState({});
```

### Array

```jsx
const [users, setUsers] = useState([]);
```

---

## Important Rule

Never mutate state directly.

Wrong

```jsx
users.push("Amit");
```

Correct

```jsx
setUsers([...users, "Amit"]);
```

---

## Why useState is Important?

- Forms
- API Data
- Tables
- Search
- Filters
- Dashboards
