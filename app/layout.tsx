import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
	title: "Chat with PDF",
	description: "Upload your PDF and ask whatever you want",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>{children}</body>
			</html>
		</ClerkProvider>
	);
}
