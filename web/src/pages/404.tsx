import { Home, Pizza } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="relative grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5 text-primary" />
          <span className="font-semibold">pizza shop</span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Ops! Página não encontrada.
          </h1>
          <span>
            Parece que a página que você está tentando acessar não foi
            encontrada.
          </span>

          <Link
            to="/"
            className="mt-8 flex flex-row items-center gap-2  underline-offset-4 hover:underline"
          >
            <Home className="h-4 w-4 text-primary" />
            Ir para o início
          </Link>
        </div>

        <footer className="text-sm">
          {' '}
          painel do parceiro | pizza shop &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
