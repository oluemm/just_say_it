import { type LucideIcon } from 'lucide-react'

export interface User {
  id: string
  username: string
  email?: string
  displayName?: string
  iconSeed?: string
  joinedAt: Date | string
  blockedUsers?: string[]
}

export interface Forum {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string // Tailwind text color class
  bg: string // Tailwind background color class
  memberCount?: string // e.g., "12.5k"
  activeNow?: boolean
}

export interface Post {
  id: string
  forumId: string
  content: string
  author: AnonymousAuthor
  timestamp: Date
  likes: number
  likedBy: string[] // User IDs who liked
  replyCount: number
  tags: string[]
  isEdited: boolean
  editedAt?: Date
}

export interface Reply {
  id: string
  postId: string
  content: string
  author: AnonymousAuthor
  timestamp: Date
  likes: number
  likedBy: string[]
  isEdited: boolean
  editedAt?: Date
}

export interface AnonymousAuthor {
  id: string
  displayName: string
  iconSeed: string
}

export interface MoodEntry {
  id: string
  userId: string
  mood: MoodLevel
  note?: string
  timestamp: Date
  tags?: string[] // e.g., ["work", "sleep", "social"]
}

export type MoodLevel = 'great' | 'good' | 'okay' | 'low' | 'terrible'

export interface MoodEmoji {
  level: MoodLevel
  emoji: string
  label: string
  color: string // Tailwind color class
}

export interface Resource {
  id: string
  title: string
  description: string
  category: ResourceCategory
  url?: string
  phone?: string
  isAvailable24_7?: boolean
  isFree?: boolean
  tags: string[]
  createdAt: Date
}

export type ResourceCategory = 
  | 'crisis-hotline'
  | 'therapy-directory'
  | 'article'
  | 'self-care-tool'
  | 'support-group'
  | 'book'
  | 'video'

export interface SavedResource {
  userId: string
  resourceId: string
  savedAt: Date
  notes?: string
}

export interface BlockedUser {
  userId: string // The user doing the blocking
  blockedUserId: string // The user being blocked
  blockedAt: Date
  reason?: string
}

export interface Report {
  id: string
  reportedBy: string // User ID
  reportedItemType: 'post' | 'reply' | 'user'
  reportedItemId: string
  reason: ReportReason
  additionalInfo?: string
  timestamp: Date
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed'
}

export type ReportReason =
  | 'harassment'
  | 'spam'
  | 'self-harm-content'
  | 'misinformation'
  | 'hate-speech'
  | 'other'

// Mood tracking constants
export const MOOD_EMOJIS: Record<MoodLevel, MoodEmoji> = {
  great: { level: 'great', emoji: '😊', label: 'Great', color: 'text-success' },
  good: { level: 'good', emoji: '🙂', label: 'Good', color: 'text-primary' },
  okay: { level: 'okay', emoji: '😐', label: 'Okay', color: 'text-warning' },
  low: { level: 'low', emoji: '😔', label: 'Low', color: 'text-orange-500' },
  terrible: { level: 'terrible', emoji: '😢', label: 'Terrible', color: 'text-destructive' },
}

// Anonymous display names (nature-inspired)
export const ANONYMOUS_NAMES = [
  'Quiet River',
  'Gentle Breeze',
  'Morning Dew',
  'Soft Rain',
  'Peaceful Dawn',
  'Calm Waters',
  'Serene Sky',
  'Warm Sunlight',
  'Still Forest',
  'Whispering Wind',
  'Tender Leaf',
  'Silent Snow',
  'Flowing Stream',
  'Distant Star',
  'Gentle Wave',
  'Soft Cloud',
  'Kind Moon',
  'Patient Stone',
  'Quiet Ember',
  'Calm Tide',
]
