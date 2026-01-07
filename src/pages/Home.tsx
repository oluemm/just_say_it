import { motion } from 'framer-motion'
import { ArrowRight, Shield, Heart, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Home() {
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
		<div className="relative overflow-hidden">
			{/* Background gradients */}
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
				<div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
			</div>

			<div className="container mx-auto px-4 py-20 md:py-32">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-3xl mx-auto space-y-6"
				>
					<h1 className="text-4xl md:text-6xl font-bold flex justify-center items-center gap-3">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Just</span>
						<span className="relative inline-flex flex-col h-[1.2em] w-[3em] overflow-hidden">
							<motion.span
								animate={{ y: ["0%", "-100%", "0%"] }}
								transition={{ repeat: Infinity, duration: 4, times: [0, 0.5, 1], ease: "easeInOut" }}
								className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
							>
								Share
							</motion.span>
							<motion.span
								className="absolute top-0 left-0 block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
								animate={{ y: ["100%", "0%", "100%"] }}
								transition={{ repeat: Infinity, duration: 4, times: [0, 0.5, 1], ease: "easeInOut" }}
								aria-hidden="true"
							>
								Say
							</motion.span>
						</span>
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">It.</span>
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground">
						A safe, anonymous space to share your thoughts, track your mood, and find support.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
						<Link to="/forums">
							<Button size="lg" className="w-full sm:w-auto h-12 text-base gap-2">
								Start Sharing <ArrowRight className="h-4 w-4" />
							</Button>
						</Link>
						<Link to="/mood">
							<Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-base">
								Track Mood
							</Button>
						</Link>
					</div>
				</motion.div>

				{/* Features Grid */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
				>
					<motion.div variants={item}>
						<Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-blue-500/50 transition-colors">
							<CardHeader>
								<Shield className="h-10 w-10 text-blue-400 mb-2" />
								<CardTitle>Anonymous & Secure</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Your identity is protected. Share without fear of judgment. No personal data is tracked.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={item}>
						<Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-colors">
							<CardHeader>
								<Heart className="h-10 w-10 text-purple-400 mb-2" />
								<CardTitle>Supportive Community</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Connect with others who understand. Give and receive support in a moderated environment.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={item}>
						<Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-pink-500/50 transition-colors">
							<CardHeader>
								<Lock className="h-10 w-10 text-pink-400 mb-2" />
								<CardTitle>Private Journaling</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Track your mood and keep a private journal to reflect on your mental health journey.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}
