import React, { useState } from 'react';
import { Post } from './App';

type Props = {
  onSubmitCallback: () => unknown;
};

export default function AddPostForm({ onSubmitCallback }: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const clearForm = () => {
    setTitle('');
    setContent('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
    console.log(event);

    const newPost: Post = {
      authorId: 1,
      content,
      title,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(import.meta.env.VITE_API_URL + '/posts', options)
      .then((res) => {
        clearForm();
        onSubmitCallback();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        className="border"
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        name="content"
        className="border"
        type="text"
        placeholder="Enter content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
