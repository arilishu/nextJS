'use server'
const SecuritizeURL="https://connect-gw.sandbox.securitize.io/";
export async function SecuritizeAuthorize(
  code: string,
  ) {
  try{
    const body = `{"code":"${code}"}`;
console.log(body);
  
  const res = await fetch(SecuritizeURL+'api/auth/v1/authorize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'clientid': 'a40e759d-f208-40b1-9d71-a54f0bc9e523',
      'Authorization': 'Bearer d06d9354-1ef6-4197-bbb5-33822af16b65',
    },
    body: body,
  })
  
  const data = await res.json()
  console.log(data);
  return data;
} catch (error) {
  console.error('SecuritizeAuthorize:', error);
  throw new Error('Failed to fetch Securitize Authorize.');
}
}

export async function securitizeGetInvestorInformation(
  accessToken:string,
){
  try{
    
  const res = await fetch(SecuritizeURL+'api/sid/v1/investor', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'securitize',
      'access-token': accessToken,
    }
  })
  
  const data = await res.json()
  return data;
} catch (error) {
  console.error('Database Error:', error);
  throw new Error('Failed to fetch revenue data.');
}

}
