import { useState } from 'react';
import Communities from './components/Communities';
import Home from './components/Home';

export default function CommunitySelector() {
  const { stats: community, loading, error } = Communities(
    'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities'
  );
  const [selectedCommunity, setSelectedCommunity] = useState('');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>Currently Showing {selectedCommunity}</h2>
      <select
        onChange={e => {
          setSelectedCommunity(e.target.value);
        }}
      >
        {Object.entries(Communities.Communities).map(([community, id]) => (
          <option
            selected={selectedCommunity === Communities.name}
            key={id}
            value={Communities.id}
          >
            {community}
          </option>
        ))}
      </select>
      <Home
        url={`'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes'`}
      ></Home>
    </div>
  );
}