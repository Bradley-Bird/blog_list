import React, { useEffect } from 'react';
import { fetchBlogs } from '../services/blogs';

export default function Main() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchBlogs();
        console.log('hello', resp);
      } catch (e) {
        console.log('oops');
      }
    };
    fetchData();
  }, []);
  return <div>Main</div>;
}
