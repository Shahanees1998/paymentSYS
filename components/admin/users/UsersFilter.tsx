import { Button } from 'primereact/button'
import MultiSelect from 'components/MultiSelect/MultiSelect'
import { InputNumber } from 'primereact/inputnumber'

import Switcher from '../utility/Switcher'
import { redirect } from 'next/navigation'

const UsersFilter = (): JSX.Element => {
  const handleSearch = async (e: FormData): Promise<void> => {
    'use server'
    console.log(e)
    redirect('/admin')
  }
  const genderOptions = [{
    label: 'Male',
    value: 'Male'
  },
  {
    label: 'Female',
    value: 'Female'
  }]

  const frequencyOptions = [{
    label: 'Weely',
    value: 'Weely'
  },
  {
    label: 'Monthly',
    value: 'Monthly'
  }]

  const availabilityOptions = [{
    label: 'Morning',
    value: 'Morning'
  },
  {
    label: 'Evening',
    value: 'Evening'
  }]

  return (
    <div className="rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <form action={handleSearch}>
            <div className="flex">
                <div className='flex-auto mr-5'>
                    <input
                        type="text"
                        placeholder="Search by id, name, email or location..."
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    <div className='flex flex-wrap my-2'>
                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            <MultiSelect name="gender" options={genderOptions} placeholder='Gender' className='w-full' />
                        </div>
                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            <MultiSelect name="frequency" options={frequencyOptions} placeholder='Frequency' className='w-full'/>
                        </div>

                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            <MultiSelect name="availability" options={availabilityOptions} placeholder='Availability' className='w-full'/>
                        </div>

                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            <InputNumber name='budgetMin' placeholder='Budget (Min)' inputClassName='w-full' className='w-full' />
                        </div>
                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            <InputNumber name='budgetMax' placeholder='Budget (Max)' inputClassName='w-full' className='w-full' />
                        </div>

                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            {/* <MultiSelect name="fields" placeholder='Fields' className='w-full' /> */}
                        </div>

                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            {/* <MultiSelect name="purpose" placeholder='Purpose' className='w-full' /> */}
                        </div>

                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            {/* <MultiSelect name="level" placeholder='Level' className='w-full' /> */}
                        </div>

                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            {/* <MultiSelect name="country" placeholder='Country' className='w-full' /> */}
                        </div>
                        <div className='w-1/3 xl:w-1/6 mr-5 mt-2'>
                            {/* <MultiSelect name="city" placeholder='City' className='w-full' /> */}
                        </div>
                    </div>

                </div>
                <div className='align-right w-90'>
                    <div className='my-1' ><Switcher name='showStudents' label='Show Students' defaultState={true} id="students" /></div>
                    <div className='my-1' ><Switcher name='showTutors' label='Show Tutors' defaultState={true} id="tutors" /></div>
                    <div className='my-1' ><Switcher name='showCramSchools' label='Show Cram Schools' id="schools" /></div>
                    <div className='my-1 mt-5' ><Switcher name='showApprovalRequired' label='Show approval required' id="approval-required" defaultState={true} /></div>
                </div>

            </div>
            <div className={'grid justify-items-end mt-10'}>
            <Button>Search</Button>
            </div>
        </form>
    </div>
  )
}

export default UsersFilter
