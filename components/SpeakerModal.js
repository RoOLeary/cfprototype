import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';

const SpeakerModal = ({ speaker, toggleVisibility, show }) => (
    <ModalContainer display={show} hide={toggleVisibility}>
      <article className="modal-article">
        <ModalContent modalInfo={speaker} />
      </article>
    </ModalContainer>
  );
  
  export default SpeakerModal;