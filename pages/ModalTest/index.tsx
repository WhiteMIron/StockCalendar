import ModalPortal from '@components/Modal/ModalPotal';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Modal from '@components/Modal/Modal';
import { Button } from '@pages/StockRecord/styles';

const ModalTest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleModal();
        }}
      >
        저장
      </Button>
      <ModalPortal show={modalOpen} onClose={handleModal}>
        <CSSTransition in={modalOpen} mountOnEnter unmountOnExit timeout={3000} classNames="modal">
          <Modal title={'입력한 내용으로 저장하시겠습니까?'}>
            {/* <BtnGroup justifyContent="flex-end">
              <Button
                type="button"
                width="25%"
                onClick={handleModal}
                bgColor="#fff"
                color="#00BB9D"
                marginRight="10px"
                isBorder={true}
              >
                취소
              </Button>

              <Button type="button" width="25%" onClick={handleModal} color="#fff" bgColor="#00BB9D">
                저장
              </Button>
            </BtnGroup> */}
          </Modal>
        </CSSTransition>
      </ModalPortal>
    </div>
  );
};

export default ModalTest;
