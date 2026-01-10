import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, MoreHorizontal, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { FORUMS, THREADS } from '@/data/mock'

export default function ForumDetail() {
	const { forumId } = useParams()
	const forum = FORUMS.find(f => f.id === forumId)
	// We'll mock filtering threads by forumId, though our mock data might not have enough threads.
	// For demo purposes, we'll just show all threads if none explicitly match, or just what matches.
	// checking mock.ts, threads DO have forumId.
	const threads = THREADS.filter(t => t.forumId === forumId)

	if (!forum) return <div className="p-8 text-center">Forum not found</div>

	const Icon = forum.icon

	return (
		<div className="min-h-screen pb-20">
			{/* Custom Hero Header based on forum color */}
			<div className={`pt-12 pb-16 px-4 ${forum.bg.replace('/10', '/30').replace('/20', '/40')} transition-colors`}>
				<div className="container mx-auto max-w-4xl">
					<Link to="/forums" className="inline-flex items-center text-sm font-medium opacity-70 hover:opacity-100 transition-opacity mb-6">
						<ArrowLeft className="h-4 w-4 mr-1" /> Back to all forums
					</Link>

					<div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
						<div className="flex items-start gap-4">
							<div className={`p-4 rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm`}>
								<Icon className={`h-8 w-8 ${forum.color}`} />
							</div>
							<div>
								<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{forum.title}</h1>
								<p className="text-lg opacity-80 max-w-xl text-foreground/80">{forum.description}</p>

								<div className="flex gap-4 mt-4 text-sm font-medium opacity-60">
									<span>{forum.memberCount || '12k'} Members</span>
									<span className="flex items-center gap-1.5">
										<span className="w-1.5 h-1.5 rounded-full bg-green-500" />
										Active now
									</span>
								</div>
							</div>
						</div>

						<Link to={`/create-post?forumId=${forum.id}`}>
							<Button size="lg" className="rounded-full shadow-lg gap-2 font-semibold">
								<Plus className="h-5 w-5" /> Start Discussion
							</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className="container mx-auto max-w-4xl -mt-8 px-4">
				<div className="space-y-4">
					{threads.length === 0 ? (
						<Card className="p-12 text-center bg-card/80 backdrop-blur-sm shadow-sm border-dashed">
							<div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
								<MessageCircle className="h-8 w-8 text-muted-foreground/50" />
							</div>
							<h3 className="text-lg font-medium mb-2">No threads yet</h3>
							<p className="text-muted-foreground mb-6">Be the first to start a conversation in this community.</p>
							<Link to={`/create-post?forumId=${forum.id}`}>
								<Button>Start Discussion</Button>
							</Link>
						</Card>
					) : (
						threads.map((thread, index) => (
							<motion.div
								key={thread.id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.05 }}
							>
								<Link to={`/forums/${forumId}/thread/${thread.id}`}>
									<Card className="hover:shadow-md transition-all cursor-pointer border-transparent hover:border-primary/20 bg-card/80 backdrop-blur-sm">
										<CardHeader className="pb-2">
											<div className="flex justify-between items-start gap-4">
												<div>
													<div className="flex items-center gap-2 mb-2">
														<span className="px-2.5 py-0.5 rounded-full bg-muted text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
															{thread.tags[0]}
														</span>
														<span className="text-xs text-muted-foreground">• {thread.timestamp}</span>
													</div>
													<CardTitle className="text-lg leading-snug hover:text-primary transition-colors">
														{thread.title}
													</CardTitle>
												</div>
												<Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 text-muted-foreground">
													<MoreHorizontal className="h-4 w-4" />
												</Button>
											</div>
										</CardHeader>
										<CardContent className="pb-4">
											<p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
												{thread.content}
											</p>
										</CardContent>
										<CardFooter className="pt-0 pb-4 text-xs text-muted-foreground">
											<div className="flex items-center gap-4">
												<div className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-muted/50 transition-colors pointer-events-none">
													<div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
														<span className="text-[10px]">👤</span>
													</div>
													<span className="font-medium text-foreground/80">{thread.author}</span>
												</div>
												<span className="flex items-center gap-1.5 hover:text-foreground transition-colors">
													<MessageCircle className="h-4 w-4" />
													{thread.replies} replies
												</span>
											</div>
										</CardFooter>
									</Card>
								</Link>
							</motion.div>
						))
					)}
				</div>
			</div>
		</div>
	)
}
