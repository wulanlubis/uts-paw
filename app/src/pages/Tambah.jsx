import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const KaloriPerMenit = { Kardio: 7, Permainan: 6.5, Kekuatan: 5, Kelenturan: 3.5 }
const AWAL = { judul: '', kategori: 'Kardio', tanggal: '', durasi: '' }

export default function Tambah() {
    const navigate = useNavigate()
    const { tambah } = useKoleksi()
    const [form, setForm] = useState(AWAL)
    const [ galat, setGalat ] = useState('')

    const durasi = parseFloat(form.durasi) || 0
    const hitungkalori = Math.round(durasi * (KaloriPerMenit[form.kategori] || 0))

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const simpan = (e) => {
        e.preventDefault()
        if (!form.judul.trim() || form.judul.trim().length < 3) {
            setGalat('Judul harus diisi dan minimal 3 karakter.')
            return
        }
        setGalat('')

        tambah({ ...form, judul: form.judul.trim(), durasi: durasi, kalori: hitungkalori })
        navigate('/koleksi')
    }

    return (
      <form className="formulir" id="form-tambah" onSubmit={simpan} noValidate>
        <h1>Tambah Latihan</h1>

        {galat && <p role="alert">{galat}</p>}

        <label htmlFor="judul">Judul</label>
        <input type="text" id="judul" name="judul" value={form.judul} onChange={ubah} />

        <label htmlFor="kategori">Kategori</label>
        <select id="kategori" name="kategori" value={form.kategori} onChange={ubah} >
            <option>Kardio</option>
            <option>Permainan</option>
            <option>Kekuatan</option>
            <option>Kelenturan</option>
        </select>

        <label htmlFor="tanggal">Tanggal</label>
        <input type="date" id="tanggal" name="tanggal" value={form.tanggal} onChange={ubah} />

        <label htmlFor="durasi">Durasi (menit)</label>
        <input type="number" id="durasi" name="durasi" value={form.durasi} onChange={ubah} />

        <label htmlFor="kalori">Kalori Terbakar</label>
        <input type="number" id="kalori" name="kalori" value={hitungkalori} readOnly />

        <button type="submit">Simpan</button>
    </form>
  )
}