export const markdown = `
# Atom Creators

An atom creator is simply a function that returns an atom or a set of atoms. As a function, it lacks some features that the library provides, but it's an important pattern that can handle fairly complex use cases. Using an atom creator function will reduce the boilerplate of needing to set up a second atom just to update the state of the first.

Consider this case,
~~~js
const fooAtom = atom(0);
const barAtom = atom(0);
const incFooAtom = atom(null, (get, set) => {
   set(fooAtom, c => c + 1);
};
const incBarAtom = atom(null, (get, set) => {
   set(barAtom, c => c + 1);
};
~~~
Although you could attach the suitable actions to the setter of the respective atom, it would also add more boilerplate code when there are more atoms in your code.
~~~js
const incAllAtom = atom(null, (get, set, action) => {
   if(action === 'inc1') // increase first atom
   if(action === 'inc2') // increase second atom
   ...
}
~~~

We can simplify this with an atom creator function.
~~~js
const createCountIncAtoms = (initialValue) => {
  const baseAtom = atom(initialValue)
  const valueAtom = atom((get) => get(baseAtom))
  const incAtom = atom(null, (get, set) => set(baseAtom, (c) => c + 1))
  return [valueAtom, incAtom]
}
~~~
`