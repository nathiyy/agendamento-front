'use client'

import { useState } from 'react'

export default function Home() {

  const [form, setForm] = useState({
    servico: '',
    profissional: '',
    dataHoraAgendamento: '',
    cliente: '',
    telefoneCliente: ''
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const salvar = async () => {
    try {
      const res = await fetch('http://localhost:8080/agendamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) throw new Error()

      alert('Agendado com sucesso!')
    } catch {
      alert('Erro ao agendar')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Novo Agendamento
        </h1>

        <input
          name="cliente"
          placeholder="Cliente"
          onChange={handleChange}
          className="w-full mb-3 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <input
          name="telefoneCliente"
          placeholder="Telefone"
          onChange={handleChange}
          className="w-full mb-3 p-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-400"
        />

        <input
          name="servico"
          placeholder="Serviço"
          onChange={handleChange}
          className="w-full mb-3 p-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-400"
        />

        <input
          name="profissional"
          placeholder="Profissional"
          onChange={handleChange}
          className="w-full mb-3 p-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-400"
        />

        <input
          type="datetime-local"
          name="dataHoraAgendamento"
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-400"
        />

        <button
          onClick={salvar}
          className="w-full bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition"
        >
          Agendar
        </button>

      </div>

    </div>
  )
}