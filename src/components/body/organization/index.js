import React from 'react'
import Separator from '../../common/separator';
import './organization.css';
import { OrganizationData } from "../../data/organization";
function Organization() {
    const data = OrganizationData;
    return(
        <div className="organization">
            <Separator/>
        <label className="section-title">Organization</label>
        <div className='organization-list'>
            {data.map((item)=>{
                return(
                    <OrganizationCard item={item} />
                )
            })};
        </div>
        </div>
    );
};

export default Organization
