"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
	const { theme } = useTheme();

	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setIsDark(theme === "dark");
	}, [theme]);

	const logoUrl = isDark ? "/images/logo-dark.png" : "/images/logo.png";

	return (
		<div className="flex min-h-0 flex-1 flex-col bg-pattern">
			<main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12 sm:px-8 sm:py-16">
				<header className="mb-12 text-center">
					<div className="mb-6 flex justify-center">
						<Image
							priority
							alt="Logo"
							width={500}
							height={500}
							src={logoUrl}
							style={{ width: "500px", height: "auto" }}
						/>
					</div>
					<p className="mx-auto max-w-md font-normal text-lg text-muted-foreground leading-relaxed">
						Sou desenvolvedora de software com experiência em soluções de ponta
						a ponta, criando aplicações web e mobile com React e React Native.
					</p>
				</header>

				<footer className="border-border border-t pt-8">
					<div className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-1 font-normal text-muted-foreground text-sm">
						<Link
							href="https://github.com/b1z3rr4"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors hover:text-foreground"
						>
							github
						</Link>
						<Link
							href="https://www.linkedin.com/in/nbezerra-dev/"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors hover:text-foreground"
						>
							linkedin
						</Link>
						<Link
							href="https://x.com/b1z3rr4"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors hover:text-foreground"
						>
							twitter
						</Link>
						<Link
							href={"/posts" as "/"}
							className="transition-colors hover:text-foreground"
						>
							blog
						</Link>
					</div>
					<p className="text-center font-normal text-muted-foreground text-xs">
						© {new Date().getFullYear()} powered by nbezerra
					</p>
				</footer>
			</main>
		</div>
	);
}
