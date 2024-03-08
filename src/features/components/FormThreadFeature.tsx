/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Box, Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, VStack } from '@chakra-ui/react'
import { usePostThread } from '../hooks/PostThreadHook'
import { IoMdImages } from "react-icons/io";


export default function FormThreadFeature() {
    const { handleChange, handlePost, isOpen, onOpen, onClose, user, setImage } = usePostThread();


    return (
        <>
            <HStack
            // mt={5}
            // mb={50}
            // paddingBottom={5}
            // justify="space-between"
            // borderBottom={"1px solid black"}
            // height={"100px"}
            // border={"1px solid red"}
            >
                <VStack
                    borderY={"1px solid grey"}
                    // borderRadius={"10px"}
                    px={10}
                    py={5}
                    // mt={5}
                    w={"full"}
                // align={"start"}
                // border={"1px solid red"}
                >
                    <HStack justify={"space-between"} w={"full"}>
                        <Stack>
                            <Avatar size="lg" mr={5} name={user?.full_name} src={user?.profile_picture} />
                        </Stack>
                        <Stack>
                            <Input
                                variant="unstyled"
                                color="whiteAlpha.400"
                                placeholder="What is happening?!"
                                _focus={{ color: 'white' }}
                                name="content"
                                onChange={handleChange}
                                fontSize={"lg"}
                            // mt={5}   
                            />
                        </Stack>
                        <Stack>
                            <IoMdImages size={40} color="white" cursor="pointer" onClick={onOpen} />
                        </Stack>
                    </HStack>

                    <HStack w={"100%"} justify={"end"} ml={5}>
                        <Button colorScheme="messenger" size="xs" px={5} py={0} rounded="full" onClick={() => { handlePost() }}>
                            Post
                        </Button>
                    </HStack>
                </VStack>
            </HStack>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Upload Image</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            marginLeft={2}
                            variant={"unstyled"}
                            type="file"
                            name="image"
                            onChange={(e) => {
                                if (e.target?.files) {
                                    setImage(e.target?.files[0])
                                } else {
                                    setImage(null)
                                }
                            }}
                        />
                    </ModalBody>
                    <ModalFooter gap={3}>
                        {/* <Button colorScheme='green' onClick={handlePost}>Post</Button>
                        <Button colorScheme='orange' onClick={onClose}>Close</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}