import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import CrudButton from './CrudButton';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
export const QuillInput = () => {
  const [value, setValue] = useState('');
  const editOpen = useSelector((state) => state.visibility.editOpen);
  const quillModules = {
    'emoji-toolbar': true,
    'emoji-textarea': true,
    'emoji-shortname': true,
   
    toolbar: [
      [
        { header: [1, 2, 3, 4, 5, 6, false] },

        { size: ['small', false, 'large', 'huge'] },
      ],
      ['emoji'],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'color'],

      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
        { font: [] },
      ],
      ['link'],

      [{ color: [] }, { background: [] }],

      ['clean'],
    ],
    // 'emoji-toolbar': true,
    // 'emoji-textarea': true,
    // 'emoji-shortname': true,
  };
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={setValue}
        modules={quillModules}
      />
      {/* {editOpen && (
        <Stack
          direction={'row'}
          columnGap={'1rem'}
          sx={{ marginBlockEnd: '1rem' }}>
          <CrudButton
            icon={''}
            text={'Save'}
            colours={{ bg: '#219653', color: 'white' }}
            onClick={'handleSave'}
          />
          <CrudButton
            icon={''}
            text={'Cancel'}
            colours={{ bg: '', color: '#828282' }}
            onClick={'handleCancel'}
          />
        </Stack>
      )} */}
    </div>
  );
};
