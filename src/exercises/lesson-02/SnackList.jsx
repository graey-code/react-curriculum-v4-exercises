function MySnackList() {
  const favoriteSnacks = [
    { name: 'Chips', rank: 5 },
    { name: 'Donuts', rank: 4 },
    { name: 'Beignets', rank: 3 },
    { name: 'Fries', rank: 2 },
    { name: 'Chocolates', rank: 1 },
  ];
  const sortedSnacks = favoriteSnacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ul>
      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ol>
    </ul>
  );
}

export default MySnackList;
