import {
  Avatar,
  Button,
  Divider,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import { usePostThread } from '../hooks/PostThreadHook';
import { IoImageOutline } from 'react-icons/io5';

export default function FormThreadFeature() {
  const { handleChange, handlePost, isOpen, onOpen, onClose, user, setImage, textareaRef } =
    usePostThread();

  return (
    <>
      <Grid
        templateRows={'repeat(1, 1fr)'}
        templateColumns={'repeat(8, 1fr)'}
        px={5}
        py={3}
        bgColor={'blackAlpha.300'}
      >
        <GridItem rowSpan={3} colSpan={1} display={'flex'} justifyContent={'center'}>
          <Avatar size="md" name={user?.full_name} src={user?.profile_picture} />
        </GridItem>

        <GridItem colSpan={7} display={'flex'}>
          <Textarea
            color="white"
            placeholder="What is happening?!"
            onChange={handleChange}
            border={'none'}
            p={3}
            ref={textareaRef}
            fontSize={'lg'}
            minHeight={'50px'}
          />
        </GridItem>

        <GridItem colSpan={7} my={2}>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }} />
        </GridItem>

        <GridItem
          colSpan={5}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'start'}
          mx={5}
        >
          <IoImageOutline size={25} color="rgb(29, 155, 240)" cursor="pointer" onClick={onOpen} />
        </GridItem>

        <GridItem colSpan={2} display={'flex'} alignItems={'center'} justifyContent={'end'}>
          <Button
            bgColor={'blue.500'}
            color={'white'}
            _hover={{ bgColor: 'white', color: 'blue.500' }}
            size={'sm'}
            px={5}
            rounded={'full'}
            onClick={() => {
              handlePost();
            }}
          >
            Post
          </Button>
        </GridItem>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              marginLeft={2}
              variant={'unstyled'}
              type="file"
              name="image"
              onChange={(e) => {
                if (e.target?.files) {
                  setImage(e.target?.files[0]);
                } else {
                  setImage(null);
                }
              }}
            />
          </ModalBody>
          <ModalFooter gap={3}></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
