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
  const { isLoading, error, data } = useQuery<Post[], Error>('repoData', () =>
    fetch(import.meta.env.VITE_API_URL + '/posts').then((res) => res.json()),
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>'An error has occurred: ' + error.message</>;

  return (
    <div>
      {data && data.map((post) => <div key={post.id}>{post.title}</div>)}
      <AddPostForm />
    </div>
  );
}

export default App;
