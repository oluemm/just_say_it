import { Link, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from './nav-items'
import { cn } from '@/lib/utils'

export function MobileNav() {
	const location = useLocation()

	return (
		<div className="fixed bottom-0 left-0 right-0 border-t bg-background md:hidden z-50">
			<nav className="flex justify-around items-center p-2">
				{NAV_ITEMS.map((item) => {
					const Icon = item.icon
					return (
						<Link
							key={item.href}
							to={item.href}
							className={cn(
								"flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs transition-all hover:text-primary",
								location.pathname === item.href
									? "text-primary font-medium"
									: "text-muted-foreground"
							)}
						>
							<Icon className="h-5 w-5" />
							<span>{item.label}</span>
						</Link>
					)
				})}
			</nav>
		</div>
	)
}
