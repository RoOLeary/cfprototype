const ModalContainer = ({ display, hide, children }) => (display
  ? (
    <div className="c-modal spkrModal" id="modal-container" style={{ display: 'flex' }}>
      <div className="modal-background">
        <div className="modal" data-modal-step="1">
          <button
            className="c-modal__hide js-modalHide"
            title="Hide (Esc)"
            onClick={hide}
            onKeyDown={hide}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path fill="#f00" stroke="#000" strokeWidth="2" strokeMiterlimit="10" d="M31 17L17 31M17 17l14 14" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  )
  : null);

export default ModalContainer;
