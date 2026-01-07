import { Link, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from './nav-items'
import { cn } from '@/lib/utils'

export function Sidebar() {
	const location = useLocation()

	return (
		<div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72 h-screen sticky top-0">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link to="/" className="flex items-center gap-2 font-semibold">
						<span className="">JSI</span>
					</Link>
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
										"flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
										location.pathname === item.href
											? "bg-muted text-primary"
											: "text-muted-foreground"
									)}
								>
									<Icon className="h-4 w-4" />
									{item.label}
								</Link>
							)
						})}
					</nav>
				</div>
			</div>
		</div>
	)
}
