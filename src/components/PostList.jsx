import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';
import PostCard from './PostCard';

const PostsList = () => {
    const { posts } = useContext(PostsContext);

    return (
        <div>
            <h2>Lista Articoli</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard article={post} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;