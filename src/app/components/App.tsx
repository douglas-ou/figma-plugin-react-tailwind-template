import React from 'react';

function App() {
  const textbox = React.useRef<HTMLInputElement>(undefined);

  const countRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = '5';
    textbox.current = element;
  }, []);

  const onCreate = () => {
    const count = parseInt(textbox.current.value, 10);
    parent.postMessage({ pluginMessage: { type: 'create-shapes', count } }, '*');
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-done') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div className="text-center m-5 text-xs font-sans">
      <h2 className="text-blue-500">Rectangle Creator</h2>
      <p className="mb-2">
        Count: <input
          ref={countRef}
          className="border-none outline-none p-2 hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_0_0_2px_#18a0fb]"
        />
      </p>
      <button
        id="create"
        onClick={onCreate}
        className="rounded bg-blue-500 text-white border-none py-2 px-4 mx-1 focus:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.3)]"
      >
        Create
      </button>
      <button
        onClick={onCancel}
        className="rounded bg-white text-black border-none py-2 px-4 mx-1 shadow-[inset_0_0_0_1px_black] outline-none focus:shadow-[inset_0_0_0_2px_#18a0fb]"
      >
        Cancel
      </button>
    </div>
  );
}

export default App;
