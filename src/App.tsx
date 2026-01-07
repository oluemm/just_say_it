import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { AuthProvider } from '@/context/AuthContext'
import RootLayout from '@/components/layout/RootLayout'
import Home from '@/pages/Home'
import Forums from '@/pages/Forums'
import ForumDetail from '@/pages/ForumDetail'
import ThreadDetail from '@/pages/ThreadDetail'

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<AuthProvider>
				<Routes>
					<Route element={<RootLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/forums" element={<Forums />} />
						<Route path="/forums/:forumId" element={<ForumDetail />} />
						<Route path="/forums/:forumId/thread/:threadId" element={<ThreadDetail />} />
					</Route>
				</Routes>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
