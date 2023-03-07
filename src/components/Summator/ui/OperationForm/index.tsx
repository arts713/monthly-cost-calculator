import * as React from "react";
import style from './index.module.scss';
import { PropsRecord } from "../Records";

type PropsOperationForm = {
    amount: number | 0;
    addRecord: (record: PropsRecord) => void;
}

const OperationForm = ({ amount, addRecord }: PropsOperationForm ) => {
    const refInputAmount = React.useRef<HTMLInputElement | null>(null);  
    const refInputComment = React.useRef<HTMLTextAreaElement | null>(null);  

    const addOperation = () => {
        const amount = refInputAmount.current?.value;
        const description = refInputComment.current?.value;
    
        if (amount) {
          const record: PropsRecord = {
            date: new Date(),
            amount,
            description,
          };
    
          // todo fix it
          addRecord(record);
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
    
    return (
        <div className={style.summatorForm}>
            <div className={style.summatorForm__total}>Total amount: {amount}</div>
            <div className={style.summatorForm__inputs}>
                <div className={style.summatorForm__input}>
                <label className={style.summatorForm__input__label}>
                    <div className={style.summatorForm__input__signature}>Amount</div>
                    <input className={style.summatorForm__input__field} ref={refInputAmount} />
                </label>
                </div>
                <div className={style.summatorForm__input}>
                <label className={style.summatorForm__input__label}>
                    <div className={style.summatorForm__input__signature}>Description</div>
                    <textarea className={style.summatorForm__input__field} ref={refInputComment} />
                </label>
                </div>
            </div>
            <div className={style.summatorForm__buttons}>
                <button className={style.summatorForm__button} onClick={addOperation}>Add</button>
            </div>
        </div>
    );
}

export default OperationForm;
