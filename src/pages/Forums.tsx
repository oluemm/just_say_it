import { motion } from 'framer-motion'
import { Search, Users, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FORUMS } from '@/data/mock'
import { useState } from 'react'

export default function Forums() {
	const [searchQuery, setSearchQuery] = useState('')

	const filteredForums = FORUMS.filter(forum =>
		forum.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
		forum.description.toLowerCase().includes(searchQuery.toLowerCase())
	)

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
		<div className="container mx-auto max-w-5xl py-8">
			<div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 px-4 md:px-0">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Find your Community</h1>
					<p className="text-muted-foreground mt-1">Connect with others who understand what you're going through.</p>
				</div>
				<div className="relative w-full md:w-80">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<input
						type="text"
						placeholder="Search forums..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="flex h-11 w-full rounded-full border border-input bg-background/50 backdrop-blur-sm px-4 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm focus:bg-background"
					/>
				</div>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0"
			>
				{filteredForums.map((forum) => {
					const Icon = forum.icon
					return (
						<motion.div key={forum.id} variants={item}>
							<Link to={`/forums/${forum.id}`}>
								<Card className={`h-full border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer group overflow-hidden ${forum.bg}`}>
									<CardHeader className="relative pb-2">
										<div className="flex justify-between items-start">
											<div className={`w-14 h-14 rounded-2xl bg-white/80 dark:bg-black/20 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
												<Icon className={`h-7 w-7 ${forum.color}`} />
											</div>
											{forum.activeNow && (
												<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/50 dark:bg-black/20 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-md">
													<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
													Active
												</span>
											)}
										</div>
										<CardTitle className="text-xl group-hover:text-primary transition-colors">{forum.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="line-clamp-2 text-foreground/70 mb-4 h-10">
											{forum.description}
										</CardDescription>

										<div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-black/5 dark:border-white/5">
											<div className="flex items-center gap-1.5">
												<Users className="h-4 w-4" />
												<span>{forum.memberCount || '2k+'} Members</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</Link>
						</motion.div>
					)
				})}

				{filteredForums.length === 0 && (
					<div className="col-span-full py-12 text-center text-muted-foreground">
						<p>No forums found matching your search.</p>
					</div>
				)}
			</motion.div>

			{/* Floating Action Button for Mobile/Desktop */}
			<Link to="/create-post">
				<Button
					size="icon"
					className="fixed bottom-20 right-4 md:bottom-8 md:right-8 h-14 w-14 rounded-full shadow-xl bg-teal-600 hover:bg-teal-700 text-white transition-transform hover:scale-105"
				>
					<Plus className="h-6 w-6" />
				</Button>
			</Link>
		</div>
	)
}
