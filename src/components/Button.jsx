export default function Button() {
  function handleClick(user) {
    console.log(`hello, ${user}`);
  }

  return (
    <button
      onClick={() => {
        handleClick("Sam");
      }}
    >
      Click here
    </button>
  );
}
