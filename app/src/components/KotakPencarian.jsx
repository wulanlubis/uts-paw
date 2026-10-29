export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      type="search"
      placeholder="Cari latihan..."
      aria-label="Cari latihan"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  )
}