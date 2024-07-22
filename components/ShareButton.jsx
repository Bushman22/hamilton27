import { CiShare2 } from "react-icons/ci";
import { FiCopy } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Tooltip } from "@nextui-org/react";
import toast from "react-hot-toast";

const ShareButton = ({ url }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const copyUrlToClipboard = () => {
        navigator.clipboard.writeText(url);
        toast.success('Copied Url')
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
                shareUrl = `instagram://story-camera?background_image=${encodeURIComponent(url)}`;
                break;
            default:
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, "_blank");
            onClose();
        }
    };

    const shareOnMobile = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Check out this room',
                    url: url
                });
                onClose();
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            onOpen();
        }
    };

    return (
        <>
            <Button
                variant="bordered"
                className="border-black"
                onPress={shareOnMobile}
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
                                    <Tooltip content="Copy Url">
                                        <Button
                                            isIconOnly color="default" aria-label="Copy URL"
                                            onPress={copyUrlToClipboard}
                                        >
                                            <FiCopy className="w-5 h-5" />
                                        </Button>
                                    </Tooltip>
                                </div>
                                <div className="flex flex-col gap-4 mt-4 items-start">
                                    <Button
                                        variant="icon"
                                        className=""
                                        onPress={() => shareOnSocialMedia("whatsapp")}
                                        aria-label="Share on WhatsApp"
                                    >
                                        <FaWhatsapp className="text-green-500 w-8 h-8" />
                                        WhatsApp
                                    </Button>
                                    <Button
                                        variant="icon"
                                        className=""
                                        onPress={() => shareOnSocialMedia("facebook")}
                                        aria-label="Share on Facebook"
                                    >
                                        <FaFacebook className="text-blue-500 w-8 h-8" />
                                        Facebook
                                    </Button>
                                    <Button
                                        variant="icon"
                                        className=""
                                        onPress={() => shareOnSocialMedia("instagram")}
                                        aria-label="Share on Instagram"
                                    >
                                        <FaInstagram className="text-pink-500 w-8 h-8" />
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
