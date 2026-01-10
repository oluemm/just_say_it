/**
 * Firebase Configuration Placeholder
 * 
 * This is a placeholder configuration for Firebase/Firestore integration.
 * When ready to integrate a backend, follow these steps:
 * 
 * 1. Create a Firebase project at https://console.firebase.google.com
 * 2. Enable Authentication > Anonymous sign-in
 * 3. Enable Firestore Database
 * 4. Copy your Firebase config from Project Settings
 * 5. Replace the placeholder config below with your actual values
 * 6. Add environment variables or use a secure config system
 */

// Placeholder Firebase configuration (DO NOT use in production)
export const firebaseConfig = {
	apiKey: "YOUR_API_KEY",
	authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
	projectId: "YOUR_PROJECT_ID",
	storageBucket: "YOUR_PROJECT_ID.appspot.com",
	messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
	appId: "YOUR_APP_ID"
}

/**
 * Recommended Firestore Structure for JSI (Just Say It)
 * 
 * Collections:
 * 
 * /forums/{forumId}
 *   - title: string
 *   - description: string
 *   - icon: string
 *   - color: string
 *   - createdAt: timestamp
 * 
 * /posts/{postId}
 *   - forumId: string (reference to forum)
 *   - content: string
 *   - authorId: string (anonymous user ID)
 *   - authorName: string (e.g., "Quiet River")
 *   - authorIconSeed: string (for consistent icon generation)
 *   - timestamp: timestamp
 *   - likes: number
 *   - likedBy: array of user IDs
 *   - tags: array of strings
 *   - isEdited: boolean
 * 
 * /posts/{postId}/replies/{replyId}
 *   - content: string
 *   - authorId: string
 *   - authorName: string
 *   - authorIconSeed: string
 *   - timestamp: timestamp
 *   - likes: number
 *   - likedBy: array of user IDs
 * 
 * /users/{userId}
 *   - isAnonymous: boolean (always true)
 *   - displayName: string (nature-inspired name)
 *   - iconSeed: string
 *   - joinedAt: timestamp
 *   - blockedUsers: array of user IDs
 * 
 * /users/{userId}/moods/{moodId}
 *   - mood: string ('great' | 'good' | 'okay' | 'low' | 'terrible')
 *   - note: string (optional)
 *   - timestamp: timestamp
 *   - tags: array of strings (optional)
 * 
 * /users/{userId}/savedResources/{resourceId}
 *   - resourceId: string
 *   - savedAt: timestamp
 *   - notes: string (optional)
 * 
 * /resources/{resourceId}
 *   - title: string
 *   - description: string
 *   - category: string
 *   - url: string (optional)
 *   - phone: string (optional)
 *   - isAvailable24_7: boolean
 *   - isFree: boolean
 *   - tags: array of strings
 *   - createdAt: timestamp
 * 
 * /reports/{reportId}
 *   - reportedBy: string (user ID)
 *   - reportedItemType: string ('post' | 'reply' | 'user')
 *   - reportedItemId: string
 *   - reason: string
 *   - additionalInfo: string (optional)
 *   - timestamp: timestamp
 *   - status: string ('pending' | 'reviewed' | 'resolved' | 'dismissed')
 * 
 * Security Rules Recommendations:
 * - All users can read posts and forums
 * - Only authenticated users can create posts/replies
 * - Users can only edit their own posts/replies (within time limit)
 * - Users can only read/write their own user data and moods
 * - Reports are write-only for users, read-only for admins
 */

// Uncomment when ready to use Firebase
// import { initializeApp } from 'firebase/app'
// import { getAuth, signInAnonymously } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'

// const app = initializeApp(firebaseConfig)
// export const auth = getAuth(app)
// export const db = getFirestore(app)

/**
 * Anonymous Authentication Setup
 * 
 * When a user visits the app for the first time:
 * 1. Call signInAnonymously(auth)
 * 2. Generate a random nature-inspired display name from ANONYMOUS_NAMES
 * 3. Generate a random iconSeed (UUID)
 * 4. Create user document in Firestore with anonymous data
 * 5. Store auth state in localStorage for persistence
 * 
 * Example:
 * ```tsx
 * import { signInAnonymously } from 'firebase/auth'
 * import { doc, setDoc } from 'firebase/firestore'
 * import { auth, db } from './firebase'
 * import { ANONYMOUS_NAMES } from '@/types'
 * 
 * const createAnonymousUser = async () => {
 *   const userCredential = await signInAnonymously(auth)
 *   const userId = userCredential.user.uid
 *   
 *   const randomName = ANONYMOUS_NAMES[Math.floor(Math.random() * ANONYMOUS_NAMES.length)]
 *   const iconSeed = crypto.randomUUID()
 *   
 *   await setDoc(doc(db, 'users', userId), {
 *     isAnonymous: true,
 *     displayName: randomName,
 *     iconSeed,
 *     joinedAt: new Date(),
 *     blockedUsers: []
 *   })
 *   
 *   return { userId, displayName: randomName, iconSeed }
 * }
 * ```
 */

// Placeholder exports for type safety
export const auth = null
export const db = null
export const app = null
