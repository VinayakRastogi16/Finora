import React from 'react'


export default function Tables({heading, theading1, theading2, theading3, td1, td2, td3, td4, td5, td6, td7, td10, td11, td12, para, tr1}){
    return(
        <div className='container-lg mt-5 pt-5 mb-5 pb-5'>
            <h3 style={{marginLeft:"15%"}}>{heading}</h3>
            <br />
            <table class="table table-borderless" style={{width:"70%", marginLeft:"15%", border:"1px solid #e2e2e2"}}>
  <thead>
    <tr>
      <th scope="col"><h6 className='fw-bold'>{theading1}</h6></th>
      <th scope="col"><h6 className='fw-bold'>{theading2}</h6></th>
      <th scope="col"><h6 className='fw-bold'>{theading3}</h6></th>
      
    </tr>
  </thead>
  <tbody className='border-top'>
    <tr>
      <td className='mt-5'>{td1}</td>
      <td>{td2}</td>
      <td>{td10}</td>
      

    </tr>
    <tr >
      <td style={{backgroundColor:'#e2e2e22f'}} className='mt-5'>{td3}</td>
      <td style={{backgroundColor:'#e2e2e22f'}} className='ms-5 pt-2 pb-0 mb-0'><p>{td4}</p></td>
      <td style={{backgroundColor:'#e2e2e22f'}}>{td11}</td>
    </tr>
    <tr>

      <td className='mt-5'>{td5}</td>
      <td className=''>{td6}</td>
      <td>{td12}</td>
    </tr>
        {tr1}
  </tbody>
</table>
{para}
        </div>
    )
}