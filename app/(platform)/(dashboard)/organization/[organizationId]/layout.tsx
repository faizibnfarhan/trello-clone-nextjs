import React from 'react'
import OrgControl from './_components/org-control'


const OrgIdLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
   return(
    <>
    
        <OrgControl/>
        {children}
    
    </>
   )
}

export default OrgIdLayout