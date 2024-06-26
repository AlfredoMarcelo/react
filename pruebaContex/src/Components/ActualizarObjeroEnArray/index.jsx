import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Grandes barrigas', seen: false },
  { id: 1, title: 'Paisaje lunar', seen: false },
  { id: 2, title: 'Guerreros de terracota', seen: true },
];

export default function ActualizarObjetoEnArray() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Crea un *nuevo* objeto con cambios
        return { ...artwork, seen: nextSeen };
      } else {
        // No cambia
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        // Crea un *nuevo* objeto con cambios
        return { ...artwork, seen: nextSeen };
      } else {
        // No cambia
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Lista de deseos de arte</h1>
      <h2>Mi lista de obras de arte para ver:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Tu lista de obras de arte para ver:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
