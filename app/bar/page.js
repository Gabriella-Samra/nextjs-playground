import Form from "../_components/form/Form";
import Nav from "../_components/nav/Nav";
import "./bar.css";

export default function Page() {
	return (
		<div>
			<Nav />
			<div className="bar">Bar</div>
			<Form />
		</div>
	);
}