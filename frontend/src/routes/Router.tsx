import { Routes, Route, } from 'react-router-dom'
import { Form } from '../pages/Form/Form'

export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Form />} />
    </Routes>
  )
}
