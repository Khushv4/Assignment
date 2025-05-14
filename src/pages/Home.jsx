import { useEffect, useState } from 'react';
import axios from 'axios';
import StoryCard from '../components/StoryCard';

export default function Home() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('https://mxpertztestapi.onrender.com/api/sciencefiction')
      .then(res => {
        setStories(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch stories');
        setLoading(false);
        console.error(err);
      });
  }, []);

  const filteredStories = filter === 'All' 
    ? stories 
    : stories.filter(story => story.Status === filter);

  if (loading) return <div className="p-6 text-white">Loading stories...</div>;
  if (error) return <div className="p-6 text-red-400">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b061e] to-[#0c134f] text-white font-sans">
      <header className="p-6 flex justify-between items-center bg-transparent">
        <div className="text-3xl font-bold tracking-wider">BrainyLingo</div>
        <nav className="space-x-6 text-lg">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Leaderboard</a>
          <a href="#" className="hover:underline">Daily Quiz</a>
          <a href="#" className="hover:underline">Genres</a>
        </nav>
        <button className="bg-gradient-to-r from-[#40e0d0] to-[#9370db] px-5 py-2 rounded-full text-white font-semibold">Sign Out</button>
      </header>

      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Science Fiction Stories</h1>
        <div className="flex justify-center mt-6 gap-4 flex-wrap">
          {['New', 'In Progress', 'Completed', 'All'].map(status => (
            <button
              key={status}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                filter === status ? 'scale-105' : ''
              } ${
                status === 'New' ? 'bg-blue-500' :
                status === 'In Progress' ? 'bg-yellow-400 text-black' :
                status === 'Completed' ? 'bg-green-400 text-black' :
                'bg-purple-500'
              }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 pb-12">
        {filteredStories.map(story => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
    </div>
  );
}
