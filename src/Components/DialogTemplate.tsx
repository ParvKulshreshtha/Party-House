import React, { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import "./dialog.css"; // Ensure you have this file set up with appropriate styles

const DialogTemplate: FC<{ children: React.ReactNode, trigger: React.ReactNode, open:boolean }> = ({ children, trigger,open }) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          {children}
          <Dialog.Close>
            
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogTemplate;
