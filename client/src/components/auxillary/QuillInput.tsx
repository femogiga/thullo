import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import CrudButton from './CrudButton';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import quillEmoji from 'quill-emoji';

export const QuillInput = ({ value, onChange, onSave, onCancel }) => {
  // const [value, setValue] = useState('');
  const editOpen = useSelector((state) => state.visibility.editOpen);
  const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;
  Quill.register(
    {
      'formats/emoji': EmojiBlot,
      'modules/emoji-shortname': ShortNameEmoji,
      'modules/emoji-toolbar': ToolbarEmoji,
      'modules/emoji-textarea': TextAreaEmoji,
    },
    true
  );
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

  console.log(value);
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onChange}
        modules={quillModules}
      />

      <Stack
        direction={'row'}
        columnGap={'1rem'}
        sx={{ marginBlockStart: '1rem' }}>
        <CrudButton
          icon={''}
          text={'Save'}
          colours={{ bg: '#219653', color: 'white' }}
          onClick={onSave}
        />
        <CrudButton
          icon={''}
          text={'Cancel'}
          colours={{ bg: '', color: '#828282' }}
          onClick={onCancel}
        />
      </Stack>
    </div>
  );
};
