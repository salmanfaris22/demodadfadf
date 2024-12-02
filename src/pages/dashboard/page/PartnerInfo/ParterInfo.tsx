import { useEffect, useState } from 'react';
import Button from '../../../../common/Components/Button/Button';
import Card from '../../../../common/Components/Card/Common/Card';
import AllPartner from './Allpartners/AllPartner';
import classes from './partnerInfo.module.scss';
import AddPartner from './Sidebar/AddNewAprtner';
import { dashboardItems } from '../../../../services/dashboard';

type DashboardItem = {
  imageUrl: string;
  label: string;
  totalcount: number; // Adjust type if needed
};

const ParterInfo = () => {
  const [data, setData] = useState<DashboardItem[]>([]); // Explicit type added

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res:any = await dashboardItems();
        setData([
          { imageUrl: "/assets/images/card/partners.png", label: "Total Partners", totalcount: Number(res.TotalPartners )},
          { imageUrl: "/assets/images/card/product.png", label: "Total Products", totalcount: Number(res.TotalProduct) },
          { imageUrl: "/assets/images/card/activeChat.png", label: "Active Conversations", totalcount:Number( res.ActiveConversations) },
          { imageUrl: "/assets/images/card/total.png", label: "Total Conversations", totalcount: Number(res.TotalConversations )},
          { imageUrl: "/assets/images/card/trasaction.png", label: "Transaction Won", totalcount:Number( res.TransactionWon )},
          { imageUrl: "/assets/images/card/revenue.png", label: "Revenue Generated", totalcount:Number( res.RevenueGenerated) },
        ]);
      } catch (error) {
        console.error("Error fetching dashboard items:", error);
      }
    };

    fetchData();
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.dashboard}>
      <div className={classes.topWarap}>
        <div className={classes.topText}>
          Partner Information
          <span>Last updated today</span>
        </div>
        <div className={classes.addPartner}>
          {open && <AddPartner setOpen={setOpen} />}
        </div>
        <Button
          label="Add new Partner"
          type="submit"
          className={classes.loginButton}
          onClick={() => setOpen(true)}
        />
      </div>
      <div className={classes.card}>
        {data?.map((e, i) => (
          <div key={i}>
            <Card imageUrl={e.imageUrl} label={e.label} totalcount={e.totalcount} />
          </div>
        ))}
      </div>
      <div className={classes.tableMain}>
        <AllPartner />
      </div>
    </div>
  );
};

export default ParterInfo;
