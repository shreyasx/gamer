"use client";

import * as React from "react";
import "@/lib/env";

export default function HomePage() {
	return (
		<section className="flex justify-center items-center min-h-screen">
			<div className="text-white font-game max-w-xs sm:max-w-md md:max-w-lg">
				<h1 className="">{`Rohan's Home`}</h1>
				<div className="text-white leading-10">
					<p className="py-2 pt-4">{`How do you like the font bro?`}</p>
					<p className="py-2 leading-10">
						{`lorem ipsum dolor sit amet consectetur adipiscing elit sed do` +
							`eiusmod tempor incididunt ut labore et dolore magna aliqua`}
					</p>
				</div>
			</div>
		</section>
	);
}
