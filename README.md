# 📘 JavaScript Basic Interview Questions

---

## 1) What is the difference between `null` and `undefined`?

### 🔰 undefined
যখন কোনো ভ্যারিয়েবল declare করা হয়েছে কিন্তু value assign করা হয়নি, তখন সেটি `undefined` হয়।

```js
let name;
console.log(name); // undefined
```

### 🔰 null
`null` মানে ইচ্ছাকৃতভাবে খালি মান দেওয়া হয়েছে।

```js
let user = null;
```

### ⚡ পার্থক্য
- `undefined` → value দেওয়া হয়নি  
- `null` → ইচ্ছা করে খালি value দেওয়া হয়েছে  

---

## 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

### 🔰 map()
- Array এর প্রতিটি element এর উপর কাজ করে
- নতুন একটি array return করে

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

### 🔰 forEach()
- শুধু loop চালায়
- কোনো নতুন array return করে না

```js
numbers.forEach(num => {
  console.log(num * 2);
});
```

### ⚡ পার্থক্য

| map() | forEach() |
|-------|------------|
| নতুন array return করে | কিছু return করে না |
| Data transform করতে ব্যবহার হয় | শুধু loop চালাতে ব্যবহার হয় |

---

## 3) What is the difference between `==` and `===`?

### 🔰 == (Loose Equality)
- শুধু value compare করে
- Type convert করতে পারে

```js
5 == "5" // true
```

### 🔰 === (Strict Equality)
- Value এবং type দুটোই compare করে

```js
5 === "5" // false
```

### ⚡ Best Practice
সবসময় `===` ব্যবহার করা ভালো।

---

## 4) What is the significance of `async/await` in fetching API data?

`async/await` হলো JavaScript-এ asynchronous operation handle করার একটি modern ও clean পদ্ধতি।  
এটি Promise এর উপর ভিত্তি করে কাজ করে।

---

## 🚀 Why async/await is Important?

- 🔹 Promise এর উপর ভিত্তি করে কাজ করে  
- 🔹 Asynchronous code কে synchronous এর মতো readable করে  
- 🔹 `.then()` chaining কমিয়ে code clean ও maintainable করে  
- 🔹 `try...catch` দিয়ে সহজে error handle করা যায়  
- 🔹 Multiple API call sequentialভাবে manage করা সহজ হয়  
- 🔹 বড় project এ এটি best practice হিসেবে ব্যবহার করা হয়  

---

## 🧠 Example

```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

---

## ⚡ Conclusion

`async/await` ব্যবহার করলে code আরও পরিষ্কার, সহজ এবং professional হয়।  
API based application তৈরির ক্ষেত্রে এটি অত্যন্ত গুরুত্বপূর্ণ।

---

## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

### 🔰 Global Scope
সব জায়গা থেকে access করা যায়।

```js
let name = "Arnie";
```

### 🔰 Function Scope
Function এর ভিতরে declare করা ভ্যারিয়েবল বাইরে থেকে access করা যায় না।

```js
function test() {
  let age = 25;
}
```

### 🔹 Block Scope
`let` এবং `const` block `{}` এর ভিতরে কাজ করে।

```js
{
  let city = "Dhaka";
}
```

### ⚠️ Note
- `var` block scope মানে না  
- `let` এবং `const` block scope মানে  

