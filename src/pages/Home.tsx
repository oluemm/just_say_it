import { motion } from 'framer-motion'
import { Shield, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<div className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col">
			{/* Background gradients */}
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
				<div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
			</div>

			<div className="container mx-auto px-4 flex-1 flex flex-col items-center justify-center py-10">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-lg mx-auto space-y-8"
				>
					{/* Placeholder for nature illustration */}
					<div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-tr from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 flex items-center justify-center mb-6 shadow-xl shadow-teal-500/10">
						<div className="w-56 h-56 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center p-8">
							<Shield className="w-24 h-24 text-teal-500/80" />
						</div>
					</div>

					<div className="space-y-4">
						<h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
							Just Say It
						</h1>
						<p className="text-xl text-muted-foreground leading-relaxed">
							A safe, anonymous space for your mental health journey.
						</p>
					</div>

					<div className="pt-4 space-y-4">
						<Link to="/signup" className="block w-full">
							<Button size="lg" className="w-full h-14 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-semibold">
								Get Started
							</Button>
						</Link>
						<p className="text-sm text-muted-foreground/80 font-medium">
							Create an account or <Link to="/login" className="text-primary hover:underline">Log in</Link>
						</p>
					</div>
				</motion.div>
			</div>

			{/* Crisis Banner - Fixed relative to content or bottom */}
			<div className="w-full bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/30 dark:to-orange-950/30 border-t border-rose-100 dark:border-rose-900/50 py-4">
				<div className="container mx-auto px-4 flex justify-center items-center gap-2 text-sm text-rose-700 dark:text-rose-300">
					<Phone className="h-4 w-4" />
					<span className="font-medium">In crisis? Call 988</span>
				</div>
			</div>
		</div>
	)
}
