import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {ChevronDown} from 'react-feather'

import styles from './FrequentlyAskedQuestions.module.css';

function FrequentlyAskedQuestions({ data }) {

  return (
  <Accordion.Root 
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
    >
    {data.map(d=>{
        return(
        <Accordion.Item className={styles.item} value={d.id} key={d.id}>
        <Accordion.Trigger className={styles.trigger}> 
            {d.question}
            <ChevronDown className={styles.AccordionChevron}/>
        </Accordion.Trigger>
        <Accordion.Content className={styles.content}>
            {d.answer}
        </Accordion.Content>
        </Accordion.Item>
        )
    })} 
  </Accordion.Root>
  );
}

export default FrequentlyAskedQuestions;