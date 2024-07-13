"use client";

import * as React from "react";
import "@/lib/env";

export default function HomePage() {
	return (
		<section className="flex justify-center items-center min-h-screen">
			<div className="text-white text-xl sm:text-2xl md:text-3xl font-game max-w-xs sm:max-w-md md:max-w-lg">
				{`Rohan's Home`}
				<div className="text-white text-lg sm:text-xl font-game">
					<p className="py-2 pt-4">How do you like the font bro?</p>
					<p className="py-2 text-justify">
						{`lorem ipsum dolor sit amet consectetur adipiscing elit sed do` +
							`eiusmod tempor incididunt ut labore et dolore magna aliqua` +
							`eiusmod tempor incididunt ut labore et dolore magna aliqua`}
					</p>
				</div>
			</div>
		</section>
	);
}
