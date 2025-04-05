import { useState } from 'react';

const BackgroundColorPicker = () => {
    const colors: string[] = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ];

    const [selectedBackgroundColor, setSelectedBackgroundColor] =
        useState<string>('');

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedBackgroundColor(ev.target.value);
    };

    return (
        <div>
            <div>Select a background color:</div>

            <form>
                {colors.map((color) => (
                    <div key={color}>
                        <label>
                            <input
                                type='radio'
                                name='backgroundColorPicker'
                                value={color}
                                onChange={handleChange}
                            />
                            {color}
                        </label>
                    </div>
                ))}
            </form>
            <div>selectedBackgroundColor: {selectedBackgroundColor}</div>
        </div>
    );
};

export default BackgroundColorPicker;
