"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import { Tooltip } from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { TbBrandAirbnb } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";


export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="" isMenuOpen={isMobile} onMenuOpenChange={setIsMobile}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="" href="/">
            <Image
              removeWrapper
              className="h-14"
              alt=""
              src="/hamilton_logo.png"
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Tooltip content="Airbnb">
            <Link isExternal aria-label="airbnb" href='https://www.airbnb.co.za/rooms/699795123440362177'>
              <TbBrandAirbnb className="text-default-500 w-6 h-6" />
            </Link>
          </Tooltip>
          <Tooltip content="Instagram">
            <Link isExternal aria-label="instagram" href=''>
              <FaInstagram className="text-default-500 w-6 h-6" />
            </Link>
          </Tooltip>
          <Tooltip content="Facebook">
            <Link isExternal aria-label="facebook" href=''>
              <TiSocialFacebookCircular className="text-default-500 w-7 h-7" />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem className="md:flex">
          <Button
            as={Link}
            className="text-sm font-normal bg-blue-300 px-10"
            href={siteConfig.links.contact}
            variant="solid"
            showAnchorIcon
          >
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarItem className="gap-2 flex">
          <Link isExternal aria-label="Twitter" href=''>
            <TbBrandAirbnb className="text-default-500 w-6 h-6" />
          </Link>
          <Link isExternal aria-label="Discord" href=''>
            <FaInstagram className="text-default-500 w-6 h-6" />
          </Link>
          <Link isExternal aria-label="Github" href=''>
            <TiSocialFacebookCircular className="text-default-500 w-7 h-7" />
          </Link>
        </NavbarItem>
        <NavbarMenuToggle onClick={() => setIsMobile(isMobile)} />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4 divide-y divide-default-500">
          {siteConfig.navMenuItems.map((item, index) => (
            <Link
              key={`${item}-${index}`}
              onClick={() => setIsMobile(!isMobile)}
              href={item.href}
              color="foreground"
              
            >
              <NavbarMenuItem className="pt-4" >
                <span className="text-2xl">{item.label}</span>
              </NavbarMenuItem>
            </Link>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
