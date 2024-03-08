import { API } from "@/libs/API";
import { useQuery } from "@tanstack/react-query";
// import { FormThreadType } from "@/Types/ThreadType";
// import { UserUpdateType } from "@/Types/UserType";
// import { RootState } from "@/store/type/RootState";
// import { useDisclosure } from "@chakra-ui/react";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { ChangeEvent, useRef, useState } from "react";
// import { useSelector } from "react-redux";

export function useGetUser() {
	const {
		data: GetUser,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["User"],
		queryFn: async () => {
			const { data } = await API.get("/user");
			return data.data;
		},
	});
	return {
		GetUser,
		isLoading,
		error,
	};
}


// export function usePostUSer() {
// 	const [form, setForm] = useState<UserUpdateType>({
// 		full_name: "",
// 		username: "",
// 		bio: "",
// 		profile_picture: "",
// 	});

// 	const QueryClient = useQueryClient();
// 	const fileInputRef = useRef<HTMLInputElement>(null);

// 	function handleButtonClick() {
// 		fileInputRef.current?.click();
// 	}

// 	const [image, setImage] = useState<File | null>(null);

// 	function handleChange(e: ChangeEvent<HTMLInputElement>) {
// 		setForm({
// 			...form,
// 			[e.target.name]: e.target.files ? e.target.files : e.target.value,
// 		});
// 	}

// 	const { mutate: handleUpdate, isPending } = useMutation({
// 		mutationFn: async () => {
// 			const formData = new FormData();
// 			if (image) {
// 				formData.append("image", image);
// 			}
// 			formData.append("content", form.full_name);
// 			formData.append("username", form.username);
// 			formData.append("bio", form.bio);
// 			await API.post("/thread", formData);
// 		},
// 		onSuccess: () => {
// 			QueryClient.invalidateQueries({ queryKey: ["thread"] });
// 			setForm({
// 				full_name: "",
// 				username: "",
// 				bio: "",
// 				profile_picture: "",
// 			});
// 			setImage(null);
// 		},

// 	});

// 	const { isOpen, onOpen, onClose } = useDisclosure();
	
// 	const user = useSelector((state: RootState) => state.auth);
	
// 	// async function handlePost() {
// 	// 	// setIsPosting(true);
// 	// 	try {
// 	// 		console.log(form);
// 	// 		const formData = new FormData();
// 	// 		if (image) {
// 	// 			formData.append("image", image);
// 	// 		}
// 	// 		formData.append("content", form.content);
// 	// 		await API.post("/thread", formData);
// 	// 		// refetch();
// 	// 	} catch (error) {
// 	// 		console.log(error);
// 	// 	} finally {
// 	// 		// setIsPosting(false);
// 	// 		setForm({
// 	// 			content: "",
// 	// 		});
// 	// 		setImage(null);
// 	// 	}
// 	// }

// 	return {
// 		handleButtonClick,
// 		handleChange,
// 		handleUpdate,
// 		fileInputRef,
// 		isPending,
// 		setImage,
// 		isOpen,
// 		onOpen,
// 		onClose,
// 		user
// 	};
// }
