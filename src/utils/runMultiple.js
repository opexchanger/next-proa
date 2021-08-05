export default function runMultiple(...functions) {
  return () => {
    functions.forEach((fn) => fn());
  }
}