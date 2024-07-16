"use client"
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { useEffect, useState } from 'react'

export default function Responses() {
  const [responses, setResponses] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/responses');
      if (!response.ok) {
        throw new Error('Failed to fetch responses');
      }
      const data = await response.json();
      setResponses(data)
      return data;
    } catch (error) {
      console.error('Error fetching responses:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className='flex flex-col'>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-start p-4 mt-12">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Respostas do Formulário {`(${responses?.length})`}</h1>
        <ul className="space-y-4">
          {responses.length === 0 && <p>Nenhuma resposta foi realizada.</p>}
          {responses.map((response) => {
            return (
              <li key={response.id} className="p-6 border border-gray-200 rounded-lg shadow-lg mb-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex md[768]: flex-col justify-between">
                    <span className="font-bold text-lg">Nome completo:</span>
                    <span>{response.fullName}</span>
                  </div>
                  <div className="flex md[768]: flex-col justify-between">
                    <span className="font-bold text-lg">Já participou antes da sala:</span>
                    <span>{response.attendedBefore ? 'Sim' : 'Não'}</span>
                  </div>
                  <div className="flex md[768]: flex-col justify-between">
                    <span className="font-bold text-lg">Faz parte de uma igreja:</span>
                    <span>{response.partOfChurch ? 'Sim' : 'Não'}</span>
                  </div>
                  {response.churchName && (
                    <div className="flex md[768]: flex-col justify-between">
                      <span className="font-bold text-lg">Qual igreja:</span>
                      <span>{response.churchName}</span>
                    </div>
                  )}
                  {response.attendedBy && (
                    <div className="flex md[768]: flex-col justify-between">
                      <span className="font-bold text-lg">Quem foi o manto? / canela de fogo?</span>
                      <span>{response.attendedBy}</span>
                    </div>
                  )}
                  {response.rating && (
                    <div className="flex md[768]: flex-col justify-between">
                      <span className="font-bold text-lg">Nota da sala:</span>
                      <span>{response.rating}</span>
                    </div>
                  )}
                  {response.feedback && (
                    <div className="flex md[768]: flex-col justify-between">
                      <span className="font-bold text-lg">Feedback sobre a sala:</span>
                      <span>{response.feedback}</span>
                    </div>
                  )}
                  <div className="flex md[768]: flex-col justify-between">
                    <span className="font-bold text-lg">Data:</span>
                    <span>{new Date(response.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}