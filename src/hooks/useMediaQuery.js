import { useState, useEffect } from 'react';

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      // Update the state with the current value
      setMatches(mediaQuery.matches);
      // Create an event listener
      const handler = (event) => setMatches(event.matches);
      // Attach the event listener to know when the matches value changes
      try {
        console.log(1);
        mediaQuery.addEventListener('change', handler);
      } catch (error) {
        console.log(2);
        mediaQuery.addListener('change', handler);
      }

      // Remove the event listener on cleanup
      return () => mediaQuery.removeEventListener('change', handler);
    },
    // eslint-disable-next-line
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
}
