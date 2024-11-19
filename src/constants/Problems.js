export const Problems = [
  {
    id: 1,
    code: "function greet(name) {\n  if (!name) {\n    return 'Hello, Guest!';\n  }\n  return `Hello, ${name}!`;\n}\nconsole.log(greet());",
    options: ["A: 'Hello, Guest!'", "B: 'Hello, undefined!'", "C: Error", "D: 'Hello, !'"],
    ans: 0,
  },
  {
    id: 2,
    code: "const nums = [1, 2, 3];\nconst result = nums.filter(num => num > 1);\nconsole.log(result);",
    options: ["A: [1, 2, 3]", "B: [2, 3]", "C: [1]", "D: Error"],
    ans: 1,
  },
  {
    id: 3,
    code: "function sum(a, b = 5) {\n  return a + b;\n}\nconsole.log(sum(3));",
    options: ["A: 3", "B: 8", "C: 5", "D: Error"],
    ans: 1,
  },
  {
    id: 4,
    code: "let count = 0;\nconst increment = () => {\n  count += 1;\n};\nincrement();\nconsole.log(count);",
    options: ["A: 0", "B: 1", "C: undefined", "D: Error"],
    ans: 1,
  },
  {
    id: 5,
    code: "const data = { key: 'value' };\nconst { key, missing } = data;\nconsole.log(missing);",
    options: ["A: 'undefined'", "B: null", "C: 'value'", "D: Error"],
    ans: 0,
  },
  {
    id: 6,
    code: "const arr = [1, 2, 3];\nconst squared = arr.map(num => {\n  return num * num;\n});\nconsole.log(squared);",
    options: ["A: [1, 4, 9]", "B: [1, 2, 3]", "C: [2, 4, 6]", "D: Error"],
    ans: 0,
  },
  {
    id: 7,
    code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}",
    options: ["A: 0 1 2", "B: 3 3 3", "C: 0 0 0", "D: Error"],
    ans: 1,
  },
  {
    id: 8,
    code: "const x = 10;\n{\n  const x = 20;\n  console.log(x);\n}\nconsole.log(x);",
    options: ["A: 20 20", "B: 20 10", "C: 10 10", "D: Error"],
    ans: 1,
  },
  {
    id: 9,
    code: "function test() {\n  console.log(a);\n  var a = 10;\n}\ntest();",
    options: ["A: undefined", "B: 10", "C: Error", "D: 'ReferenceError'"],
    ans: 0,
  },
  {
    id: 10,
    code: "const x = [1, 2];\nx.push(3);\nconsole.log(x);",
    options: ["A: [1, 2]", "B: [1, 2, 3]", "C: Error", "D: 'TypeError'"],
    ans: 1,
  },
];
