export const markdown = `
# Persisting state value

In this lesson, we will take a look at how we can persist the state value to \`localStorage\` with jotai \`atoms\`.
Persisting state to \`localStorage\` can be challenging. You might want to persist the user's preferences or data for their next session.

Jotai \`atomWithStorage\` is a special kind of atom that automatically syncs the value provided to it with localstorage or sessionStorage, and picks the value upon the first load automatically. It's available in the \`jotai/utils\` module.
To persist our theme atom, simply create it with the \`atomWithStorage\` atom.
~~~js
const theme = atomWithStorage('dark', false)
~~~

Now, when you reload the preview section of the editor you will see that the theme matches the value from before the page reload.
`;
