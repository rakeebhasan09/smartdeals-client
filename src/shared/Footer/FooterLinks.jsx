import { Link } from "react-router";

const FooterLinks = ({ title, link1, link2, link3, link4 }) => {
	return (
		<div>
			<h2 className="text-white text-[20px] font-medium mb-4">{title}</h2>
			<ul className="flex flex-col gap-4">
				<li>
					<Link className="text-[#A1A1AA]">{link1}</Link>
				</li>
				<li>
					<Link className="text-[#A1A1AA]">{link2}</Link>
				</li>
				<li>
					<Link className="text-[#A1A1AA]">{link3}</Link>
				</li>
				<li>
					<Link className="text-[#A1A1AA]">{link4}</Link>
				</li>
			</ul>
		</div>
	);
};

export default FooterLinks;
