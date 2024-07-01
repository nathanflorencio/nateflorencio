import { Book, Briefcase, Contact2 } from 'lucide-react'

import { ContactDetails } from '@/components/contact-details'
import { NavLink } from '@/components/nav-link'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Header() {
  return (
    <Dialog>
      <div className="border-b mb-8">
        <div className="flex h-16 items-center gap-6 px-6">
          <header>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <NavLink to="/">
                    <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground hover:text-rose-600">
                      Nate Florencio
                    </h1>
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent className="md:hidden">
                  <p className="text-sm">Página Inicial</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </header>

          <Separator orientation="vertical" className="h-10" />

          <nav className="flex items-center space-x-4 lg:space-x-6">
            <NavLink to="/meus-conhecimentos">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:text-rose-600 text-foreground"
                    >
                      <Book className="h-4 w-4" />
                      <span className="ml-2 hidden md:inline">
                        Conhecimentos
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="md:hidden">
                    <p className="text-sm">Meus conhecimentos</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </NavLink>

            <NavLink to="/minhas-experiencias">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:text-rose-600  text-foreground"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span className="ml-2 hidden md:inline">
                        Experiências
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="md:hidden">
                    <p className="text-sm">Minhas experiências</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </NavLink>

            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="hover:text-rose-600"
              >
                <Contact2 className="h-4 w-4" />
                <span className="ml-2 hidden md:inline">Contato</span>
              </Button>
            </DialogTrigger>

            <ContactDetails />

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </Dialog>
  )
}
