import { useState } from 'react'
import { ListOfPatients, RequestDetails } from 'src/templates'

export const RequestDetailsPage = () => {
  const [page, setPage] = useState<number>(1)
  return (
    <>
      {page === 1 ? (
        <RequestDetails setPage={setPage} />
      ) : (
        page === 2 && <ListOfPatients setPage={setPage} />
      )}
    </>
  )
}
