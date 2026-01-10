import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Save } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { MOOD_EMOJIS, type MoodLevel } from '@/types'

export default function MoodTracker() {
	const [selectedMood, setSelectedMood] = useState<MoodLevel | null>(null)
	const [note, setNote] = useState('')
	const [isSaving, setIsSaving] = useState(false)

	const handleSaveMood = async () => {
		if (!selectedMood) return

		setIsSaving(true)
		// TODO: Save to Firebase/backend
		await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API call

		// Reset form
		setSelectedMood(null)
		setNote('')
		setIsSaving(false)

		// Show success feedback (could use toast notification)
		alert('Mood saved! 💚')
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
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Mood Tracker</h1>
					<p className="text-muted-foreground mt-1">
						How are you feeling today? Track your emotional journey.
					</p>
				</div>
				<Link to="/mood/history">
					<Button variant="outline" className="gap-2">
						<TrendingUp className="h-4 w-4" />
						View History
					</Button>
				</Link>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid gap-6"
			>
				{/* Today's Mood Entry */}
				<motion.div variants={item}>
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Calendar className="h-5 w-5 text-primary" />
								Today's Check-In
							</CardTitle>
							<CardDescription>
								Select how you're feeling and optionally add a note
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							{/* Mood Selector */}
							<div className="space-y-3">
								<label className="text-sm font-medium">How are you feeling?</label>
								<div className="grid grid-cols-5 gap-3">
									{(Object.keys(MOOD_EMOJIS) as MoodLevel[]).map((level) => {
										const mood = MOOD_EMOJIS[level]
										const isSelected = selectedMood === level
										return (
											<button
												key={level}
												onClick={() => setSelectedMood(level)}
												className={`
													flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all
													${isSelected
														? 'border-primary bg-primary/10 scale-105'
														: 'border-border hover:border-primary/50 hover:bg-muted/50'
													}
												`}
											>
												<span className="text-4xl">{mood.emoji}</span>
												<span className={`text-xs font-medium ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
													{mood.label}
												</span>
											</button>
										)
									})}
								</div>
							</div>

							{/* Optional Note */}
							<div className="space-y-3">
								<label htmlFor="mood-note" className="text-sm font-medium">
									Add a note (optional)
								</label>
								<textarea
									id="mood-note"
									value={note}
									onChange={(e) => setNote(e.target.value)}
									placeholder="What's on your mind? This is private and only for you."
									rows={4}
									className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
									maxLength={500}
								/>
								<p className="text-xs text-muted-foreground text-right">
									{note.length}/500
								</p>
							</div>

							{/* Save Button */}
							<Button
								onClick={handleSaveMood}
								disabled={!selectedMood || isSaving}
								className="w-full gap-2"
								size="lg"
							>
								<Save className="h-4 w-4" />
								{isSaving ? 'Saving...' : 'Save Mood Entry'}
							</Button>
						</CardContent>
					</Card>
				</motion.div>

				{/* Quick Stats */}
				<motion.div variants={item}>
					<Card>
						<CardHeader>
							<CardTitle>This Week at a Glance</CardTitle>
							<CardDescription>Your emotional patterns over the last 7 days</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="text-center py-8 text-muted-foreground">
								<TrendingUp className="h-12 w-12 mx-auto mb-3 opacity-50" />
								<p>Start tracking to see your weekly patterns</p>
								<Link to="/mood/history" className="text-primary hover:underline text-sm mt-2 inline-block">
									View full history →
								</Link>
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* Tips Card */}
				<motion.div variants={item}>
					<Card className="border-primary/20 bg-primary/5">
						<CardHeader>
							<CardTitle className="text-base">💡 Mood Tracking Tips</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 text-sm text-muted-foreground">
							<p>• Be honest with yourself - this is a judgment-free space</p>
							<p>• Track daily for best insights into your patterns</p>
							<p>• Notes are optional but can help you remember context</p>
							<p>• Look for patterns over time, not individual days</p>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>
		</div>
	)
}
