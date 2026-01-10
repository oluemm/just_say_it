import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Shield } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FORUMS } from '@/data/mock'

export default function PostCreate() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const initialForumId = searchParams.get('forumId') || FORUMS[0].id

	const [content, setContent] = useState('')
	const [selectedForumId, setSelectedForumId] = useState(initialForumId)
	const [allowReplies, setAllowReplies] = useState(true)
	const [isAnonymous, setIsAnonymous] = useState(true)
	const maxLength = 500

	const handleSubmit = () => {
		// Mock submission logic
		console.log('Posting:', { content, selectedForumId, allowReplies, isAnonymous })
		navigate('/forums')
	}

	return (
		<div className="container mx-auto max-w-lg min-h-[calc(100vh-4rem)] py-6 flex flex-col">
			{/* Header */}
			<div className="flex items-center justify-between mb-8">
				<Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="gap-2 -ml-2 text-muted-foreground hover:text-foreground">
					<ArrowLeft className="h-4 w-4" />
					Cancel
				</Button>
				<h1 className="font-semibold text-lg">Create Post</h1>
				<Button onClick={handleSubmit} disabled={!content.trim()} className="gap-2">
					Post
				</Button>
			</div>

			{/* Main Content */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				className="flex-1 space-y-6"
			>
				{/* Text Input */}
				<div className="relative">
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						maxLength={maxLength}
						placeholder="What's on your mind? This is a safe space..."
						className="w-full h-48 sm:h-64 p-4 rounded-3xl border-2 border-muted bg-card shadow-sm resize-none focus:outline-none focus:border-primary/50 text-lg leading-relaxed placeholder:text-muted-foreground/50 transition-all font-medium"
					/>
					<div className={`absolute bottom-4 right-4 text-xs font-medium transition-colors ${content.length > maxLength * 0.9 ? 'text-orange-500' : 'text-muted-foreground/50'}`}>
						{content.length}/{maxLength}
					</div>
				</div>

				{/* Forum Selection */}
				<div className="space-y-2">
					<label className="text-sm font-medium text-muted-foreground ml-1">Select Forum</label>
					<div className="relative">
						<select
							value={selectedForumId}
							onChange={(e) => setSelectedForumId(e.target.value)}
							className="w-full h-12 pl-4 pr-10 rounded-xl border border-input bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
						>
							{FORUMS.map(forum => (
								<option key={forum.id} value={forum.id}>
									{forum.title}
								</option>
							))}
						</select>
						<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
							<svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M1 1L5 5L9 1" />
							</svg>
						</div>
					</div>
				</div>

				{/* Toggles */}
				<div className="grid grid-cols-2 gap-4">
					<div
						onClick={() => setAllowReplies(!allowReplies)}
						className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 select-none ${allowReplies ? 'bg-primary/5 border-primary/20' : 'bg-card border-border'}`}
					>
						<div className="flex justify-between items-start mb-2">
							<span className="text-sm font-medium">Allow replies</span>
							{allowReplies && <Check className="h-4 w-4 text-primary" />}
						</div>
						<div className="w-10 h-5 rounded-full bg-muted relative transition-colors duration-200" style={{ backgroundColor: allowReplies ? 'var(--color-primary)' : '' }}>
							<div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${allowReplies ? 'translate-x-5' : 'translate-x-0'}`} />
						</div>
					</div>

					<div
						onClick={() => setIsAnonymous(!isAnonymous)}
						className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 select-none ${isAnonymous ? 'bg-teal-500/5 border-teal-500/20' : 'bg-card border-border'}`}
					>
						<div className="flex justify-between items-start mb-2">
							<span className="text-sm font-medium">Anonymous</span>
							{isAnonymous && <Check className="h-4 w-4 text-teal-500" />}
						</div>
						<div className="w-10 h-5 rounded-full bg-muted relative transition-colors duration-200" style={{ backgroundColor: isAnonymous ? '#14b8a6' : '' }}>
							<div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${isAnonymous ? 'translate-x-5' : 'translate-x-0'}`} />
						</div>
					</div>
				</div>

				{/* Privacy Notice */}
				<div className="flex gap-3 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 text-blue-700 dark:text-blue-300">
					<Shield className="h-5 w-5 shrink-0 mt-0.5" />
					<p className="text-sm leading-snug">
						Your identity is protected. Posts cannot be traced back to you. We prioritize your privacy and safety above all.
					</p>
				</div>

				{/* Post Button (Mobile Sticky) */}
				<Button
					onClick={handleSubmit}
					disabled={!content.trim()}
					size="lg"
					className="w-full h-14 text-lg rounded-2xl shadow-lg mt-4 sm:hidden"
				>
					Post Anonymously
				</Button>
			</motion.div>
		</div>
	)
}
