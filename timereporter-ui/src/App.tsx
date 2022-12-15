import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

type Post = {
  id: number;
  title: string;
  createdAt: Date;
  content: string | null;
  published: boolean;
  authorId: number;
};

function App() {
  const { isLoading, error, data } = useQuery<Post[], Error>('repoData', () =>
    fetch(import.meta.env.VITE_API_URL).then((res) => res.json()),
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>'An error has occurred: ' + error.message</>;

  const addTime = () => {
    console.log('Add time');
  };

  return (
    <div>
      {data && data.map((post) => <div key={post.id}>{post.title}</div>)}
      <button className="border p-2" onClick={() => addTime()}>
        Add time slot
      </button>
    </div>
  );
}

export default App;
