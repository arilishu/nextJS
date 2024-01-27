import { lusitana } from '@/app/ui/fonts';
import { SecuritizeAuthorize, securitizeGetInvestorInformation } from '@/app/lib/securitize';
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default async function LoginData({
    code
  }: {
    code: string;
  }) { // Remove props
    
    const authData = await SecuritizeAuthorize(code);   
    const accessToken=authData.accessToken;
    console.log(accessToken);
    const investorData = await securitizeGetInvestorInformation(accessToken);
    console.log(investorData);
    return (
        <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Name</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{investorData.fullName}</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{investorData.email}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Verification Status</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{investorData.verificationStatus}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Investor Type</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{investorData.details.investorType}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">accreditation Status</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{investorData.accreditationStatus}</dd>
            </div>
            
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">externalId</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {investorData.domainInvestorDetails.externalId}
              </dd>
            </div>
          </dl>
        </div>
      </div>
        )
        }