import { useState, ChangeEvent } from 'react';

import Editor from './components/Editor';
import Home from './components/Home';

export default function App() {
  const [image, setImage] = useState<File>();

  function addFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    setImage(event.target.files[0]);
  }

  return <>{image ? <Editor image={image} /> : <Home addFile={addFile} />}</>;
}
