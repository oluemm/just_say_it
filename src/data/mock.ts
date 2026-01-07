import { Brain, CloudRain, Trophy, Coffee, Heart, Sun } from 'lucide-react'

export const FORUMS = [
  {
    id: '1',
    title: 'Anxiety Support',
    description: 'Share your struggles and strategies for managing anxiety. You are not alone.',
    icon: Brain,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    id: '2',
    title: 'Depression Compass',
    description: 'A safe harbor during the storm. Navigating the lows together.',
    icon: CloudRain,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  },
  {
    id: '3',
    title: 'Daily Wins',
    description: 'Celebrate your small victories. Taking a shower, getting out of bed - it all counts.',
    icon: Trophy,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  {
    id: '4',
    title: 'Casual Chat',
    description: 'Talk about hobbies, movies, pets, or anything else to take your mind off things.',
    icon: Coffee,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    id: '5',
    title: 'Relationships',
    description: 'Navigating friends, family, and romantic relationships.',
    icon: Heart,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10'
  },
  {
    id: '6',
    title: 'Positivity & Hope',
    description: 'Quotes, stories, and reminders that things can get better.',
    icon: Sun,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
]

export const THREADS = [
  {
    id: '1',
    forumId: '1',
    title: 'Feeling extremely overwhelmed today at work',
    author: 'Anonymous Bird',
    content: 'I have a big presentation tomorrow and I feel like I can\'t breathe. How do you all cope with pre-presentation jitters?',
    likes: 12,
    replies: 5,
    timestamp: '2h ago',
    tags: ['work', 'panic']
  },
  {
    id: '2',
    forumId: '1',
    title: 'Grounding techniques that actually work?',
    author: 'Quiet River',
    content: '5-4-3-2-1 works sometimes, but looking for other quick things I can do in public.',
    likes: 24,
    replies: 8,
    timestamp: '5h ago',
    tags: ['tips']
  },
  {
    id: '3',
    forumId: '3',
    title: 'I cleaned my room today!',
    author: 'Sunny Side',
    content: 'It has been messy for weeks. Finally got the energy to tackle it. Feels so much lighter.',
    likes: 45,
    replies: 12,
    timestamp: '1h ago',
    tags: ['cleaning', 'victory']
  },
]
