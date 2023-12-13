import { OrganizationSwitcher, auth } from '@clerk/nextjs'


const OrgPage = () => {
    const {userId, orgId} = auth();
  return (
    <div>
        Organization Page

    </div>
  )
}

export default OrgPage