import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function StoryDetails() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [tab, setTab] = useState('wordExplorer');

  useEffect(() => {
    axios
      .get(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`)
      .then(res => setStory(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!story) return <div className="p-6 text-white">Loading...</div>;

  const images = typeof story.Image === 'string' 
    ? story.Image.split(',').map(img => img.trim()) 
    : Array.isArray(story.Image) ? story.Image : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1129] to-[#1e2746] text-white px-6 py-10">
      <header className="p-6 flex justify-between items-center bg-transparent">
        <div className="text-3xl font-bold tracking-wider">BrainyLingo</div>
        <nav className="space-x-6 text-lg">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Leaderboard</a>
          <a href="#" className="hover:underline">Daily Quiz</a>
          <a href="#" className="hover:underline">Genres</a>
        </nav>
        <button className="bg-gradient-to-r from-[#40e0d0] to-[#9370db] px-5 py-2 rounded-full text-white font-semibold">Sign Out</button>
      </header>
      <h1 className="text-4xl font-bold text-center mb-4">
        <span className="text-[#6a6aff]">The Lost City</span> of <span className="text-[#00ffc3]">Future Earth</span>
      </h1>

      {/* Tab Controls */}
      <div className="flex justify-center gap-4 my-6">
        <button
          onClick={() => setTab('wordExplorer')}
          className={`px-6 py-2 rounded-full font-semibold text-sm ${
            tab === 'wordExplorer' ? 'bg-cyan-400 text-black shadow-xl' : 'bg-[#2a2f55]'
          }`}
        >
          🔍 Word Explorer
        </button>
        <button
          onClick={() => setTab('storyAdventure')}
          className={`px-6 py-2 rounded-full font-semibold text-sm ${
            tab === 'storyAdventure' ? 'bg-[#8880e3] text-white shadow-xl' : 'bg-[#2a2f55]'
          }`}
        >
          🧙 Story Adventure
        </button>
        <button
          onClick={() => setTab('brainQuest')}
          className={`px-6 py-2 rounded-full font-semibold text-sm ${
            tab === 'brainQuest' ? 'bg-pink-400 text-black shadow-xl' : 'bg-[#2a2f55]'
          }`}
        >
          🧠 Brain Quest
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tab === 'wordExplorer' && (
          <>
            <p className="text-center text-sm mb-4">Drag Pictures to the matching Words, light up correct pairs, shake for a retry</p>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3 bg-[#1b2140] p-4 rounded-xl border border-[#4f567c]">
                <h2 className="text-xl font-bold text-cyan-400">Correction <span className="text-sm text-gray-400">(Noun)</span></h2>
                <p className="text-sm text-white mt-2">{story.Description || 'No description available.'}</p>
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee7e"
                  alt="Example"
                  className="w-full h-40 object-cover rounded-lg my-4"
                />
                <p className="text-xs"><strong>Synonyms:</strong> hustle-free, joy, step forward</p>
                <p className="text-xs"><strong>Antonyms:</strong> hustle-free, joy, step forward</p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.slice(0, 12).map((img, index) => (
                  <div key={index} className="bg-[#1b2140] p-2 rounded-xl border border-[#4f567c]">
                    <img
                      src={`https://ik.imagekit.io/dev24/${img}`}
                      alt={`Card ${index + 1}`}
                      className="w-full h-28 object-cover rounded-md mb-2"
                    />
                    <p className="text-xs text-center text-gray-300 px-2">
                      Lorem ipsum dolor is a dummy text that is widely used in the industry.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === 'storyAdventure' && (
          <div className="text-center text-gray-200">
            <h2 className="text-2xl font-bold mb-2">Story Adventure</h2>
            <p className="text-sm">{story.Character || 'No characters available.'}</p>
          </div>
        )}

        {tab === 'brainQuest' && (
          <div className="text-center text-gray-200">
            <h2 className="text-2xl font-bold mb-2">Brain Quest</h2>
            <p className="text-sm">{story.Review || 'No review available.'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
