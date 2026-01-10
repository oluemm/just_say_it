import { motion } from 'framer-motion'
import { Shield, UserX, FileText, LogOut, Moon, Sun, Laptop } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'

export default function Settings() {
	const { theme, setTheme } = useTheme()
	const { logout } = useAuth()
	const navigate = useNavigate()

	const handleLogout = () => {
		logout()
		navigate('/')
	}

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	}

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	}

	return (
		<div className="container mx-auto max-w-4xl py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold tracking-tight">Settings</h1>
				<p className="text-muted-foreground mt-1">
					Manage your anonymous session and preferences
				</p>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid gap-6"
			>
				{/* Appearance */}
				<motion.div variants={item}>
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Moon className="h-5 w-5 text-primary" />
								Appearance
							</CardTitle>
							<CardDescription>
								Choose how JSI looks for you
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-3 gap-3">
								<button
									onClick={() => setTheme('light')}
									className={`
										flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all
										${theme === 'light'
											? 'border-primary bg-primary/10'
											: 'border-border hover:border-primary/50'
										}
									`}
								>
									<Sun className="h-5 w-5" />
									<span className="text-sm font-medium">Light</span>
								</button>
								<button
									onClick={() => setTheme('dark')}
									className={`
										flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all
										${theme === 'dark'
											? 'border-primary bg-primary/10'
											: 'border-border hover:border-primary/50'
										}
									`}
								>
									<Moon className="h-5 w-5" />
									<span className="text-sm font-medium">Dark</span>
								</button>
								<button
									onClick={() => setTheme('system')}
									className={`
										flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all
										${theme === 'system'
											? 'border-primary bg-primary/10'
											: 'border-border hover:border-primary/50'
										}
									`}
								>
									<Laptop className="h-5 w-5" />
									<span className="text-sm font-medium">System</span>
								</button>
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* Privacy & Safety */}
				<motion.div variants={item}>
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Shield className="h-5 w-5 text-primary" />
								Privacy & Safety
							</CardTitle>
							<CardDescription>
								Manage your blocked users and safety settings
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-between">
								<div>
									<h4 className="font-medium">Blocked Users</h4>
									<p className="text-sm text-muted-foreground">
										Manage users you've blocked
									</p>
								</div>
								<Button variant="outline" className="gap-2">
									<UserX className="h-4 w-4" />
									Manage (0)
								</Button>
							</div>
							<div className="h-px bg-border" />
							<div className="flex items-center justify-between">
								<div>
									<h4 className="font-medium">Your Data</h4>
									<p className="text-sm text-muted-foreground">
										View what data is stored locally
									</p>
								</div>
								<Button variant="outline">View Data</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* Community Guidelines */}
				<motion.div variants={item}>
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<FileText className="h-5 w-5 text-primary" />
								Community Guidelines
							</CardTitle>
							<CardDescription>
								Learn about our community standards and policies
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3">
							<Button variant="ghost" className="w-full justify-start">
								Community Guidelines
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								Privacy Policy
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								Terms of Service
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								How to Report Content
							</Button>
						</CardContent>
					</Card>
				</motion.div>

				{/* About */}
				<motion.div variants={item}>
					<Card>
						<CardHeader>
							<CardTitle>About JSI</CardTitle>
							<CardDescription>Version 1.0.0</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3 text-sm text-muted-foreground">
							<p>
								JSI (Just Share It) is a safe, anonymous platform for people facing mental health
								challenges to connect, share experiences, and find support.
							</p>
							<p>
								Built with empathy, designed for emotional safety, powered by community.
							</p>
							<div className="flex gap-3 pt-2">
								<Button variant="ghost" size="sm">Send Feedback</Button>
								<Button variant="ghost" size="sm">Report a Bug</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* Danger Zone */}
				<motion.div variants={item}>
					<Card className="border-destructive/50">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-destructive">
								<LogOut className="h-5 w-5" />
								Log Out
							</CardTitle>
							<CardDescription>
								Securely log out of your account on this device
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Button
								variant="outline"
								className="w-full gap-2 text-destructive border-destructive/50 hover:bg-destructive/10"
								onClick={handleLogout}
							>
								<LogOut className="h-4 w-4" />
								Log Out
							</Button>
							<p className="text-xs text-muted-foreground mt-3">
								You will need to enter your credentials to access your account again.
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>
		</div>
	)
}
