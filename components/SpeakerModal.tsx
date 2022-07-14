import { useEffect } from 'react'; 
import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';


interface SkrModal{
    speaker: any,
    toggleVisibility: any,
    show: Boolean
}

const SpeakerModal = ({ speaker, toggleVisibility, show }: SkrModal) => (
    <ModalContainer display={show} hide={toggleVisibility}>
      <article className="modal-article">
        <ModalContent modalInfo={speaker} />
      </article>
    </ModalContainer>
  );
  
  export default SpeakerModal;