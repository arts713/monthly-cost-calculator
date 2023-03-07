import * as React from 'react';

import style from './index.module.scss';
import Form from './ui/OperationForm';
import Records, { PropsRecord } from './ui/Records';

const mock = [
  {date: new Date(), amount: '100', description: ''},
  {date: new Date(), amount: '1000000', description: '12312'},
  {date: new Date(), amount: '1000000', description: "Verrry long sdafgljsdf asdghla;s asdfj;lasdj  asdj;fgas asdfja;sl asd ahjws;glh assd jkhlgalskd text"},
  {date: new Date(), amount: '1000000', description: '12312'},
]

const Summator = () => {
  const [records, setRecords] = React.useState<PropsRecord[]>(mock);

  const addRecord = (record: PropsRecord) => {
    setRecords([...records, record]);
  }
  const amount = records.reduce((accum, item) => {
    return accum += Number(item.amount);
  }, 1);

  return (
    <div className={style.summator}>
      <div className={style.summator__form}>
        <Form amount={amount} addRecord={addRecord} />
      </div>
      <div className={style.summator__records}>
        <Records records={records} />
      </div>
    </div>
  );
}

export default Summator;
