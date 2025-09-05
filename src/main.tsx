import React from 'react'
import { createRoot } from 'react-dom/client'
import PmBugRepro from './PmBugRepro'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <PmBugRepro />
  </React.StrictMode>,
)
