'use client'

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { usePathname } from "next/navigation";



export const Navbar = () => {
	const pathname = usePathname();
	return (
		<>
			<div className="hidden lg:flex flex-col w-[300px] py-5 bg-slate-900 ml-10 mt-10 rounded-xl">
				<div className="flex flex-col" >
					<div className="mx-auto">
						<NextLink className="flex justify-start items-center gap-1 text-white" href="/">
							<p className="font-extrabold text-inherit text-2xl">Nelsota IA</p>
						</NextLink>
					</div>
					<ul className="gap-4 justify-start ml-2 mt-4">
						{siteConfig.navItems.map((item) => (
							<div key={item.href} className="py-1">
								<NextLink
									className={`flex justify-start items-center gap-1 text-white hover:bg-slate-700 text-lg mx-4 rounded-lg ${pathname === item.href ? "bg-slate-700" : ""}`}
									color="foreground"
									href={item.href}
								>
									<div className="text-3xl pl-3">
										{item.component}
									</div>

									<div className="pl-4">
										<p>{item.label}</p>
										<p className="text-sm text-slate-200">{item.description}</p>
									</div>
								</NextLink>
							</div>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
