import LoginData from '@/app/ui/auth/card'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    code?: string;
    country?: string;
    authorized?: string;
  };
}) {
  const code = searchParams?.code || '';
  const country = searchParams?.country || '';
  const authorized = searchParams?.authorized || '';
  
  
  
    return (
      <div>
      <LoginData code={code} />
      {/* {code!=null?<p>code: {code}</p>:""}
      {country!=null?<p>Country: {country}</p>:""}
      {authorized!=null?<p>authorized: {authorized}</p>:""} */}
      </div>

    );
  }
