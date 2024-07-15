"use client";

import * as React from "react";
import "@/lib/env";

import Card from "@/components/card";
import Navbar from "@/components/navbar";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<section className="flex justify-center items-center mt-80">
				<ul className="grid grid-cols-2 gap-x-16 gap-y-4 p-14 w-full">
					<Card
						line1="Kurukshetra: Ascention"
						line2="Design, Playtest, Product"
					/>
					<Card line1="Night Club Miami" line2="Pre-Production" />
					<Card line1="Night Club Miami" line2="Pre-Production" />
					<Card
						line1="Kurukshetra: Ascention"
						line2="Design, Playtest, Product"
					/>
				</ul>
			</section>
		</>
	);
}
