import React from 'react'

const ColorSelector = ({selectedColor, onChange }) => {

    const colors = ["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "Rainbow"];
  
    return (
        <div className="color-selector">
            {colors.map(color => (
                <div key={color} className="color-option">
                <input
                    type="radio"
                    id={color}
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => onChange(color)}
                />
                <label htmlFor={color}>{color}</label>
                </div>
            ))}
        </div>
    )
}

export default ColorSelector