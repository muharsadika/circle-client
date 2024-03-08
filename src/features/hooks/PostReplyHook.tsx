import { FormReplyType } from "@/Types/ReplyType";
import { API } from "@/libs/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useRef, useState } from "react";
import { useParams } from "react-router-dom";
// import { RootState } from "@/store/type/RootState";
// import { useDisclosure, useToast } from "@chakra-ui/react";
// import { useSelector } from "react-redux";

export function usePostReply() {
	const {id} = useParams();
	const QueryClient = useQueryClient();
	// const toast = useToast();

	const [form, setForm] = useState<FormReplyType>({
		thread: Number(id),
		content: "",
	});

	const fileInputRef = useRef<HTMLInputElement>(null);
	function handleButtonClick() {
		fileInputRef.current?.click();
	}
	
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[e.target.name]: e.target.files ? e.target.files : e.target.value,
		});
	}
	
	const [image, setImage] = useState<File | null>(null);
	const { mutate: handlePost, isPending } = useMutation({
		mutationFn: async () => {
			const formData = new FormData();
			if (image) {
				formData.append("image", image);
			}
			formData.append("thread", String(form.thread));
			// formData.append("content", String(form.content));
			formData.append("content",  form.content);
			await API.post("/reply", formData);
		},
		onSuccess: () => {
			QueryClient.invalidateQueries({ queryKey: ["threadDetail"] });
			setForm({
				thread: Number(id),
				content: "",
			});
			setImage(null);
		},

	});

	// const { isOpen, onOpen, onClose } = useDisclosure();

	// const user = useSelector((state: RootState) => state.auth);

	return {
		form,
		handleButtonClick,
		handleChange,
		handlePost,
		fileInputRef,
		isPending,
		setImage,
		// isOpen,
		// onOpen,
		// onClose,
		// user,
		// toast
	};
}
