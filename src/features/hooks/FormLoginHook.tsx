import { UserLoginType } from '@/Types/UserType';
import { useState, ChangeEvent } from 'react';
import { API } from '@/libs/API';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AUTH_LOGIN } from '@/store/RootReducer';
import Swal from 'sweetalert2';

export function FormLoginHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState<UserLoginType>({
    username: '',
    password: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    try {
      const response = await API.post('/login', form);

      if (response.status === 200) {
        // Jika responsenya berhasil (status 200 OK), Anda dapat melakukan tindakan yang sesuai
        dispatch(AUTH_LOGIN(response?.data));
        navigate('/');
      } else if (response.status === 40) {
        // Jika responsenya adalah "Unauthorized" (status 401), token mungkin hilang atau tidak valid
        // Lakukan sesuatu di sini, misalnya, tampilkan pesan kesalahan
        console.log('Unauthorized: Missing or invalid token');
      } else {
        // Tindakan lain yang sesuai untuk kode tanggapan HTTP lainnya
        console.log('HTTP Status Code:', response.status);
      }
    } catch (error) {
      // Menangani kesalahan jaringan atau kesalahan lainnya
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username or password is wrong!',
      });
      console.log('Error:', error);
    }
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin();
  };

  return { form, handleChange, handleLogin, onSubmit };
}
