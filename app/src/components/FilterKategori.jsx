export default function PilihKategori({ nilai, onUbah }) {
  return (
    <select aria-label="Pilih kategori" value={nilai} onChange={(e) => onUbah(e.target.value)}>
      <option value="">Semua Kategori</option>
      <option value="Kekuatan">Kekuatan</option>
      <option value="Kelenturan">Kelenturan</option>
      <option value="Kardio">Kardio</option>
      <option value="Permainan">Permainan</option>
    </select>
  )
}