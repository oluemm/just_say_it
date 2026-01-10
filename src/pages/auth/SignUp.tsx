import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

export default function SignUp() {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: ''
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		// Simulate API call
		setTimeout(() => {
			console.log('User registered:', formData)
			setIsLoading(false)
			navigate('/forums')
		}, 1500)
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
						<CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>
						<CardDescription className="text-base">
							Join our safe, supportive community.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="username">
									Username
								</label>
								<div className="relative">
									<User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<input
										id="username"
										type="text"
										placeholder="BeAnonymous123"
										required
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										value={formData.username}
										onChange={e => setFormData({ ...formData, username: e.target.value })}
									/>
								</div>
								<p className="text-[0.8rem] text-muted-foreground">
									This is how you will appear to others.
								</p>
							</div>

							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<label className="text-sm font-medium leading-none" htmlFor="email">
										Email <span className="text-muted-foreground font-normal">(Optional)</span>
									</label>
								</div>
								<div className="relative">
									<Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<input
										id="email"
										type="email"
										placeholder="you@example.com"
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										value={formData.email}
										onChange={e => setFormData({ ...formData, email: e.target.value })}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium leading-none" htmlFor="password">
									Password
								</label>
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
										"Creating account..."
									) : (
										<>
											Sign Up <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</>
									)}
								</Button>
							</div>
						</form>
					</CardContent>
					<CardFooter className="flex flex-col items-center gap-4 text-center">
						<div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
							<ShieldCheck className="h-3 w-3 text-emerald-500" />
							<span>Your data is encrypted and secure</span>
						</div>
						<div className="text-sm text-muted-foreground">
							Already have an account?{" "}
							<Link to="/login" className="text-primary hover:underline font-medium">
								Log in
							</Link>
						</div>
					</CardFooter>
				</Card>
			</motion.div>
		</div>
	)
}
