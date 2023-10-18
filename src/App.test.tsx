import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { Home } from 'pages/home/Home'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

test('full app rendering/navigating', async () => {
  const wrapper = ({children}:{children:JSX.Element})=>(
    <Provider store={store}>
    {children}
  </Provider>
  )
  render(<Home />, {wrapper: wrapper})

  // verify page content for default route
  expect(screen.getByText(/Search/i)).toBeInTheDocument()
})
