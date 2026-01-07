import { createContext, useContext, useEffect, useState } from 'react'

interface User {
	id: string
	name: string
	joinedAt: string
}

interface AuthContextType {
	user: User | null
	isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const storedUser = localStorage.getItem('jsi_user')
		if (storedUser) {
			setUser(JSON.parse(storedUser))
		} else {
			// Create anonymous user
			const newUser: User = {
				id: crypto.randomUUID(),
				name: `Anonymous ${Math.floor(Math.random() * 1000)}`,
				joinedAt: new Date().toISOString(),
			}
			localStorage.setItem('jsi_user', JSON.stringify(newUser))
			setUser(newUser)
		}
		setIsLoading(false)
	}, [])

	return (
		<AuthContext.Provider value={{ user, isLoading }}>
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
