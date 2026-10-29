export default function FilterKategori({ nilai, onUbah }) {
  return (
    <select aria-label="Pilih kategori" value={nilai} onChange={(e) => onUbah(e.target.value)}>
      {daftarKategori.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
  )
}