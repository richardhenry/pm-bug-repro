import { useState } from 'react'
import { EditorState } from 'prosemirror-state'
import { schema } from 'prosemirror-schema-basic'
import { ProseMirror, ProseMirrorDoc, reactKeys } from '@handlewithcare/react-prosemirror'
import 'prosemirror-view/style/prosemirror.css'

export default function PmBugRepro() {
  const [editorState, setEditorState] = useState(
    EditorState.create({
      schema,
      plugins: [reactKeys()],
    }),
  )

  const [elements, setElements] = useState(['editor', 'other'])

  return (
    <>
      <button type="button" onClick={() => setElements((v) => [...v].reverse())}>
        Toggle order
      </button>

      <ul>
        {elements.map((element) => (
          <li key={element}>
            {element === 'editor' ? (
              <ProseMirror
                state={editorState}
                dispatchTransaction={(tr) => {
                  setEditorState((s) => s.apply(tr))
                }}
              >
                <ProseMirrorDoc />
              </ProseMirror>
            ) : (
              <>This is just some text</>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
