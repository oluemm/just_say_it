import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function ThreadDetail() {
	const { threadId } = useParams()

	return (
		<div className="container mx-auto p-8">
			<Link to="../" className="text-muted-foreground hover:text-primary flex items-center gap-2 mb-4 text-sm">
				<ArrowLeft className="h-4 w-4" /> Back to Forum
			</Link>
			<h1 className="text-2xl font-bold">Thread {threadId}</h1>
			<p>Thread content placeholder...</p>
		</div>
	)
}
