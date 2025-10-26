"use client"

import React from "react";
import Image from "next/image";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react";

import {Button, ButtonGroup} from "@heroui/button";

import navMenuItems from "@/config/home/navMenu";

// Icons
function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>

    )
}

function LogoIcon() {
    return (
        <Image width={250} height={250} src={"/ophelix_transparent.svg"} alt="Logo"/>
    )
};

function UserButton() {
    return (
        <div>
            <Button isIconOnly aria-label="User" color="secondary" variant="light" size="lg">
                <UserIcon/>
            </Button>
        </div>
    )
};

function JewelButton() {
    return (
        <Button variant="bordered" size="md" radius={"md"}
                className={"text-secondary border-secondary  bg-linear-to-tr from-primary " +
                    "to-[#BC58E8]"}>
            JEWEL
        </Button>
    )
}


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar position={"sticky"} onMenuOpenChange={setIsMenuOpen} className="bg-primary" maxWidth="full" isBordered>
            <NavbarContent justify="start" className="items-center">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"} className={"text-secondary"}/>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <LogoIcon/>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <JewelButton/>
                </NavbarItem>
                <NavbarItem>
                    <UserButton/>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className={"w-fit py-5 rounded-b-sm"}>
                <div className="">
                    {navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "warning" : index === navMenuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
                <div className="mt-20">
                    <NavbarMenuItem> Privilege Path</NavbarMenuItem>
                </div>
            </NavbarMenu>
        </Navbar>


    )
};



