/**
 * Table component that gets table data through the context of the page
 * it's contained in. Renders Thead and Tbody using context data.
 */

import styled from 'styled-components'
import Thead from './Thead'
import Tbody from './Tbody'

import { useContext } from 'react'
import TableContext from '../../context/table-context'

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 1.6rem;
  }
  margin-bottom: 3.2rem;
`

const Table = () => {
  const { tableData, tableHeaders, deleteItems, item } = useContext(TableContext)
  return (
    <StyledTable>
      <Thead columns={tableHeaders} />
      <Tbody data={tableData} deleteItems={deleteItems} item={item} />
    </StyledTable>
  )
}

export default Table
