import styled from 'styled-components'
import Thead from './Thead'
import Tbody from './Tbody'

import { useContext } from 'react'
import TableContext from '../../context/table-context'



const StyledTable = styled.table`
  width: 100%;
`


const Table = () => {
  const { tableData, tableHeaders } = useContext(TableContext)  
  return (
    <StyledTable>
      <Thead columns={tableHeaders} />
      <Tbody data={tableData} />
    </StyledTable>
  )
}

export default Table