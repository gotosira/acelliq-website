import { Link, useNavigate } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="pt-20 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 px-8">
      <span className="text-accent-teal text-[120px] font-bold opacity-15 leading-none select-none">404</span>
      <h1 className="text-3xl md:text-4xl font-bold">Page Not Found</h1>
      <p className="text-text-muted text-base text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-4 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent-lime text-bg-dark font-semibold px-8 py-3.5 rounded-3xl no-underline hover:brightness-110 transition"
        >
          <Home size={16} /> Go Home
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 border border-border-subtle text-text-white font-medium px-7 py-3.5 rounded-3xl cursor-pointer bg-transparent hover:bg-white/5 transition"
        >
          <ArrowLeft size={16} /> Go Back
        </button>
      </div>
    </div>
  )
}
