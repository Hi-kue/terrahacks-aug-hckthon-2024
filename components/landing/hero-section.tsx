"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	return (
		<section
			id="hero"
			className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
		>
			<div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
				<TextShimmer className="inline-flex items-center justify-center">
					<span>✨ Introducing EcoTrace ✨</span>
				</TextShimmer>
			</div>
			<h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        EcoTrace
      </h1>
      <h2 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-2 text-2xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-3xl md:text-4xl lg:text-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Pioneering the path to a greener future.
      </h2>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        An interactive and gamified approach to reducing your carbon footprint. Compete with your friends and recieve tips on how you can help our planet stay healthy!
        <br className="hidden md:block" />
      </p>
      <a href="/signup">
        <ShimmerButton className="shadow-2xl inline-flex items-center justify-center">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Get Started ✨
          </span>
        </ShimmerButton>
      </a>
			<div
				ref={ref}
				className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
			>
				<div
					className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
						inView ? "before:animate-image-glow" : ""
					}`}
				>
					<BorderBeam
						size={200}
						duration={12}
						delay={11}
						colorFrom="var(--color-one)"
						colorTo="var(--color-two)"
					/>

					<img
						src="/hero-dark.png"
						alt="Hero Image"
						className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
					/>
					<img
						src="/hero-light.png"
						alt="Hero Image"
						className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden"
					/>
				</div>
			</div>
		</section>
	);
}
