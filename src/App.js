import React from 'react';
import './App.css';
import { tiles } from './util/tiles';

const App = () => {
    const renderHeader = () => (
        <header className="header">
            <h3>
                Adam Brown
            </h3>
            <p>Javascript Developer</p>
        </header>
    );

    const generateKey = (tile, index) => `${tile.label.split(" ").join("-")}-${index}`;

    const renderTileRow = (tiles) => {
        return (
            <div className="row">
                {tiles.map((tile, index) => (
                    <div
                        className={tile.className}
                        key={generateKey(tile, index)}
                    >
                        <span>{tile.label}</span>
                    </div>
                ))}
            </div>
        );
    };

    const rowKeys = ["row1", "row2", "row3"];

    return (
        <div className="App">
            {renderHeader()}
            <main className="main-container container p-3">
                {rowKeys.map(row => renderTileRow(tiles[row]))}
            </main>
        </div>
    );
};

export default App;
