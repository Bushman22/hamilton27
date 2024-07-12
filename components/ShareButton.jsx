import { CiShare2 } from "react-icons/ci";
import { FiCopy } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input } from "@nextui-org/react";

const ShareButton = ({ url }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const copyUrlToClipboard = () => {
        navigator.clipboard.writeText(url);
        onClose();
    };

    const shareOnSocialMedia = (platform) => {
        let shareUrl = "";
        switch (platform) {
            case "whatsapp":
                shareUrl = `whatsapp://send?text=${encodeURIComponent(
                    `Check out this room: ${url}`
                )}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    url
                )}`;
                break;
            case "instagram":
                shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(
                    url
                )}`;
                break;
            // Add more cases for other platforms as needed
            default:
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, "_blank");
            onClose();
        }
    };

    return (
        <>
            <Button
                variant="bordered"
                className="border-black"
                onPress={onOpen}
                startContent={<CiShare2 className="w-6 h-6" />}
            >
                Share
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} placement="center" size="lg">
                <ModalContent>
                    <>
                        <ModalHeader>
                            <h1 className="text-lg font-bold">Share</h1>
                        </ModalHeader>
                        <ModalBody>
                            <div className="pb-5">
                                <div className="flex items-center gap-2 justify-between">
                                    <Input
                                        className=""
                                        value={url}
                                        readOnly
                                    />
                                    <Button
                                        isIconOnly color="default" aria-label="Like"
                                        onPress={copyUrlToClipboard}
                                    >
                                        <FiCopy className="w-5 h-5" />
                                    </Button>
                                </div>
                                <div className="flex flex-col gap-4 mt-4 items-start">
                                    <Button
                                        variant="icon"
                                        className=""
                                        onPress={() => shareOnSocialMedia("whatsapp")}
                                    >
                                        <FaWhatsapp className="text-green-500 w-8 h-8" />
                                        WhatsApp
                                    </Button>
                                    <Button
                                        variant="icon"
                                        className=""
                                        onPress={() => shareOnSocialMedia("facebook")}
                                    >
                                        <FaFacebook className="text-blue-500 w-8 h-8"/>
                                        Facebook
                                    </Button>
                                    <Button
                                        variant="icon"
                                        className=""
                                        onPress={() => shareOnSocialMedia("instagram")}
                                    >
                                        <FaInstagram className="text-pink-500 w-8 h-8"/>
                                        Instagram
                                    </Button>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ShareButton;
