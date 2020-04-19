import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render , waitForDomChange  } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('header showing up', async () => {
  const {baseElement} = render(<App/>)
const hsu = baseElement.querySelector('.headers')
expect(hsu).toBeInTheDocument() 
})


test('playernamesshow', async()=>{
  const {getByText} = render(<App/>);
  await waitForDomChange();
  const names = getByText(/Hello soccarettes!/i);
  expect(names).toBeInTheDocument();
})

test("doitbe", () => {
  const { queryAllByTestId } = render(<App />);

  queryAllByTestId(/itdo/i);
});

test('are the numbers there', async () => {
  const { queryAllByTestId } = render(<App />);
 queryAllByTestId(/numsfordays/i);

})

