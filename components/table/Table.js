import styled from 'styled-components'
import Thead from './Thead'
import Tbody from './Tbody'

import { useContext } from 'react'
import BooksTableContext from '../../context/books-table-context'



const StyledTable = styled.table`

`


const Table = () => {
  const { tableData } = useContext(BooksTableContext)
  return (
    <StyledTable>
      <Thead columns={tableData.headers} />
      <Tbody data={tableData.data} />
    </StyledTable>
  )
}

export default Table