import React, { useRef } from 'react';

export const App = () => {

  const input = useRef();
  const file = useRef();

  const submit = () => {
    // console.log(input.current.value);
    console.log(file.current.files[0]);

    const form = new FormData();
    form.append('file', file.current.files[0]);
    form.append('field', input.current.value);
    fetch('/hello', { method: 'POST', body: form})
  }

  return (
    <div>
      <div>
        <span>Hello world</span>
        <input type='text' name='field' ref={input} />
        <input type='file' ref={file} />
      </div>
      <input type='submit' value='Send' onClick={submit} />
    </div>
  )
};

export default App;
