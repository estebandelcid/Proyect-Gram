import {useState, useEffect} from 'react'

export function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCategories = async () => {
      const response = await fetch(
        "https://petgram-esteban-estebandelcid.vercel.app/categories"
      );
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  return { categories, loading };
}


