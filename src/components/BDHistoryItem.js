import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function BDHistoryItem ({ imgProduct, index, productName, price, deliveryStatus }) {
  const [showDelete, setShowDelete] = useState(false);

  const clicHandler = (e) => {
    const el = e.target;

    if (el.classList.contains('bd-history-item')) {
      setShowDelete(!showDelete);
    }
  };

  return (
    <div className='bd-history-item col-12 col-md-6 col-lg-4 position-relative' onClick={clicHandler}>
      <div style={{ cursor: 'pointer' }} className='bd-history-item card d-flex flex-row  p-3 p-xl-2 p-xxl-4'>
        <div className='img-product' style={{ backgroundImage: `url(${imgProduct})` }}></div>
        <div className='bd-history-item history-text ps-3'>
          <h4 className='bd-history-item' >{productName}</h4>
          <div className='bd-history-item'>IDR {price}</div>
          <div className='bd-history-item'>{Number(deliveryStatus) ? 'Delivered' : 'Not delivered' }</div>
        </div>
      </div>
      <div id={`number${index}`} className={`bd-history-item position-absolute delete-option d-${!showDelete ? 'none' : 'block'}`}>
        <button className='bd-history-item btn-delete bg-secondary'><FiTrash2/></button>
        <button className='bd-history-item btn-delete bg-primary ms-2 fw-bold'>x</button>
      </div>
    </div>
  );
}
