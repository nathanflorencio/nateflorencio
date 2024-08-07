'use client'

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { Textarea } from '@/components/ui/textarea'
import { chartData } from '@/data/chart-data'

export function InformationProfile() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-4 lg:mt-0">
      <div className="sm:text-3xl font-bold border-4 w-full flex items-center justify-center border-rose-600 p-2 rounded-md">
        <h2>Introdução: Quem sou eu?</h2>
      </div>
      <div className="w-full mt-4">
        <Textarea
          id="profile_description"
          className="resize-none h-[365px] md:h-[200px] leading-10 text-md text-foreground"
          disabled={true}
          defaultValue="Olá, sejam bem-vindos ao meu site pessoal! Meu nome é Nathan Florencio, também conhecido como Nate. Tenho 22 anos de idade e, atualmente, sou Analista de Desenvolvimento de Sistemas Junior, formado em Sistemas de Informação na FMU e pretendo me tornar um especialista em Front-end e gestor de tecnologia futuramente. Gosto muito da área de Pesquisa e Desenvolvimento (P&D) e pretendo evoluir cada vez mais nos conhecimentos, como estudar Design UX & UI e DevOps. Espero que gostem do meu site pessoal, agradeço pelo feedback :D"
        />
      </div>
      <div className="flex items-center justify-center mt-2 w-full text-rose-500 text-lg font-semibold">
        <h3>Meu Desempenho:</h3>
      </div>
      <ResponsiveContainer className="mt-5 w-full" height={320}>
        <LineChart data={chartData}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis axisLine={false} tickLine={false} width={50} />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            dataKey="quality"
            stroke={colors.rose[500]}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
