import { Post } from './App';

type Props = {
  post: Post;
};

export default function PostRow({ post }: Props) {
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>{post.author?.name}</td>
    </tr>
  );
}
