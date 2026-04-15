'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        const data = await response.json()
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-2">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-slate-900"
          placeholder="your@email.com"
        />
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-slate-900"
          placeholder="••••••••"
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      {/* Login Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-40 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded transition-colors"
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>

      {/* Help Links */}
      <div className="space-y-2 text-sm">
        <button type="button" className="text-blue-600 hover:underline block">
          Forgot your password?
        </button>
        <button type="button" className="text-blue-600 hover:underline block">
          Didn&apos;t receive confirmation instructions?
        </button>
        <button type="button" className="text-blue-600 hover:underline block">
          I need help recovering access to my account
        </button>
      </div>
    </form>
  )
}
