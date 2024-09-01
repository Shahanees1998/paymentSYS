'use client'
import { DataTable } from 'primereact/datatable'
import { SplitButton } from 'primereact/splitbutton'
import { Column } from 'primereact/column'
import { type User } from '@prisma/client'
import Image from 'next/image'

const UsersTable = ({ data }: { data: User[] }): JSX.Element => {
  const onPageChange = async (): Promise<void> => {
    console.log('page changed')
  }

  const rowEditTemplate = (user: User): JSX.Element => {
    const items = [
      {
        label: 'Delete',
        icon: 'pi pi-file',
        command: () => {
          console.log('Delete', user)
        }
      }
    ]
    return <>
      <SplitButton label="Edit" icon="pi pi-plus" model={items} />
    </>
  }

  const rowJoinedOn = (user: User): JSX.Element => {
    return <>{new Date(user.createdOn).toDateString()}</>
  }

  const rowstatusTemplate = (user: User): JSX.Element => {
    return <>{user.approved ? 'Approved' : 'Not Approved'}</>
  }

  const rowPictureTemplate = (user: User): JSX.Element => {
    return <Image src={user.image ?? '/images/user/user-01.png'} alt={user.name} className='rounded-full' width="50" height="50" />
  }

  return (
    <>
      <DataTable stripedRows value={data} tableStyle={{ minWidth: '50rem' }} lazy paginator first={2} rows={50} totalRecords={2} rowsPerPageOptions={[25, 50, 100]} onPage={onPageChange} >
          <Column body={rowPictureTemplate}></Column>
          <Column field="id" header="Id"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="email" header="Email"></Column>
          <Column header="JoinedOn" body={rowJoinedOn}></Column>
          <Column field="userType" header="Type"></Column>
          <Column header="Listing Status" body={rowstatusTemplate}></Column>
          <Column header="" body={rowEditTemplate}></Column>
      </DataTable>
    </>
  )
}

export default UsersTable
