import { useState } from 'react';

let nextId = 0;

export default function Arreglos() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

	function addArtis(){
		setArtists([...artists,{id:nextId++, name: name}])
	}


	function verArreglo(){
		console.log('artists :>> ', artists);
	}

  return (
    <>
      <h1>Escultores inspiradores:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        addArtis();
        verArreglo();
      }}>Añadir</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}