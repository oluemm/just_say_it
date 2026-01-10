import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Phone, ExternalLink, Bookmark, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Resource, ResourceCategory } from '@/types'

// Mock resources data
const RESOURCES: Resource[] = [
	{
		id: '1',
		title: '988 Suicide & Crisis Lifeline',
		description: '24/7, free and confidential support for people in distress, prevention and crisis resources.',
		category: 'crisis-hotline',
		phone: '988',
		isAvailable24_7: true,
		isFree: true,
		tags: ['crisis', 'suicide-prevention', '24/7'],
		createdAt: new Date(),
	},
	{
		id: '2',
		title: 'Crisis Text Line',
		description: 'Free, 24/7 support for those in crisis. Text HOME to 741741 from anywhere in the US.',
		category: 'crisis-hotline',
		phone: '741741',
		isAvailable24_7: true,
		isFree: true,
		tags: ['crisis', 'text-support', '24/7'],
		createdAt: new Date(),
	},
	{
		id: '3',
		title: 'Psychology Today Therapist Directory',
		description: 'Find licensed therapists, psychiatrists, and counselors in your area. Filter by specialty, insurance, and availability.',
		category: 'therapy-directory',
		url: 'https://www.psychologytoday.com/us/therapists',
		isFree: false,
		tags: ['therapy', 'counseling', 'directory'],
		createdAt: new Date(),
	},
	{
		id: '4',
		title: 'Understanding Anxiety: A Guide',
		description: 'Comprehensive article explaining anxiety disorders, symptoms, and evidence-based coping strategies.',
		category: 'article',
		url: '#',
		isFree: true,
		tags: ['anxiety', 'education', 'coping-strategies'],
		createdAt: new Date(),
	},
	{
		id: '5',
		title: 'Calm: Meditation & Sleep App',
		description: 'Guided meditations, sleep stories, breathing programs, and relaxing music to help manage stress and anxiety.',
		category: 'self-care-tool',
		url: 'https://www.calm.com',
		isFree: false,
		tags: ['meditation', 'sleep', 'mindfulness'],
		createdAt: new Date(),
	},
	{
		id: '6',
		title: 'NAMI Support Groups',
		description: 'Free peer-led support groups for people living with mental health conditions and their families.',
		category: 'support-group',
		url: 'https://www.nami.org/Support-Education/Support-Groups',
		isFree: true,
		tags: ['support-group', 'peer-support', 'free'],
		createdAt: new Date(),
	},
]

const CATEGORY_LABELS: Record<ResourceCategory, { label: string; icon: string }> = {
	'crisis-hotline': { label: 'Crisis Hotlines', icon: '🆘' },
	'therapy-directory': { label: 'Therapy Directories', icon: '🔍' },
	'article': { label: 'Articles & Education', icon: '📚' },
	'self-care-tool': { label: 'Self-Care Tools', icon: '🧘' },
	'support-group': { label: 'Support Groups', icon: '👥' },
	'book': { label: 'Books', icon: '📖' },
	'video': { label: 'Videos', icon: '🎥' },
}

export default function Resources() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'all'>('all')

	const filteredResources = RESOURCES.filter((resource) => {
		const matchesSearch =
			resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

		const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory

		return matchesSearch && matchesCategory
	})

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05
			}
		}
	}

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	}

	return (
		<div className="container mx-auto max-w-5xl py-8">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl font-bold tracking-tight">Resources</h1>
				<p className="text-muted-foreground mt-1">
					Helpful resources for your mental health journey
				</p>
			</div>

			{/* Crisis Banner */}
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-6"
			>
				<Card className="border-destructive/50 bg-destructive/5">
					<CardContent className="pt-6">
						<div className="flex items-start gap-3">
							<span className="text-2xl">🆘</span>
							<div className="flex-1">
								<h3 className="font-semibold mb-1">In Crisis? Get Help Now</h3>
								<p className="text-sm text-muted-foreground mb-3">
									If you're experiencing a mental health emergency, please reach out immediately:
								</p>
								<div className="flex flex-wrap gap-3">
									<Button size="sm" variant="outline" className="gap-2">
										<Phone className="h-3 w-3" />
										Call 988
									</Button>
									<Button size="sm" variant="outline">
										Text HOME to 741741
									</Button>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</motion.div>

			{/* Search and Filters */}
			<div className="flex flex-col md:flex-row gap-4 mb-6">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<input
						type="text"
						placeholder="Search resources, topics, or tags..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
					/>
				</div>
				<select
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value as ResourceCategory | 'all')}
					className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
				>
					<option value="all">All Categories</option>
					{Object.entries(CATEGORY_LABELS).map(([value, { label, icon }]) => (
						<option key={value} value={value}>
							{icon} {label}
						</option>
					))}
				</select>
			</div>

			{/* Resources Grid */}
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid gap-4"
			>
				{filteredResources.length === 0 ? (
					<Card>
						<CardContent className="py-12 text-center text-muted-foreground">
							<Heart className="h-12 w-12 mx-auto mb-3 opacity-50" />
							<p>No resources found matching your search.</p>
							<Button
								variant="ghost"
								onClick={() => {
									setSearchQuery('')
									setSelectedCategory('all')
								}}
								className="mt-3"
							>
								Clear filters
							</Button>
						</CardContent>
					</Card>
				) : (
					filteredResources.map((resource) => {
						const categoryInfo = CATEGORY_LABELS[resource.category]
						return (
							<motion.div key={resource.id} variants={item}>
								<Card className="hover:border-primary/50 transition-colors">
									<CardHeader>
										<div className="flex items-start justify-between gap-4">
											<div className="flex-1">
												<CardTitle className="text-lg flex items-center gap-2">
													<span>{categoryInfo.icon}</span>
													{resource.title}
												</CardTitle>
												<CardDescription className="mt-1">
													{resource.description}
												</CardDescription>
											</div>
											<Button size="icon" variant="ghost" className="shrink-0">
												<Bookmark className="h-4 w-4" />
											</Button>
										</div>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap items-center justify-between gap-3">
											<div className="flex flex-wrap gap-2">
												{resource.isAvailable24_7 && (
													<span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary border-primary/20">
														24/7
													</span>
												)}
												{resource.isFree && (
													<span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-success/10 text-success border-success/20">
														Free
													</span>
												)}
												{resource.tags.slice(0, 3).map(tag => (
													<span
														key={tag}
														className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-muted text-muted-foreground"
													>
														{tag}
													</span>
												))}
											</div>
											{resource.phone && (
												<Button size="sm" className="gap-2">
													<Phone className="h-3 w-3" />
													{resource.phone}
												</Button>
											)}
											{resource.url && !resource.phone && (
												<a
													href={resource.url}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center justify-center h-8 rounded-md px-3 text-xs font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground gap-2"
												>
													Visit
													<ExternalLink className="h-3 w-3" />
												</a>
											)}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						)
					})
				)}
			</motion.div>
		</div>
	)
}
