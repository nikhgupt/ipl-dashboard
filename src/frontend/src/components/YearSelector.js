import { React } from 'react';

export const YearSelector = () => {

    let years = [];
    const startYear = process.env.REACT_APP_Data_START_YEAR;
    const endYear = process.env.REACT_APP_Data_END_YEAR;

    for (let i = startYear; i <= endYear; i++){
        years.push(i);
    }

    return (
        years.map(year => <h4>Test</h4>)
    )

}