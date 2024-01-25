import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'
import { Book, Briefcase, Contact2 } from 'lucide-react'

import { ContactDetails } from './contact-details'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Separator } from './ui/separator'
import { Tooltip, TooltipProvider } from './ui/tooltip'

export function Header() {
  return (
    <Dialog>
      <div className="border-b">
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
