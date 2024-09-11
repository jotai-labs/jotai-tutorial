export const markdown = `
# Write Only atoms

With the help of write-only atoms, you can modify the atoms it relies on. It's basically a two-way data binding, changing the derived atom also changes the parent atom and vice-versa, so use these atoms very carefully.

~~~js
const textAtom = atom('write only atoms')
const uppercase = atom(null, (get, set) => {
    set(textAtom, get(textAtom).toUpperCase())
})
~~~

The first value of the callback is always be null. The second value is the function that modifies the atom value.

Let's take a more practical use case of write-only atoms.

Here we define a \`dotsAtom\`, which is an atom of positions of points that we draw on the canvas, and a \`drawingAtom\`, which is a boolean atom.
~~~js
const dotsAtom = atom([]);
// true when we're drawing on the canvas
const drawingAtom = atom(false);
~~~

The \`handleMouseDownAtom\` and \`handleMouseUpAtom\` are two write-only atoms that we use to set the value of \`drawingAtom\`.
The \`handleMouseMoveAtom\` is a write-only atom which adds the position of new points to the \`dotsArray\` atom when we are drawing on the canvas.

~~~js
const handleMouseMoveAtom = atom(
  null,
  (get, set, update: Point) => {
    if (get(drawingAtom)) {
      set(dotsAtom, (prev) => [...prev, update]);
    }
  }
);
~~~

**Note:** You must be thinking, "Why are we not updating the atoms value directly? Why use a write-only atom to update its value?".

Well, updating the value using the write-only atoms prevents extra rerenders in our app.
`