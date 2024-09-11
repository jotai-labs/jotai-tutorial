const code1 = `import { atom, useAtom } from 'jotai';
import Suspense from './Suspense.js';

const counter = atom(1);

const asyncAtom = atom(null, async (get, set) => {
    await fetch('https://jsonplaceholder.typicode.com/todos/');
    set(counter, get(counter) + 1);
});

function AsyncComponent() {
  const [count] = useAtom(counter);
  const [, incCounter] = useAtom(asyncAtom);
  return (
    <div className="app">
      <h1>{count}</h1>
      <button onClick={incCounter}>inc</button>
    </div>
  )
}

export default function Page() {
   return (
    <div>
      <AsyncComponent />
      <Suspense />
    </div>
  )
}
`;

const code2 = `import { atom, useAtom } from 'jotai';
import { Suspense } from 'react'

const todo = {
    id: 0,
    title: 'learn jotai',
    completed: true
};

const request = async () => (
    fetch('https://jsonplaceholder.typicode.com/todos/5')
        .then((res) => res.json())
)
const todoAtom = atom(todo);

function Component() {
  const [todoGoal, setGoal] = useAtom(todoAtom);
  const handleClick = () => {
    setGoal(request());
  }
  return (
    <div className="app">
      <p>Today's Goal: {todoGoal.title}</p>
      <button onClick={handleClick}>New Goal</button>
    </div>
  )
}

export default function AsyncSuspense() {
   return (
    <div className="app">
      <Suspense fallback={<span>loading...</span>}>
        <Component />
      </Suspense>
    </div>
  )
}
`;

const files = {
  "/App.js": {
    code: code1,
  },
  "/Suspense.js": {
    code: code2,
  },
};

export default files;
