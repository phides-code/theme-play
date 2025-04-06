const Preview = () => {
    return (
        <div
            style={{
                margin: '0.2rem',
                padding: '0.2rem',
            }}
        >
            <div>Preview:</div>
            <div
                className='previewArea'
                style={{
                    border: '1px solid black',
                    padding: '2rem',
                }}
            >
                Hello world!
            </div>
        </div>
    );
};

export default Preview;
