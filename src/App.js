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
            <div className="row test">
                {tiles.map((tile, index) => (
                    <div
                        className={tile.className}
                        key={generateKey(tile, index)}
                    >
                        <div className="row innerTile">
                            <div className="col">
                                <span>{tile.label}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const rowKeys = ["row1", "row2", "row3"];

    return (
        <div className="h-100">
            {/*{renderHeader()}*/}
            <div className="App d-flex">
                <main className="container align-self-center">
                    {rowKeys.map(row => renderTileRow(tiles[row]))}
                </main>
            </div>
        </div>
    );
};

export default App;
