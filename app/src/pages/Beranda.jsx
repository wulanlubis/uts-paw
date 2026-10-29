import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section>
        <h1>Selamat Datang di Jurnal Latihan Olahraga!</h1>
        <p>Tema: {mahasiswa.tema}</p>
        {loading ? (
            <p>Memuat...</p>
        ) : (
            <p> Ada {items.length} latihan yang dicatat dalam {jumlahKategori} kategori.</p>
        )}
        
        <Link to="/koleksi">Lihat semua latihan</Link>
    </section>
  )
}