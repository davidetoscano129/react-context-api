import '../styles/PostPage.css';
import PostsList from './PostsList';

const PostsPage = () => {
    return (
        <div>
            <h1>Pagina Articoli</h1>
            <PostsList /> {/* Mostra la lista */}
        </div>
    );
};

export default PostsPage;