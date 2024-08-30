import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Upvote from './Upvote';

test('renders with correct initial state and toggles on click', () => {
    const onToggleMock = jest.fn();

    // Render the Upvote component with a button
    render(<Upvote isSelected={false} onToggle={onToggleMock} />);

    // Use getByRole to select the button
    const buttonElement = screen.getByRole('button');

    // Check that the button has the correct initial class
    expect(buttonElement).toHaveClass('default');

    // Check that the SVG inside the button has the correct initial fill color
    const svgElement = buttonElement.querySelector('svg');
    expect(svgElement).toHaveAttribute('fill', '#343A40');

    // Simulate a click on the button
    fireEvent.click(buttonElement);

    // Check if onToggle was called
    expect(onToggleMock).toHaveBeenCalledTimes(1);
});

test('renders with selected state and correct color', () => {
    // Render the Upvote component with isSelected = true
    render(<Upvote isSelected={true} onToggle={() => {}} />);

    // Use getByRole to select the button
    const buttonElement = screen.getByRole('button');

    // Check that the button has the correct selected class
    expect(buttonElement).toHaveClass('selected');

    // Check that the SVG inside the button has the correct fill color
    const svgElement = buttonElement.querySelector('svg');
    expect(svgElement).toHaveAttribute('fill', '#253CF2');
});
