import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="absolute top-0 left-0 w-full h-80 border-b-4 flex flex-row bg-navbar-bg">
			<div className="flex justify-center items-center h-full w-4/5">
				<h1 className="text-lg text-center w-[90%] max-w-[1200px]">
					{`Hey, I'm a geeky`}
					<span className="text-blue">{` Game Designer `}</span>
					{`creating dazzling experiences by baking in fun and practical. You can catch me learning at `}
					<span className="text-blue underline underline-offset-4 cursor-pointer">{`Studio Sirah`}</span>
					{`!`}
				</h1>
			</div>
			<div className="flex flex-col justify-center items-center h-full w-1/5 max-w-[350px] min-w-[300px] border-l-4">
				<Image
					src="/images/rohan.png"
					alt="Rohan"
					width={100}
					height={100}
					objectFit="contain"
					className="h-full w-auto pt-4"
				/>
				<span>Rohan</span>
			</div>
		</nav>
	);
};

export default Navbar;
