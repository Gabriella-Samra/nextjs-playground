import "./nav.css";
import Image from "next/image";

export default function Nav() {
	return (
		<div className="navBar">
			<div className="mainBar">
				<div className="links">
					<ul>
						<li>Link 1</li>
						<li>Link 2</li>
						<li>Link 3</li>
						<li>Link 4</li>
						<li>Link 5</li>
					</ul>
				</div>
				<div className="signUp">
					<p>Sign Up to our Newsletter</p>
				</div>
			</div>
		</div>
	)
}