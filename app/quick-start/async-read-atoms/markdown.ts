export const markdown = `
# Async Read Atoms

Using async atoms, you gain access to real-world data while still managing them directly from your atoms and with incredible ease.

We separate async atoms in two main categories:
• Async read atoms
• Async write atoms

Let's first examine async read atoms.
The \`read\` function of an atom can return a Promise.
~~~js
const counter = atom(0);
const asyncAtom = atom(async (get) => get(counter) * 5);
~~~

Jotai inherently leverages \`Suspense\` to handle asynchronous flows.

~~~js
<Suspense fallback={<span>loading...</span>}>
      <AsyncComponent />
</Suspense>
~~~

But there is a more Jotai-esque way of doing this using the [\`loadable\`](https://jotai.org/docs/utilities/async#loadable) API present in \`jotai/utils\`. By simply wrapping the atom in the \`loadable\` util, it returns the value with one of the three states: \`loading\`, \`hasData\`, and \`hasError\`.

~~~js
{
    state: 'loading' | 'hasData' | 'hasError',
    data?: any,
    error?: any,
}
~~~

~~~js
import { loadable } from "jotai/utils"

const countAtom = atom(0);
const asyncAtom = atom(async (get) => get(countAtom));
const loadableAtom = loadable(asyncAtom)
const AsyncComponent = () => {
  const [value] = useAtom(loadableAtom)
  if (value.state === 'hasError') return <div>{value.error}</div>
  if (value.state === 'loading') {
    return <div>Loading...</div>
  }
  return <div>Value: {value.data}</div>
~~~
`;
