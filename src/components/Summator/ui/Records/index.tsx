import * as React from "react";

import style from "./index.module.scss";

export type PropsRecord = {
    date: Date;
    amount: string;
    description?: string;
};

type PropsRecordsList = {
    records: PropsRecord[];
};

type PropsTableItem = {
    item: PropsRecord;
};

const Record = ({ item }: PropsTableItem) => {
    return (
        <tr>
            <td>{item.date.toLocaleDateString()}</td>
            <td>{item.amount}</td>
            <td>{item.description}</td>
        </tr>
    );
};

const Records = ({ records }: PropsRecordsList) => {
    return (
        <table className={style.records}>
            <thead className={style.records__header}>
                <tr>
                    <th className={style.records__date}>Date</th>
                    <th className={style.records__amount}>Sum</th>
                    <th className={style.records__details}>Details</th>
                </tr>
            </thead>
            <tbody>
                {records.map((item, index) => (
                    <Record key={index} item={item} />
                ))}
            </tbody>
        </table>
    );
};

export default Records;
