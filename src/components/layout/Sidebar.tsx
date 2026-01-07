import { Link, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from './nav-items'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useSidebar } from '@/context/SidebarContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Sidebar() {
	const location = useLocation()
	const { isCollapsed, toggleSidebar } = useSidebar()

	return (
		<div className={cn(
			"hidden border-r bg-muted/40 md:block h-screen sticky top-0 transition-all duration-300",
			isCollapsed ? "md:w-16 lg:w-16" : "md:w-64 lg:w-72"
		)}>
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
					{!isCollapsed && (
						<Link to="/" className="flex items-center gap-2 font-semibold">
							<span className="">JSI</span>
						</Link>
					)}
					<div className="flex items-center gap-2">
						{!isCollapsed && <ThemeToggle />}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleSidebar}
							className="cursor-pointer"
							title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
						>
							{isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
						</Button>
					</div>
				</div>
				<div className="flex-1">
					<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
						{NAV_ITEMS.map((item) => {
							const Icon = item.icon
							return (
								<Link
									key={item.href}
									to={item.href}
									className={cn(
										"flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary cursor-pointer",
										location.pathname === item.href
											? "bg-muted text-primary"
											: "text-muted-foreground",
										isCollapsed && "justify-center"
									)}
									title={isCollapsed ? item.label : undefined}
								>
									<Icon className="h-4 w-4" />
									{!isCollapsed && item.label}
								</Link>
							)
						})}
					</nav>
				</div>
			</div>
		</div>
	)
}
