import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

const footerNavs = [
  {
    label: "Product",
    items: [
      {
        href: "/", // TODO: Add Email Collection Link (Optional)
        name: "Email Collection",
      },
      {
        href: "/", // TODO: Add Pricing Link (Optional)
        name: "Pricing",
      },
      {
        href: "/", // TODO: Add FAQ Link (Optional) 
        name: "FAQ",
      },
    ],
  },

  {
    label: "Community",
    items: [
      {
        href: "/", // TODO: Add Discord Link (Optional) 
        name: "Discord",
      },
      {
        href: "/", // TODO: Add Twitter Link (Optional) 
        name: "Twitter",
      },
      {
        href: "mailto:hikue.primary@gmail.com",
        name: "Email",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/",
        name: "Terms",
      },

      {
        href: "/",
        name: "Privacy",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "", // TODO: Add Discord Social
    name: "Discord",
    icon: <DiscordLogoIcon className="h-4 w-4" />,
  },
  {
    href: "", // TODO: Add Twitter Social
    name: "Twitter",
    icon: <TwitterLogoIcon className="h-4 w-4" />,
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                  src="/ecotrace-logo.png"
                  alt="Magic UI"
                  width={32}
                  height={32}
                  className="rounded-lg text-primary"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                EcoTrace
              </span>
            </Link>
            <p className="max-w-xs">
              Pioneering platform that helps you reduce your carbon footprint
              and make the world a better place.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                  {nav.label}
                </h2>
                <ul className="gap-2 grid">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              EcoTrace
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}
