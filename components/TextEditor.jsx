import dynamic from 'next/dynamic';
import { useState } from 'react';

import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

export default function TextEditor({value, onChange}) {
 
  return (
    <div>
         <QuillNoSSRWrapper className='quill' modules={modules} theme="snow" value={value} onChange={onChange} />

         <style jsx>{`
   
      
      `}</style>
         </div>
  )
}