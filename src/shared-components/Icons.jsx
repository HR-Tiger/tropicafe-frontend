import React from 'react';

export default function Icons({ icon, i }) {
  let style = icon === 'star' ? 'fas fa-star' : 'fas fa-dollar-sign';

  return (
    <>
      {i >= 1 && <i className={style}></i>}
      {i >= 2 && <i className={style}></i>}
      {i >= 3 && <i className={style}></i>}
      {i >= 4 && <i className={style}></i>}
      {i >= 5 && <i className={style}></i>}
    </>
  );
}
