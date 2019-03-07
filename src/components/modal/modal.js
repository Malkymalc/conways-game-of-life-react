import React from 'react';
import '../../styles/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = (props) => {

  return (
    <dialog open={props.modalState} onClick={props.modalCB}>

      <aside onClick={null}>

        <header>
          <h1>Conway's <em>Game of Life</em></h1>
          <FontAwesomeIcon
            className="modal_close"
            icon="faTimesCircle"
            onClick={props.modalCB}
          />
        </header>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, possimus, nisi! Assumenda, dicta voluptatem dolor? Corporis doloremque consectetur fuga eligendi harum, officia dignissimos debitis, quibusdam, ea voluptatum nesciunt! Nam, laborum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nihil sed, impedit velit quam veritatis voluptas et, optio deleniti necessitatibus reprehenderit dolores sapiente quas possimus! Odit a molestias dolore numquam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nihil sed, impedit velit quam veritatis voluptas et, optio deleniti necessitatibus reprehenderit dolores sapiente quas possimus! Odit a molestias dolore numquam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nihil sed, impedit velit quam veritatis voluptas et, optio deleniti necessitatibus reprehenderit dolores sapiente quas possimus! Odit a molestias dolore numquam.</p>
      </aside>

    </dialog>
  );
}

export default Modal;
