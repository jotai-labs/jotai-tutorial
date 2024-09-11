export const markdown = `
# Read Write atoms

These atoms are the combination of both read-only and write-only atoms.

~~~js
const count = atom(1);
export const readWriteAtom = atom((get) => get(count),
(get, set) => {
    set(count, get(count) + 1);
  },
);
~~~

The first parameter is for reading and the second is for modifying the atom value.
Since the \`readWriteAtom\` is capable of both reading and updating the original atom value, we can export \`readWriteAtom\` on its own and can hide the original atom in a smaller scope. This allows us to reduce the number of atoms in our app.

See the code for an example of how we can use only \`handleMouseMoveAtom\` to both read and update \`dotsAtom\` in our app.
`