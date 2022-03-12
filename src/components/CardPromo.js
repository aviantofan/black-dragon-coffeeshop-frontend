export default function CardPromo ({ picture, children, background }) {
  return (
    <div className={`card bg-${background}`}>
    <div className='d-flex align-items-center p-3'>
      <img src={picture} alt='promo image' />
      <div>
        {children}
      </div>
    </div>
  </div>
  );
}
