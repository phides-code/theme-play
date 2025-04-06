const ThemeButtons = () => {
    const handleApply = async () => {};
    const handleSaveDraft = async () => {};
    const handleRevert = async () => {};

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
            }}
        >
            <button onClick={handleApply}>Apply</button>
            <button onClick={handleSaveDraft}>Save Draft</button>
            <button onClick={handleRevert}>Revert to previous</button>
        </div>
    );
};

export default ThemeButtons;
