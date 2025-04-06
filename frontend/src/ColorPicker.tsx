import { updateDomWithColors } from './utils';

const ColorPicker = () => {
    const colors: string[] = [
        'black',
        'white',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ];

    const handleBackgroundChange = (
        ev: React.ChangeEvent<HTMLInputElement>
    ) => {
        updateDomWithColors('background', 'preview', ev.target.value);
    };

    const handleForegroundChange = (
        ev: React.ChangeEvent<HTMLInputElement>
    ) => {
        updateDomWithColors('foreground', 'preview', ev.target.value);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 auto',
            }}
        >
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
                                    onChange={handleBackgroundChange}
                                />
                                {color}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
            <div>
                <div>Select a foreground color:</div>

                <form>
                    {colors.map((color) => (
                        <div key={color}>
                            <label>
                                <input
                                    type='radio'
                                    name='foregroundColorPicker'
                                    value={color}
                                    onChange={handleForegroundChange}
                                />
                                {color}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default ColorPicker;
