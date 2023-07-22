import ModalPortal from '@components/Modal/ModalPotal';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Modal from '@components/Modal/Modal';
import { BtnGroup, Button } from './style';
import BackDrop from '@components/Modal/BackDrop';

const ModalTest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Button
        onClick={(e) => {
          handleModal();
          // (document.activeElement as HTMLElement).blur();
          // e.stopPropagation();
        }}
      >
        저장
      </Button>

      <ModalPortal onClose={handleModal}>
        <CSSTransition in={modalOpen} mountOnEnter unmountOnExit timeout={300} classNames="backdrop">
          <BackDrop onClose={() => setModalOpen(false)} />
        </CSSTransition>

        <CSSTransition in={modalOpen} mountOnEnter unmountOnExit timeout={300} classNames="modal">
          <Modal title={'입력한 내용으로 저장하시겠습니까?'}>
            <BtnGroup justifyContent="center">
              <Button type="button" width="25%" onClick={() => setModalOpen(false)} color="#00BB9D" marginRight="10px">
                취소
              </Button>

              <Button type="button" width="25%" onClick={() => setModalOpen(false)} color="#00BB9D">
                저장
              </Button>
            </BtnGroup>
          </Modal>
        </CSSTransition>
      </ModalPortal>
    </div>
  );
};

export default ModalTest;
