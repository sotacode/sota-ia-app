import "@/styles/globals.css";
import { Metadata } from "next";
import { COLOR1, COLOR2, COLOR6, siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { COLOR3 } from '../config/site';
import { ScrollShadow } from "@nextui-org/scroll-shadow";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className="h-screen overflow-auto">
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="h-screen flex flex-col overflow-auto">
						<div className="flex flex-col lg:flex-row grow h-full overflow-hidden">
							<Navbar />
							<main className="w-full mx-auto px-6 h-full	flex overflow-hidden">

								<ScrollShadow hideScrollBar className="grow mt-5 lg:mt-10 mx-0 lg:mr-8 rounded-xl overflow-auto" style={{backgroundColor: COLOR1, color: COLOR6}}>	
									{children}
								</ScrollShadow>
							</main>
						</div>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href={siteConfig.links.createdBy}
								title="nextui.org homepage"
							>
								<span className="text-default-600">Created by</span>
								<p className="text-primary">Nelsota</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
