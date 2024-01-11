import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";

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
			<body className="min-h-screen">
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col justify-between h-screen">
						<div className="flex grow">
							<Navbar />
							<main className="mx-auto px-6 grow flex">
								<div className="bg-pink-200 grow mt-10 mx-0 lg:mr-8 bg-slate-900 rounded-xl">
									{children}
								</div>
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
