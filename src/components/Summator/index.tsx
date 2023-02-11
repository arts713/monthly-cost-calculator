import * as React from 'react';

import style from './index.module.css';

type PropsRecord = {
  amount: string;
  comment?: string;
}

type PropsRecordsList = {
  items: PropsRecord[];
}

const List = ({items}: PropsRecordsList) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <div>{item.amount}</div>
            <div>{item.comment}</div>
          </li>
        );
      })}
    </ul>
  );
}

const Summator = () => {
  const [records, setRecords] = React.useState<PropsRecord[]>([]);
  const refInputAmount = React.useRef<HTMLInputElement | null>(null);  
  const refInputComment = React.useRef<HTMLTextAreaElement | null>(null);  

  const addOperation = () => {
    const amount = refInputAmount.current?.value;
    const comment = refInputComment.current?.value;

    if (amount) {
      const record: PropsRecord = {
        amount,
        comment,
      };

      setRecords([...records, record]);
    }

    const clearInputs = () => {
      if(refInputAmount && refInputAmount.current) {
        refInputAmount.current.value = '';
      }
      if(refInputComment && refInputComment.current) {
        refInputComment.current.value = '';
      }
    }

    clearInputs();
  }

  const amount = records.reduce((accum, item) => {
    return accum += Number(item.amount);
  }, 0);

  return (
    <div className={style.summator}>
      <div className={style.summator__total}>Total amount: {amount}</div>
      <div className={style.summator__inputs}>
        <input className={style.summator__input} ref={refInputAmount} />
        <textarea className={style.summator__input} ref={refInputComment} />
      </div>
      <button className={style.summator__button} onClick={addOperation}>Add</button>
      <List items={records} />
    </div>
  );
}

export default Summator;

