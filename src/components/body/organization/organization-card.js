import React from 'react'

function OrganizationCard() {
    return <div className='organization-card'>
        <img src={item.CompanyLogo} className='organiztion-logo'/>
        <div className='organization-info'>
            <label className='company-name'>{item.Organization}</label>
            <div className="organization-dates">
                <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
            </div>
            <div className="work-desc">
                <p>{item.work}</p>
            </div>
        </div>
            
        </div>
    
}

export default OrganizationCard
