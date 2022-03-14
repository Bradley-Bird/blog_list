import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blogs';
import BlogCard from '../components/BlogCard/BlogCard';

export default function Main() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchBlogs();
        setBlogs(resp);
        setLoading(false);
        setErrorMessage('');
      } catch (e) {
        setErrorMessage('LOOK BEHIND YOU!...jk try refreshing the page :)');
      }
    };
    fetchData();
  }, []);

  if (errorMessage) return <p>{errorMessage}</p>;
  if (loading) return <div className="loader"></div>;

  return (
    <>
      <p>{errorMessage}</p>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </>
  );
}
