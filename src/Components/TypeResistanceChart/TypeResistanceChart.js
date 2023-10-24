import React, { useState, useEffect } from "react";
import './TypeResistanceChart.css';
import axios from 'axios';

function TypeResistanceChart({ type = "" }) {
    const [resistance, setResistance] = useState({
        double_damage_to: [],
        double_damage_from: [],
        half_damage_to: [],
        half_damage_from: [],
        no_damage_to: [],
        no_damage_from: [],
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/type/' + type);
                const resistanceData = response.data.damage_relations;
                setResistance(resistanceData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [type]);

    return (
        <div className="center-container-resistance">
            <h2>Type Resistance Chart for {type}</h2>
            <table>
                <thead>
                <tr>
                    <th>Double Damage To</th>
                    <th>Double Damage From</th>
                    <th>Half Damage To</th>
                    <th>Half Damage From</th>
                    <th>No Damage To</th>
                    <th>No Damage From</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{resistance.double_damage_to.length > 0 ? resistance.double_damage_to.map((item) => item.name).join(', ') : "None"}</td>
                    <td>{resistance.double_damage_from.length > 0 ? resistance.double_damage_from.map((item) => item.name).join(', ') : "None"}</td>
                    <td>{resistance.half_damage_to.length > 0 ? resistance.half_damage_to.map((item) => item.name).join(', ') : "None"}</td>
                    <td>{resistance.half_damage_from.length > 0 ? resistance.half_damage_from.map((item) => item.name).join(', ') : "None"}</td>
                    <td>{resistance.no_damage_to.length > 0 ? resistance.no_damage_to.map((item) => item.name).join(', ') : "None"}</td>
                    <td>{resistance.no_damage_from.length > 0 ? resistance.no_damage_from.map((item) => item.name).join(', ') : "None"}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TypeResistanceChart;


