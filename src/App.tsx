import { useState, ChangeEvent } from 'react';

import Editor from './screens/Editor';
import Home from './screens/Home';

export default function App() {
  const [image, setImage] = useState<File | null>(null);

  function addFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    setImage(event.target.files[0]);
  }

  function discardImage() {
    setImage(null);
  }

  return (
    <>
      {image ? (
        <Editor
          image={image}
          discardImage={discardImage}
        />
      ) : (
        <Home addFile={addFile} />
      )}
    </>
  );
}
