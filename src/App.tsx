import { createSignal, type Component } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="flex items-center justify-center">
      <p class="text-4xl text-green-700 text-center py-20 mx-12">
        Hello tailwind!
      </p>
      <p>{count()}</p>
      <button class="btn glass" onclick={() => setCount((c) => c + 1)}>
        count
      </button>
    </div>
  );
};

export default App;
