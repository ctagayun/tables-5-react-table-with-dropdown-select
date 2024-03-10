/*
  Task: 
    Enable users to select a row in the table by either clicking 
    the row or clicking a checkbox.
*/
import * as React from 'react';
import './App.css'
import { useTheme } from '@table-library/react-table-library/theme';



//Import stuff from React Table Library
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,

} from '@table-library/react-table-library/table';

const list = [
  {
    id: '1',
    name: 'VSCode',
    deadline: new Date(2020, 1, 17),
    type: 'SETUP',
    isComplete: true,
  },
  {
    id: '2',
    name: 'JavaScript',
    deadline: new Date(2020, 2, 28),
    type: 'LEARN',
    isComplete: true,
  },
  {
    id: '3',
    name: 'React',
    deadline: new Date(2020, 3, 8),
    type: 'LEARN',
    isComplete: false,
  }
];

const THEME = {
  BaseRow: `
    font-size: 14px;
  `,
  HeaderRow: `
    background-color: #eaf5fd;
  `,
  Row: `
    &:nth-child(odd) {
      background-color: #d2e9fb;
    }

    &:nth-child(even) {
      background-color: #eaf5fd;
    }
  `,
};
const App = () => {
  //list is renamed to "nodes". Nodes is a property of data
  //Nodes are the items in our list. In this example
  //"data" is prop to the Table component.
  const data = { nodes: list }; 

  //Using theme
  const theme = useTheme(THEME);

  /*Table component accepts {data} object as prop with
      "nodes property". Theme is another prop.
  */ 
  return (
      <Table data={data} theme={theme}> 
        {(tableList) => (
          <> 
            <Header>
              <HeaderRow>                      
                <HeaderCell>Task</HeaderCell>
                <HeaderCell>Deadline</HeaderCell>
                <HeaderCell>Type</HeaderCell>
                <HeaderCell>Complete</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                    <Cell>{item.name}</Cell>
                    <Cell>
                      {item.deadline.toLocaleDateString('en-US',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          }
                        )}
                    </Cell>
                    <Cell>{item.type}</Cell>
                    <Cell> 
                      {item.isComplete.toString()} 
                    </Cell>
                </Row>

              ))}
          </Body>
       </> //EOF Fragment
      )}

    </Table>  );
};


export default App
