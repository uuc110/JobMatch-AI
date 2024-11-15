// src/app/layout.tsx
import "../../src/app/globals.css"; // Ensure your global styles are imported
import SidebarDemo from "@/components/example/sidebar-demo";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // @ts-ignore
    return (
        <html lang="en">
        <body>
        <SidebarDemo>
            {children}
        </SidebarDemo>
        </body>
        </html>
    );
}
