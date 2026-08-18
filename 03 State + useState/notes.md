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

# State + useState Questions

## Q1 What is State?

State is data managed inside a component that can change over time.

---

## Q2 What is useState?

A React Hook used to create and manage state.

---

## Q3 What happens when state changes?

React re-renders the component.

---

## Q4 Difference Between Props and State?

Props

- Read-only
- Parent to Child

State

- Managed inside component
- Can change

---

## Q5 Why should state not be mutated directly?

React may not detect changes correctly.

---

## Q6 How do you update an object in state?

Using spread operator.

```jsx
setUser({
    ...user,
    city: "Mumbai"
});
```

---

## Q7 How do you update an array in state?

```jsx
setUsers([
    ...users,
    newUser
]);
```

---

## Q8 What are common uses of state?

- Forms
- Tables
- Filters
- API Data
- Search
- Dashboards
