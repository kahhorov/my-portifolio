function WhatDo({ icon, descrip, text, styles }) {
  return (
    <div className={styles + " cursor-pointer"}>
      <h2 className="flex items-center gap-5 text-4xl text-blue-400 tracking-[-0.12px] mb-3">
        {icon} <span className="text-lg text-text-color">{descrip}</span>
      </h2>
      <p>{text}</p>
    </div>
  );
}

export default WhatDo;
