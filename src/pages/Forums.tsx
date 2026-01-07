import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FORUMS } from '@/data/mock'

export default function Forums() {
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
			<div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Forums</h1>
					<p className="text-muted-foreground mt-1">Find a community that resonates with you.</p>
				</div>
				<div className="relative w-full md:w-72">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<input
						type="text"
						placeholder="Search topics..."
						className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					/>
				</div>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				{FORUMS.map((forum) => {
					const Icon = forum.icon
					return (
						<motion.div key={forum.id} variants={item}>
							<Link to={`/forums/${forum.id}`}>
								<Card className="h-full hover:border-primary/50 transition-all hover:shadow-md cursor-pointer group">
									<CardHeader>
										<div className={`w-12 h-12 rounded-lg ${forum.bg} ${forum.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
											<Icon className="h-6 w-6" />
										</div>
										<CardTitle className="text-xl">{forum.title}</CardTitle>
										<CardDescription className="line-clamp-2">{forum.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground font-medium">
											View Threads →
										</p>
									</CardContent>
								</Card>
							</Link>
						</motion.div>
					)
				})}
			</motion.div>
		</div>
	)
}
