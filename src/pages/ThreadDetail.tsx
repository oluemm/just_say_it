import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Heart, Share2, MoreHorizontal, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { THREADS, FORUMS } from '@/data/mock'
import { useState } from 'react'

export default function ThreadDetail() {
	const { forumId, threadId } = useParams()
	const navigate = useNavigate()
	const thread = THREADS.find(t => t.id === threadId)
	const forum = FORUMS.find(f => f.id === forumId)

	const [replyText, setReplyText] = useState('')

	// Mock replies
	const [replies, setReplies] = useState([
		{
			id: '1',
			author: 'Gentle Breeze',
			content: 'I completely relate to this. Last week I had the same feeling properly right before a review.',
			timestamp: '1h ago',
			likes: 5
		},
		{
			id: '2',
			author: 'Silent Mountain',
			content: 'Have you tried the 4-7-8 breathing technique? It really helps me ground myself when panic sets in.',
			timestamp: '45m ago',
			likes: 12
		}
	])

	if (!thread || !forum) return <div className="p-8 text-center">Thread not found</div>

	const handleReply = () => {
		if (!replyText.trim()) return

		const newReply = {
			id: Math.random().toString(),
			author: 'You (Anonymous)',
			content: replyText,
			timestamp: 'Just now',
			likes: 0
		}

		setReplies([...replies, newReply])
		setReplyText('')
	}

	return (
		<div className="flex flex-col min-h-screen bg-muted/10">
			{/* Header */}
			<div className="bg-background border-b sticky top-0 z-10 px-4 py-3 shadow-sm">
				<div className="container mx-auto max-w-2xl flex items-center justify-between">
					<Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="-ml-2 gap-1 text-muted-foreground hover:text-foreground">
						<ArrowLeft className="h-4 w-4" />
						Back
					</Button>
					<span className="text-sm font-semibold truncate max-w-[200px] opacity-0 md:opacity-100 transition-opacity">
						{thread.title}
					</span>
					<Button variant="ghost" size="icon">
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</div>
			</div>

			<div className="flex-1 container mx-auto max-w-2xl px-4 py-6 pb-24">
				{/* Main Post */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-8"
				>
					<Card className="border-none shadow-sm bg-card ring-1 ring-border/50 overflow-hidden">
						<div className={`h-2 w-full ${forum.bg.replace('/10', '/50')}`} />
						<CardHeader className="pb-2">
							<div className="flex justify-between items-start mb-4">
								<div className="flex items-center gap-3">
									<Avatar className="h-10 w-10 border-2 border-background shadow-sm">
										<AvatarFallback className="bg-gradient-to-br from-teal-100 to-blue-100 text-teal-700">AB</AvatarFallback>
									</Avatar>
									<div>
										<div className="font-semibold text-sm">{thread.author}</div>
										<div className="text-xs text-muted-foreground">{thread.timestamp} • {forum.title}</div>
									</div>
								</div>
							</div>
							<h1 className="text-xl md:text-2xl font-bold leading-tight">{thread.title}</h1>
						</CardHeader>
						<CardContent className="space-y-6">
							<p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">
								{thread.content}
							</p>

							<div className="flex flex-wrap gap-2">
								{thread.tags.map(tag => (
									<span key={tag} className="px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
										#{tag}
									</span>
								))}
							</div>

							<div className="flex items-center gap-6 pt-6 border-t">
								<Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20">
									<Heart className="h-5 w-5" />
									{thread.likes}
								</Button>
								<Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20">
									<MessageCircle className="h-5 w-5" />
									{replies.length}
								</Button>
								<Button variant="ghost" size="sm" className="gap-2 ml-auto text-muted-foreground">
									<Share2 className="h-5 w-5" />
								</Button>
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* Replies Section */}
				<div className="space-y-6">
					<h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider ml-1">
						Responses ({replies.length})
					</h3>

					{replies.map((reply, i) => (
						<motion.div
							key={reply.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.1 + (i * 0.1) }}
						>
							<Card className="border-none shadow-sm bg-card/50 backdrop-blur-sm">
								<CardContent className="pt-6">
									<div className="flex gap-4">
										<Avatar className="h-8 w-8 mt-1">
											<AvatarFallback className="bg-muted text-xs">{reply.author.substring(0, 2)}</AvatarFallback>
										</Avatar>
										<div className="flex-1 space-y-2">
											<div className="flex justify-between items-center">
												<span className="font-semibold text-sm">{reply.author}</span>
												<span className="text-xs text-muted-foreground">{reply.timestamp}</span>
											</div>
											<p className="text-sm leading-relaxed text-foreground/90">
												{reply.content}
											</p>
											<div className="flex items-center gap-4 pt-2">
												<button className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
													<Heart className="h-3 w-3" /> {reply.likes}
												</button>
												<button className="text-xs text-muted-foreground hover:text-primary">
													Reply
												</button>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>

			{/* Reply Input */}
			<div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t p-4 z-20">
				<div className="container mx-auto max-w-2xl flex gap-3">
					<Avatar className="h-10 w-10 hidden sm:block">
						<AvatarFallback className="bg-teal-100 text-teal-700">Me</AvatarFallback>
					</Avatar>
					<div className="flex-1 relative">
						<input
							type="text"
							value={replyText}
							onChange={(e) => setReplyText(e.target.value)}
							placeholder="Share your thoughts supportively..."
							className="w-full h-11 pl-4 pr-12 rounded-full border border-input bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
							onKeyDown={(e) => e.key === 'Enter' && handleReply()}
						/>
						<Button
							size="icon"
							className="absolute right-1 top-1 h-9 w-9 rounded-full"
							disabled={!replyText.trim()}
							onClick={handleReply}
						>
							<Send className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
