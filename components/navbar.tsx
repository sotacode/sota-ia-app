'use client'

import { COLOR1, COLOR4, COLOR5, COLOR6, siteConfig } from "@/config/site";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Navbar as NavbarNextUI, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { ScrollShadow } from "@nextui-org/scroll-shadow";


export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (

    <div className="flex-none lg:grow lg:flex lg:h-full	flex overflow-hidden">

      <div className="hidden lg:flex flex-col w-[300px] py-5 ml-10 mt-10 rounded-xl overflow-hidden" style={{ backgroundColor: COLOR1 }}>
        <div className="mx-auto">
          <NextLink className="flex justify-start items-center gap-1 text-white" href="/">
            <p className="font-extrabold text-inherit text-2xl" style={{ color: COLOR6 }}>Nelsota AI</p>
          </NextLink>
        </div>
        <ScrollShadow hideScrollBar className="grow flex flex-col">
          <div className="flex flex-col">
            <ul className="gap-4 justify-start ml-2 mt-4">
              {siteConfig.navItems.map((item) => (
                <div key={item.href} className="">
                  <NextLink
                    className={`py-2 my-1 flex justify-start items-center gap-1 text-white hover:bg-slate-800 text-lg mx-4 rounded-lg ${pathname === item.href ? "bg-slate-700" : ""}`}
                    style={{
                      transition: "background-color 0.2s ease-in-out",
                    }}
                    color="foreground"
                    href={item.href}
                  >
                    <div className="text-3xl pl-3">
                      {item.component}
                    </div>

                    <div className="pl-4">
                      <p style={{ color: COLOR6 }}>{item.label}</p>
                      <p className="text-sm" style={{ color: COLOR6 }}>{item.description}</p>
                    </div>
                  </NextLink>
                </div>
              ))}
            </ul>
          </div>
        </ScrollShadow>

      </div>


      <NavbarNextUI isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="lg:hidden bg-slate-900 px-1 sm:px-5 md:px-10">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
            style={{ color: COLOR6 }}
          />
          {/* <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand> */}
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">

        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <NextLink className="flex justify-start items-center gap-1 text-white" href="/">
              <p className="font-extrabold text-inherit text-2xl" style={{ color: COLOR6 }}>Nelsota AI</p>
            </NextLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="">
          <div className="grid md:grid-cols-2 mt-1">
            {siteConfig.navItems.map((item, index) => (
              <NextLink
                className={`py-2 my-1 flex justify-start items-center gap-1 text-white hover:bg-slate-800 text-lg mx-4 rounded-lg ${pathname === item.href ? "bg-slate-700" : ""}`}
                style={{
                  transition: "background-color 0.2s ease-in-out",
                }}
                color="foreground"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-3xl pl-3">
                  {item.component}
                </div>

                <div className="pl-4">
                  <p style={{ color: COLOR6 }}>{item.label}</p>
                  <p className="text-sm" style={{ color: COLOR6 }}>{item.description}</p>
                </div>
              </NextLink>
            ))}

          </div>
        </NavbarMenu>
      </NavbarNextUI>
    </div>
  );
};
