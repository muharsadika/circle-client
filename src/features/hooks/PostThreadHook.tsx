import { FormThreadType } from '@/Types/ThreadType';
import { API } from '@/libs/API';
import { RootState } from '@/store/type/RootState';
import { useDisclosure } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export function usePostThread() {
  const [form, setForm] = useState<FormThreadType>({
    content: '',
  });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const QueryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement & HTMLTextAreaElement;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const { mutate: handlePost, isPending } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      formData.append('content', form.content);
      await API.post('/thread', formData);
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['thread'] });
      setForm({
        content: '',
      });
      setImage(null);
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = useSelector((state: RootState) => state.auth);

  return {
    handleButtonClick,
    handleChange,
    handlePost,
    fileInputRef,
    isPending,
    setImage,
    isOpen,
    onOpen,
    onClose,
    user,
    textareaRef,
    form,
  };
}
