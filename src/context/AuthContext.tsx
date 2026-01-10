import { createContext, useContext, useEffect, useState } from 'react'
import type { User } from '@/types'

interface AuthContextType {
	user: User | null
	isLoading: boolean
	login: (username: string, password: string) => Promise<void>
	signup: (username: string, password: string, email?: string) => Promise<void>
	logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const storedUser = localStorage.getItem('jsi_user')
		if (storedUser) {
			try {
				setUser(JSON.parse(storedUser))
			} catch (error) {
				console.error("Failed to parse stored user", error)
				localStorage.removeItem('jsi_user')
			}
		}
		setIsLoading(false)
	}, [])

	const login = async (username: string) => {
		// Mock login
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				const loggedInUser: User = {
					id: 'mock-user-id-123',
					username: username,
					displayName: username,
					email: username.includes('@') ? username : undefined,
					joinedAt: new Date().toISOString(),
					iconSeed: String(Math.random())
				}
				setUser(loggedInUser)
				localStorage.setItem('jsi_user', JSON.stringify(loggedInUser))
				resolve()
			}, 800)
		})
	}

	const signup = async (username: string, _: string, email?: string) => {
		// Mock signup
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				const newUser: User = {
					id: crypto.randomUUID(),
					username: username,
					displayName: username,
					email: email,
					joinedAt: new Date().toISOString(),
					iconSeed: String(Math.random())
				}
				setUser(newUser)
				localStorage.setItem('jsi_user', JSON.stringify(newUser))
				resolve()
			}, 800)
		})
	}

	const logout = () => {
		setUser(null)
		localStorage.removeItem('jsi_user')
	}

	return (
		<AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
