import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { MobileNav } from './MobileNav'
import { SidebarProvider } from '@/context/SidebarContext'

export default function RootLayout() {
	return (
		<SidebarProvider>
			<div className="flex min-h-screen w-full flex-col bg-muted/40 md:flex-row">
				<Sidebar />
				<div className="flex flex-col sm:gap-4 sm:py-4 w-full">
					<main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 min-h-[calc(100vh-4rem)] pb-20 md:pb-4">
						<Outlet />
					</main>
				</div>
				<MobileNav />
			</div>
		</SidebarProvider>
	)
}
