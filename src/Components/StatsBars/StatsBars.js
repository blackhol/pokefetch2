import React from 'react';
import './StatsBars.css';

function StatsBars({stats}) {
    const hpValue = stats[0].base_stat;
    const attackValue = stats[1].base_stat;
    const defenseValue = stats[2].base_stat;
    const specialAttackValue = stats[3].base_stat;
    const specialDefenseValue = stats[4].base_stat;
    const speedvalue = stats[5].base_stat;

    const hpBarStyle = {
        width: `${(hpValue / 255) * 100}%`,
        backgroundColor: '#ff0001',
    };
    const attackBarStyle = {
        width: `${(attackValue / 255) * 100}%`,
        backgroundColor: '#ff9019',
    };
    const defenseBarStyle = {
        width: `${(defenseValue / 255) * 100}%`,
        backgroundColor: '#f7ff19',
    };
    const specialAttackBarStyle = {
        width: `${(specialAttackValue / 255) * 100}%`,
        backgroundColor: '#196aff',
    };
    const specialDefenseBarStyle = {
        width: `${(specialDefenseValue / 255) * 100}%`,
        backgroundColor: '#19ff28',
    };
    const speedBarStyle = {
        width: `${(speedvalue / 255) * 100}%`, // Adjust the maximum value if needed
        backgroundColor: '#d119ff', // Red color for the bar
    };


    return (
        <table className="stats-table">
            <tbody>
                <tr>
                    <th colSpan="2" rowSpan="2" className="stats-header">
                        <span className="stats-text">Stat</span>
                    </th>
                    <th colSpan="2" className="stats-header-col">Range</th>
                </tr>
                <tr>
                    <div>
                        <div>
                            <span className="baseHP">HP : {hpValue}</span>
                                <span>
                                    <div className="hp-bar" style={hpBarStyle}></div>
                                </span>
                        </div>
                        <div>
                            <span className="baseAttack">Attack : {attackValue}</span>
                                <span>
                                    <div className="hp-bar" style={attackBarStyle}></div>
                                </span>
                        </div>
                        <div>
                            <span className="baseDefense">Defense : {defenseValue}</span>
                                <span>
                                    <div className="hp-bar" style={defenseBarStyle}></div>
                                </span>
                        </div>
                        <div>
                            <span className="baseSPAttack">Special attack : {specialAttackValue}</span>
                                <span>
                                    <div className="hp-bar" style={specialAttackBarStyle}></div>
                                </span>
                        </div>
                        <div>
                            <span className="baseSPdefense">Special defense : {specialDefenseValue}</span>
                                <span>
                                    <div className="hp-bar" style={specialDefenseBarStyle}></div>
                                </span>
                        </div>
                        <div>
                            <span className="baseSpeed">speed : {speedvalue}</span>
                                <span>
                                    <div className="hp-bar" style={speedBarStyle}></div>
                                </span>
                        </div>
                    </div>
                </tr>
            </tbody>
        </table>
    );
}
export default StatsBars;