import "./nav.css";
import Image from "next/image";

export default function Nav() {
	return (
		<div className="nav">
			<h1>This is the nav</h1>
			<Image src="/dog.webp" width={200} height={200} />
		</div>
	)
}