import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StateExample } from './hooks/use-state'
import { UseEffectExample } from './hooks/use-effect'
import { UseContextExample } from './hooks/use-context'
import { UseReducerExample } from './hooks/use-reducer'
import { UseRefExample } from './hooks/use-ref'
import { UseLayoutEffectExample } from './hooks/use-layout-effect'
import { UseMemoExample } from './hooks/use-memo'
import { UseCallbackExample } from './hooks/use-callback'

function App() {
 

  return (
    <>
    {/* <UseMemoExample a={5} b={10} /> */}
    <UseCallbackExample />
    </>
  )
}

export default App
