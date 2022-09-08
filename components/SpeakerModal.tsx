import { useEffect } from 'react'; 
import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';
import { ISpeakerModal } from '../interfaces/ISpeaker'

const SpeakerModal = ({ speaker, toggleVisibility, show }: ISpeakerModal) => {
    return (
      <ModalContainer display={show} hide={toggleVisibility}>
        <article className="modal-article">
          <ModalContent modalInfo={speaker} />
        </article>
      </ModalContainer>
    );
};
  
  export default SpeakerModal;