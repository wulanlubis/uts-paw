import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js';
import KartuItem from '../components/kartuItem.jsx';
import KotakPencarian from '../components/KotakPencarian.jsx';


export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const tampil = items.filter((item) => item.judul.toLowerCase().includes(cari.toLowerCase()))

  return (
    <section>
      <h1>Koleksi</h1>
      <div className="kotak-pencarian">
        <KotakPencarian nilai={cari} onUbah={setCari} />
      </div>
      {tampil.length === 0 ? (
        <p>Tidak ada latihan yang cocok.</p>
        ) : (
          <div className="daftar-kartu">
            {tampil.map((item) => (
           <KartuItem key={item.id} item={item} />
        ))}
        </div>
      )}
    </section>
  )
}