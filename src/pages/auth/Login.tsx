import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Lock, ArrowRight } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

export default function Login() {
	const navigate = useNavigate()
	const { login } = useAuth()
	const [isLoading, setIsLoading] = useState(false)
	const [formData, setFormData] = useState({
		identifier: '',
		password: ''
	})

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			await login(formData.identifier, formData.password)
			navigate('/forums')
		} catch (error) {
			console.error("Login failed", error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3 }}
				className="w-full max-w-md"
			>
				<Card className="border-none shadow-xl bg-card/80 backdrop-blur-sm">
					<CardHeader className="space-y-1 text-center pb-8">
						<CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
						<CardDescription className="text-base">
							Enter your credentials to access your account.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none" htmlFor="identifier">
									Username or Email
								</label>
								<div className="relative">
									<User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<input
										id="identifier"
										type="text"
										placeholder="BeAnonymous123"
										required
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										value={formData.identifier}
										onChange={e => setFormData({ ...formData, identifier: e.target.value })}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<label className="text-sm font-medium leading-none" htmlFor="password">
										Password
									</label>
									<a href="#" className="text-xs text-primary hover:underline">
										Forgot password?
									</a>
								</div>
								<div className="relative">
									<Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<input
										id="password"
										type="password"
										required
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										value={formData.password}
										onChange={e => setFormData({ ...formData, password: e.target.value })}
									/>
								</div>
							</div>

							<div className="pt-4">
								<Button className="w-full h-11 text-base group" type="submit" disabled={isLoading}>
									{isLoading ? (
										"Logging in..."
									) : (
										<>
											Log In <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</>
									)}
								</Button>
							</div>
						</form>
					</CardContent>
					<CardFooter className="flex justify-center text-sm text-muted-foreground">
						Don't have an account?{" "}
						<Link to="/signup" className="text-primary hover:underline font-medium ml-1">
							Sign up
						</Link>
					</CardFooter>
				</Card>
			</motion.div>
		</div>
	)
}
