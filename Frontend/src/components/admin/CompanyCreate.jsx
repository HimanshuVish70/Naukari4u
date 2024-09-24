import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();
    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto NewCompanyBorder'>
                <div className='my-10 display flex flex-col gap-4 text-center'>
                    <h1 className='font-bold Newcompany text-4xl'>Choose a name for your company.</h1>
                    <p className='text-gray-600'> You can modify it later if needed.</p>
                </div>
                <div className="newCompanyContainer">
                    <Label className="label">Company Name</Label>
                    <Input
                        type="text"
                        className="my-3 inputnewcompany"
                        placeholder="Zidio Development, Google, Microsoft etc."
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div className='flex items-center gap-2 my-10 align-center justify-center'>
                    <Button variant="outline" onClick={() => navigate("/admin/companies")} className="btnLogin hover:bg-gray-100">Cancel</Button>
                    <Button onClick={registerNewCompany} className="btnLogin logBtn hover:bg-blue-600">Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate