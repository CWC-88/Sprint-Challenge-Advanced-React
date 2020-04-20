import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render , waitForDomChange  } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
// import "./App.css";

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


test('is name container shown ', async () => {
  const {baseElement} = render(<App/>)
  await waitForDomChange();
const cardName = baseElement.querySelector('.playnameactual')

expect(cardName).toBeInTheDocument() 
expect(cardName.textContent).toBeTruthy();

})

// test('are names red ', async () => {
//   const {baseElement} = render(<App/>)
//   await waitForDomChange();
// const Namecolor = baseElement.querySelector('.pnampad')

// expect(Namecolor).toBeInTheDocument() 

// expect(Namecolor).toHaveStyle({color: red})

// })


// test("namesred", async () => {
 

//     const { getByTestId } = render(<App />);
//     await waitForDomChange();
//     expect(getByTestId("itdo")).toHaveStyleRule("itdo",'red');

// });