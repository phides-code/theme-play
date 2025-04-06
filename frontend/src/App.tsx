/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import './App.scss';
import ColorPicker from './ColorPicker';
import Preview from './Preview';
import { isThemeData, updateDomWithColors } from './utils';
import ThemeButtons from './ThemeButtons';

const App = () => {
    useEffect(() => {
        const applyTheme = async () => {
            try {
                const fetchedData = await fetch('/api/theme');
                const themeData = await fetchedData.json();

                console.log('got themeData:');
                console.log(themeData);

                if (!isThemeData(themeData)) {
                    throw new Error('Got invalid themeData');
                }

                // apply current theme setting
                updateDomWithColors(
                    'background',
                    'main',
                    themeData.currentTheme.backgroundColor
                );

                updateDomWithColors(
                    'foreground',
                    'main',
                    themeData.currentTheme.foregroundColor
                );

                // apply current draft setting
                updateDomWithColors(
                    'background',
                    'preview',
                    themeData.currentTheme.backgroundColor
                );
                updateDomWithColors(
                    'foreground',
                    'preview',
                    themeData.currentTheme.foregroundColor
                );
            } catch (error: any) {
                window.alert('Something went wrong - please check logs');
                console.log(error.message);
            }
        };

        applyTheme();
    }, []);

    return (
        <div>
            <ColorPicker />
            <ThemeButtons />
            <Preview />
        </div>
    );
};

export default App;
