import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Heart, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { FORUMS, THREADS } from '@/data/mock'

export default function ForumDetail() {
	const { forumId } = useParams()
	const forum = FORUMS.find(f => f.id === forumId)
	const threads = THREADS.filter(t => t.forumId === forumId)

	if (!forum) return <div className="p-8">Forum not found</div>

	return (
		<div className="container mx-auto max-w-4xl py-8">
			<div className="mb-6">
				<Link to="/forums" className="text-muted-foreground hover:text-primary flex items-center gap-2 mb-4 text-sm">
					<ArrowLeft className="h-4 w-4" /> Back to Forums
				</Link>
				<div className="flex justify-between items-start">
					<div>
						<h1 className="text-3xl font-bold">{forum.title}</h1>
						<p className="text-muted-foreground mt-1">{forum.description}</p>
					</div>
					<Button className="gap-2">
						<Plus className="h-4 w-4" /> New Post
					</Button>
				</div>
			</div>

			<div className="space-y-4">
				{threads.length === 0 ? (
					<div className="text-center py-12 text-muted-foreground bg-muted/30 rounded-lg">
						No threads yet. Be the first to share!
					</div>
				) : (
					threads.map((thread, index) => (
						<motion.div
							key={thread.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.05 }}
						>
							<Link to={`/forums/${forumId}/thread/${thread.id}`}>
								<Card className="hover:border-primary/50 transition-colors cursor-pointer">
									<CardHeader className="pb-2">
										<div className="flex justify-between items-start">
											<CardTitle className="text-lg font-medium hover:underline">{thread.title}</CardTitle>
											<span className="text-xs text-muted-foreground whitespace-nowrap">{thread.timestamp}</span>
										</div>
									</CardHeader>
									<CardContent className="pb-2">
										<p className="text-muted-foreground text-sm line-clamp-2">{thread.content}</p>
									</CardContent>
									<CardFooter className="text-xs text-muted-foreground gap-4">
										<span className="flex items-center gap-1"><Heart className="h-3 w-3" /> {thread.likes}</span>
										<span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {thread.replies} replies</span>
										<span className="ml-auto">by {thread.author}</span>
									</CardFooter>
								</Card>
							</Link>
						</motion.div>
					))
				)}
			</div>
		</div>
	)
}
