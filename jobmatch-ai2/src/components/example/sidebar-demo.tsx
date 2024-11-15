"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
    IconHome,
    IconBell,
    IconBriefcase,
    IconFileText,
    IconSettings,
    IconLogout,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Dashboard from "../dashboard/Dashboard"; // Adjust the import path accordingly
import Image from "next/image";
import Link from "next/link";
import {ThemeToggle} from "@/components/ThemeToggle";

// Define the type for the link objects
interface LinkType {
    label: string;
    href: string;
    icon: React.ReactNode;
}

export default function SidebarDemo() {
    const links: LinkType[] = [
        {
            label: "Home",
            href: "/",
            icon: <IconHome className="icon" />,
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: <IconBell className="icon" />,
        },
        // Within the links array in SidebarDemo
        {
            label: "Jobs",
            href: "/jobs",
            icon: <IconBriefcase className="icon" />,
        },
        {
            label: "Resume Editor",
            href: "/resume",
            icon: <IconFileText className="icon" />,
        },
        {
            label: "Settings",
            href: "/settings",
            icon: <IconSettings className="icon" />,
        },
        {
            label: "Logout",
            href: "/logout",
            icon: <IconLogout className="icon" />,
        },
    ];

    const [open, setOpen] = useState<boolean>(true);

    return (
        <div className="flex h-screen">
            <Sidebar open={open} setOpen={setOpen} animate={true}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <Logo />
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    {/*// Inside SidebarDemo component*/}
                    <div className="flex items-center justify-between">
                        <Logo />
                        {/*<ThemeToggle />*/}
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Your Name",
                                href: "/profile",
                                icon: (
                                    <Image
                                        src="/path-to-your-profile-picture.jpg"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <div className="flex-1">
                <Dashboard />
            </div>
        </div>
    );
}

const Logo: React.FC = () => (
    <Link href="/" className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-blue-500 rounded-full" />
        <span className="text-xl font-semibold">Your App Name</span>
    </Link>
);
