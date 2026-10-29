import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react'
import BadgeKategori from "./components/BadgeKategori.jsx";
import FilterKategori from "./components/FilterKategori.jsx";
import KotakPencarian from "./components/KotakPencarian.jsx";

describe('BadgeKategori', () =>{
    it('menampilkan teks kategori', ()=>{
        render(<BadgeKategori kategori="Kardio" />)
        expect(screen.getByText('Kardio')).toBeTruthy()
    })

    it('memakai class badge-kategori', () => {
        render (<BadgeKategori kategori="Yoga" />)
        expect(screen.getByText('Yoga').className).toBe('badge-kategori')
    })
})

describe('FilterKategori', () => {
    const daftar = ['Semua', 'Kardio', 'Permainan']

    it('menampilkan semua opsi kategori', () => {
        render(<FilterKategori daftarKategori={daftar} nilai="Semua" onUbah={() => {}} />)
        expect(screen.getAllByRole('option').length).toBe(3)
    })

    it('memanggil onUbah saat kategori dipilih',() => {
        const onUbah = vi.fn()
        render (<FilterKategori daftarKategori={daftar} nilai="Semua" onUbah={onUbah} />)
        fireEvent.change(screen.getByRole('combobox'), { target: {value: 'Kardio'}})
        expect(onUbah).toHaveBeenCalledWith('Kardio')
    })
})

describe('KotakPencarian', () => {
    it('memanggil onUbah saat mengetik', () => {
        const onUbah = vi.fn()
        render(<KotakPencarian nilai="" onUbah={onUbah} />)
        fireEvent.change(screen.getByRole('searchbox'), { target: {value: 'yoga'}})
        expect(onUbah).toHaveBeenCalledWith('yoga')
    })
})
