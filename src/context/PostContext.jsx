import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Creazione del contesto
export const PostsContext = createContext();

// Provider del contesto
export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    // Recupero dei post dal backend
    useEffect(() => {
        axios.get('http://localhost:3001/api/posts')
            .then((res) => setPosts(res.data))
            .catch((err) => console.error('Errore nel fetch dei post:', err));
    }, []);

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostsContext.Provider>
    );
};