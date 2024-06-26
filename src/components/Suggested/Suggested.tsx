import { Card, CardBody, CardHeader, Heading, Stack } from '@chakra-ui/react';
import SuggestedFeature from '@/features/components/SuggestedFeature';
import { useGetUsers } from '@/features/hooks/GetUsersHook';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/type/RootState';

interface IUser {
  id: number;
  username: string;
  full_name: string;
  profile_picture: string;
}

export default function SuggestedComponent() {
  const { GetUsers, isLoading } = useGetUsers();
  const signInUser = useSelector((state: RootState) => state?.auth);

  // Filter user yang ditampilkan pada card suggest hanya 5 user saja kecuali yang sedang login
  const List = GetUsers?.filter((user: IUser) => user.id !== signInUser?.id).slice(0, 5);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Card bg="whiteAlpha.100" rounded={'2xl'}>
      <CardHeader>
        <Heading color={'white'} size={'xs'} fontWeight={'medium'}>
          Suggested for you
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack gap={5}>
          {List.map((user: IUser) => (
            <SuggestedFeature
              key={user.id}
              id={user.id}
              username={user.username}
              full_name={user.full_name}
              profile_picture={user.profile_picture}
            />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}
