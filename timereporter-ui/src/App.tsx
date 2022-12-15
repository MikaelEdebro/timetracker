import { useState } from 'react';
import { useQuery } from 'react-query';
import AddPostForm from './AddPostForm';

export type Post = {
  id?: number;
  title: string;
  content: string | null;
  authorId: number;
  createdAt?: Date;
  published?: boolean;
};

function App() {
  const [refetch, setRefetch] = useState(0);

  const { isLoading, error, data } = useQuery<Post[], Error>(
    ['posts', refetch],
    () =>
      fetch(import.meta.env.VITE_API_URL + '/posts').then((res) => res.json()),
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>'An error has occurred: ' + error.message</>;

  return (
    <div>
      randomNumber: {refetch}
      <table>
        <tbody>
          {data &&
            data.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <AddPostForm onSubmitCallback={() => setRefetch(Math.random())} />
    </div>
  );
}

export default App;
