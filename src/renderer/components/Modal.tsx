import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { useState, useEffect } from "react";

export function MessageModal() {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    // listen to the 'message' channel
    window.electron.ipcRenderer.on('message', (arg: any) => {
      setOpen(true)
      setMessage(arg)
    });
  }, [])

  return (
    <>
      <Modal isOpen={open} closeButton={<></>}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Notification</ModalHeader>
          <ModalBody>
            <span>{message}</span>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
