import { Metadata } from 'next'
import Image from 'next/image'

import swcLogo from '@/assets/swc.jpeg'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Experiências',
}

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-xl font-bold text-rose-500">
        <h3>Experiências:</h3>
      </div>
      <div className="flex mt-7">
        <div className="h-12 w-12 mr-3">
          <Image src={swcLogo} alt="SHOWCASEPRO" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">
            <a
              href="https://showcase.com.br"
              target="_blank"
              rel="noreferrer"
              className="hover:text-rose-500"
            >
              SHOWCASE
            </a>
          </span>
          <span>Há 2 anos e 1 mês</span>
        </div>
      </div>

      <div className="mt-5">
        <div className="mt-7">
          <h4 className="font-bold text-rose-500">Desenvolvedor Junior D1</h4>
          <h5>Tempo Integral</h5>
          <h6 className="mb-3">jan de 2023 - o momento · 1 ano e 1 mês</h6>
          <ul>
            <li>
              - Atendimento e suporte de TI para clientes internos e externos;
            </li>
            <li>- Desenvolvimento de sistemas para web;</li>
            <li>- Desenvolvimento de aplicações para TV.</li>
          </ul>
        </div>

        <Separator className="mt-5" />

        <div className="mt-7">
          <h4 className="font-bold text-rose-500">Estagiário de TI</h4>
          <h5>Estágio</h5>
          <h6 className="mb-3">jan de 2022 - jan de 2023 · 1 ano</h6>
          <ul>
            <li>- Realizar configurações de periféricos;</li>
            <li>- Prestar suporte aos ambientes com sistemas operacionais;</li>
            <li>
              - Apoiar na instalação, configuração e suporte aos sistemas
              operacionais;
            </li>
            <li>- Instalação e configuração de computadores.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
