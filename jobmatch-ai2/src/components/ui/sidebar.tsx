// src/components/ui/sidebar.tsx
"use client";
import React, { useState, createContext, useContext, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";

interface SidebarContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
    animate: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

export const SidebarProvider = ({
                                    children,
                                    open: openProp,
                                    setOpen: setOpenProp,
                                    animate = true,
                                }: {
    children: ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    animate?: boolean;
}) => {
    const [openState, setOpenState] = useState(false);

    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

    return (
        <SidebarContext.Provider value={{ open, setOpen, animate }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const Sidebar = ({
                            children,
                            open,
                            setOpen,
                            animate = true,
                        }: {
    children: ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    animate?: boolean;
}) => {
    return (
        <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
            {children}
        </SidebarProvider>
    );
};

// Define animation variants
const sidebarVariants: Variants = {
    open: { width: 300, transition: { type: "spring", stiffness: 100 } },
    closed: { width: 60, transition: { type: "spring", stiffness: 100 } },
};

export const SidebarBody = ({ className, children }: { className?: string; children: ReactNode }) => {
    return (
        <>
            <DesktopSidebar className={className}>{children}</DesktopSidebar>
            <MobileSidebar className={className}>{children}</MobileSidebar>
        </>
    );
};

export const DesktopSidebar = ({
                                   className,
                                   children,
                               }: {
    className?: string;
    children: ReactNode;
}) => {
    const { open, setOpen, animate } = useSidebar();

    return (
        <motion.div
            className={cn(
                "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex-shrink-0",
                className
            )}
            variants={animate ? sidebarVariants : undefined}
            animate={open ? "open" : "closed"}
            initial={open ? "open" : "closed"}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {children}
        </motion.div>
    );
};

export const MobileSidebar = ({
                                  className,
                                  children,
                              }: {
    className?: string;
    children: ReactNode;
}) => {
    const { open, setOpen } = useSidebar();
    return (
        <div
            className={cn(
                "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
            )}
        >
            <div className="flex justify-end z-20 w-full">
                <IconMenu2
                    className="text-neutral-800 dark:text-neutral-200"
                    onClick={() => setOpen(!open)}
                />
            </div>
            {open && (
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className={cn(
                        "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                        className
                    )}
                >
                    <div
                        className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                        onClick={() => setOpen(!open)}
                    >
                        <IconX />
                    </div>
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export const SidebarLink = ({
                                link,
                                className,
                            }: {
    link: { href: string; label: string; icon: React.ReactNode };
    className?: string;
}) => {
    const { open, animate } = useSidebar();
    return (
        <Link href={link.href}>
            <motion.div
                className={cn(
                    "flex items-center justify-start gap-2 group/sidebar py-2",
                    className
                )}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
            >
                {link.icon}
                {open && (
                    <motion.span
                        animate={{
                            opacity: open ? 1 : 0,
                            display: open ? "inline-block" : "none",
                        }}
                        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre"
                    >
                        {link.label}
                    </motion.span>
                )}
            </motion.div>
        </Link>
    );
};
