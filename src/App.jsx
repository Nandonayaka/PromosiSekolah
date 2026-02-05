import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30">
      <div className="max-w-md w-full bg-neutral-800/50 backdrop-blur-xl border border-neutral-700/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
        {/* Decorative background gradient */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-500/30 transition-colors duration-500" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full group-hover:bg-purple-500/30 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex gap-4 mb-8">
            <div className="p-3 bg-neutral-800 rounded-2xl border border-neutral-700 shadow-inner">
              <img src="/vite.svg" className="w-12 h-12 animate-pulse" alt="Vite logo" />
            </div>
            <div className="p-3 bg-neutral-800 rounded-2xl border border-neutral-700 shadow-inner">
              <svg className="w-12 h-12 text-sky-400 animate-[spin_3s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Vite + Tailwind 4
          </h1>
          <p className="text-neutral-400 text-center mb-8">
            Project initialized successfully! Start building something amazing.
          </p>

          <div className="w-full space-y-4">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
            >
              <span>Count is {count}</span>
            </button>

            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-700/50">
              <p className="text-sm text-neutral-500 text-center">
                Edit <code className="text-indigo-400 font-mono">src/App.jsx</code> to get started
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-6">
            <a href="https://vite.dev" target="_blank" className="text-sm text-neutral-500 hover:text-indigo-400 transition-colors">Documentation</a>
            <a href="https://tailwindcss.com" target="_blank" className="text-sm text-neutral-500 hover:text-purple-400 transition-colors">Tailwind CSS</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
