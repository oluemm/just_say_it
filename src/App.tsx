import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { AuthProvider } from '@/context/AuthContext'
import RootLayout from '@/components/layout/RootLayout'
import Home from '@/pages/Home'
import Forums from '@/pages/Forums'
import ForumDetail from '@/pages/ForumDetail'
import ThreadDetail from '@/pages/ThreadDetail'
import MoodTracker from '@/pages/MoodTracker'
import Resources from '@/pages/Resources'
import Settings from '@/pages/Settings'
import PostCreate from '@/pages/PostCreate'
import SignUp from '@/pages/auth/SignUp'
import Login from '@/pages/auth/Login'

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<AuthProvider>
				<Routes>
					<Route element={<RootLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/login" element={<Login />} />
						<Route path="/forums" element={<Forums />} />
						<Route path="/forums/:forumId" element={<ForumDetail />} />
						<Route path="/forums/:forumId/thread/:threadId" element={<ThreadDetail />} />
						<Route path="/create-post" element={<PostCreate />} />
						<Route path="/mood" element={<MoodTracker />} />
						<Route path="/resources" element={<Resources />} />
						<Route path="/settings" element={<Settings />} />
					</Route>
				</Routes>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
