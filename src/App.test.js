/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);

  const button = screen.getByRole('button', {
    name: /current theme/i,
  });

  expect(button).toBeInTheDocument();
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);

  const button = screen.getByRole('button', {
    name: /current theme/i,
  });

  // initial theme
  expect(button).toHaveTextContent(/light/i);

  // fireEvent in its own test
  fireEvent.click(button);

  // theme after click
  expect(button).toHaveTextContent(/dark/i);
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);

  const button = screen.getByRole('button', {
    name: /current theme/i,
  });

  // initial styles (light theme)
  expect(document.body).toHaveStyle({
    backgroundColor: '#FFF',
    color: '#333',
  });

  // click to toggle theme
  fireEvent.click(button);

  // updated styles (dark theme)
  expect(document.body).toHaveStyle({
    backgroundColor: '#333',
    color: '#FFF',
  });
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);

  // content should NOT be in the document initially
  expect(
    screen.queryByText(/this content is hidden by default/i)
  ).not.toBeInTheDocument();

  // click toggle button to show content
  const toggleButton = screen.getByRole('button', {
    name: /show hidden content/i,
  });

  fireEvent.click(toggleButton);

  // content should now be visible
  expect(
    screen.getByText(/this content is hidden by default/i)
  ).toBeInTheDocument();

  // click toggle button to hide content
  fireEvent.click(toggleButton);

  // content should be hidden again
  expect(
    screen.queryByText(/this content is hidden by default/i)
  ).not.toBeInTheDocument();
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
