import React from 'react';
import { Title } from '../Title';

type Popup = {
  handleCloseTableConfirm: (event: React.MouseEvent<HTMLElement>) => void;
};

export const BuyTableConfirmationModal = ({
  handleCloseTableConfirm,
}: Popup) => {
  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto overflow-x-hidden text-primary">
        <div className="border-4 border-primary bg-primary pl-9 pr-20">
          <div>
            <Title>Order confirmation</Title>
          </div>
          <div className="ml-9 mt-9">
            <button onClick={handleCloseTableConfirm}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-10 bg-primary/50"></div>
    </>
  );
};
