import { useState } from 'react'
import Button from '../../../../common/Components/Button/Button'
import Card from '../../../../common/Components/Card/Common/Card'
import AllPartner from './Allpartners/AllPartner'
import classes from './partnerInfo.module.scss'
import AddPartner from './Sidebar/AddNewAprtner'

const ParterInfo = () => {
    const dashboardDatas = [
        {imageUrl:"/assets/images/card/partners.png",label:"Total Partners",totalcount:5338},
        {imageUrl:"/assets/images/card/partners.png",label:"Total Partners",totalcount:5338},
        {imageUrl:"/assets/images/card/partners.png",label:"Total Partners",totalcount:5338},
        {imageUrl:"/assets/images/card/partners.png",label:"Total Partners",totalcount:5338},
        {imageUrl:"/assets/images/card/partners.png",label:"Total Partners",totalcount:5338},
        {imageUrl:"/assets/images/card/partners.png",label:"Total Partners",totalcount:5338},
    ]

    const [open,setOpen]=useState(false)
  return (
    <div className={classes.dashboard}>
         
      <div className={classes.topWarap}>
        <div className={classes.topText}>
        Partner Information
        <span>Last updated today</span>
        </div>
       <div className={classes.addPartner}>
       {open && <AddPartner setOpen={setOpen}/>}
       </div>
        <Button label="Add new Partner" type="submit" className={classes.loginButton} onClick={()=>setOpen(true)}/>
      </div>
      <div className={classes.card}>
        {dashboardDatas.map((e,i)=>{
            return (
             <div  key={i}>
                   <Card imageUrl={e.imageUrl}  label={e.label} totalcount={e.totalcount}/>
             </div>
            )
        })}

      </div>
      <div className={classes.tableMain}>
        <AllPartner/>
      </div>
    </div>
  )
}

export default ParterInfo
