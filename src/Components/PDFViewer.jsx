import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const PDFViewer = (props) => {
    const pdfRef= useRef(null)
    useEffect(() => {
    pdfRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);
  return (
    <div className='pdfViewer' ref={pdfRef}>
         <iframe
  src={props.pdf}
  width="700px"
  height="600px"
//   width="500px"
//   height="350px"
  style={{ border: 'none' }}
  title="PDF Viewer"
/>
<div className="closeButton" onClick={props.close}>
<CloseIcon color='black'/>

</div>
    </div>
  )
}

export default PDFViewer