import {OrganizationList} from '@clerk/nextjs'


const SelectOrg = () => {
  return (
    <div>
        <OrganizationList 
        hidePersonal 
        afterSelectOrganizationUrl={"/organization/:id"} 
        afterCreateOrganizationUrl={"/organization/:id"}
        />
    </div>
  )
}

export default SelectOrg