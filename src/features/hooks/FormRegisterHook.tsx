import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { UserRegisterType } from "@/Types/UserType";
import { API } from "@/libs/API";

export function FormRegisterHook() {
	const navigate = useNavigate();
	const [form, setForm] = useState<UserRegisterType>({
		full_name: "",
		email: "",
		username: "",
		password: "",
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	async function handleRegister() {
		try {
			const response = await API.post("/register", form);
			navigate("/login");
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return { form, handleChange, handleRegister };
}
