import { useRef } from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa'
import { toast } from 'sonner'

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Separator } from './ui/separator'

export function ContactDetails() {
  const emailRef = useRef<HTMLSpanElement | null>(null)

  const handleCopyToClipboard = () => {
    if (emailRef.current) {
      const range = document.createRange()
      range.selectNode(emailRef.current)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)
      document.execCommand('copy')
      window.getSelection()?.removeAllRanges()
      toast.success(
        `Conteúdo copiado para a àrea de transferência com sucesso!`,
      )
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Meus Contatos</DialogTitle>
        <DialogDescription>
          Para entrar em contato comigo, clique em algum dos links abaixo:
        </DialogDescription>
      </DialogHeader>

      <Separator />

      <div className="grid grid-cols-1">
        <a
          href="https://wa.me/5511992136050"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-4 hover:text-rose-600"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>

      <Separator />

      <div className="grid grid-cols-1">
        <a
          href="https://www.instagram.com/nathan.florencio/?next=%2F"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-4 hover:text-rose-600"
        >
          <FaInstagram className="w-6 h-6" />
          <span className="font-semibold">Instagram</span>
        </a>
      </div>

      <Separator />

      <div className="grid grid-cols-1">
        <a
          href="https://www.facebook.com/nathan.florencio"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-4 hover:text-rose-600"
        >
          <FaFacebook className="w-6 h-6" />
          <span className="font-semibold">Facebook</span>
        </a>
      </div>

      <Separator />

      <div className="grid grid-cols-1">
        <a
          href="https://www.linkedin.com/in/nathan-florencio-b36a7b16b/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-4 hover:text-rose-600"
        >
          <FaLinkedin className="w-6 h-6" />
          <span className="font-semibold">LinkedIn</span>
        </a>
      </div>

      <Separator />

      <div className="grid grid-cols-1">
        <a
          href="https://github.com/nathanflorencio"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-4 hover:text-rose-600"
        >
          <FaGithub className="w-6 h-6" />
          <span className="font-semibold">GitHub</span>
        </a>
      </div>

      <Separator />

      <div className="flex items-center justify-center  flex-col">
        <span className="text-sm">
          Caso preferir, pode me contatar via e-mail:
        </span>
        <span
          ref={emailRef}
          onClick={handleCopyToClipboard}
          style={{ cursor: 'pointer' }}
          className="hover:text-rose-600 text-sm mt-2 font-bold"
        >
          nflorencio13@gmail.com
        </span>
      </div>
    </DialogContent>
  )
}
