import Nav from "@/components/nav/Nav";
import "./bar.css";
import Form from "@/components/form/Form";

export default function Page() {
	return (
		<div>
			<Nav />
			<div className="bar">Bar</div>
			<Form />
		</div>
	);
}