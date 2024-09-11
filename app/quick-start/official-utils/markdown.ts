export const markdown = `
# Utils
This is an overview of the atom creators/hooks utilities that can be found under \`jotai/utils\`.
We already covered \`atomWithStorage\` and \`loadable\` API in previous lessons.

1.[atomWithReset](https://jotai.org/docs/utilities/resettable#atomwithreset)
Creates an atom that could be reset to its initialValue using the \`useResetAtom\` hook. It works exactly the same way as primitive atom would, but you are also able to set it to a special value [\`RESET\`](https://jotai.org/docs/utilities/resettable#reset).
~~~js
import { atomWithReset } from 'jotai/utils'

const counter = atomWithReset(1)
~~~

2.[selectAtom](https://jotai.org/docs/utilities/select)
This function creates a derived atom whose value is a function of the original atom's value, determined by \`selector\`. The selector function runs whenever the original atom changes; it updates the derived atom only if \`equalityFn\` reports that the derived value has changed. By default, \`equalityFn\` is reference equality, but you can supply your favorite deep-equals function to stabilize the derived value where necessary.
~~~js
const defaultPerson = {
    name: {
      first: 'Jane',
      last: 'Doe',
    },
    birth: {
      year: 2000,
      month: 'Jan',
      day: 1,
    }
  }
  
  // Original atom.
  const personAtom = atom(defaultPerson)
  const nameAtom = selectAtom(personAtom, (person) => person.name, deepEqual)
~~~

Read [docs](https://jotai.org/docs/introduction#utilities) for more utils.
`