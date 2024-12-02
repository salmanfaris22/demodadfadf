import SelectButton from '../../../../../common/Components/Button/SelectBtn/SelectBtn';
import SearchInput from '../../../../../common/Components/InputField/SearchInput/SearchInput';
import Table from '../../../../../common/Components/Table/ Table';
import { Partner } from '../../../../../common/Components/Table/type';

import classes from './allPartners.module.scss';  // Correct file name
const demoData: Partner[] = [
    {
      imageUrl: "/assets/images/demo/demo.png",
      name: "Amazon",
      description: "Amazon is a multinational technology company that sells a variety of products and services online.",
      date: "04/21/2024",
      email: "amazonbusiness@gmail.com",
      plan: "Launch",
      totalConversation: 2134,
      action: "View Details",
    },
    {
      imageUrl: "/assets/images/demo/demo.png",
      name: "Ajio",
      description: "An online marketplace.",
      date: "04/21/2024",
      email: "ajio@gmail.com",
      plan: "Scale",
      totalConversation: 3431,
      action: "View Details",
    },
    {
      imageUrl: "/assets/images/demo/demo.png",
      name: "Flipkart",
      description: "An Indian e-commerce company offering a wide range of products.",
      date: "04/21/2024",
      email: "flipkart@gmail.com",
      plan: "Enterprise",
      totalConversation: 987,
      action: "View Details",
    },
    {
      imageUrl: "/assets/images/demo/demo.png",
      name: "Myntra",
      description: "India's largest online fashion and lifestyle retailer.",
      date: "04/21/2024",
      email: "myntralogistics@gmail.com",
      plan: "Scale",
      totalConversation: 654,
      action: "View Details",
    },
    {
      imageUrl: "/assets/images/demo/demo.png",
      name: "Snapdeal",
      description: "A leading Indian online shopping platform.",
      date: "04/21/2024",
      email: "snapdealbusiness@gmail.com",
      plan: "Launch",
      totalConversation: 456,
      action: "View Details",
    },
    {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Amazon",
        description: "Amazon is a multinational technology company that sells a variety of products and services online.",
        date: "04/21/2024",
        email: "amazonbusiness@gmail.com",
        plan: "Launch",
        totalConversation: 2134,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Ajio",
        description: "An online marketplace.",
        date: "04/21/2024",
        email: "ajio@gmail.com",
        plan: "Scale",
        totalConversation: 3431,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Flipkart",
        description: "An Indian e-commerce company offering a wide range of products.",
        date: "04/21/2024",
        email: "flipkart@gmail.com",
        plan: "Enterprise",
        totalConversation: 987,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Myntra",
        description: "India's largest online fashion and lifestyle retailer.",
        date: "04/21/2024",
        email: "myntralogistics@gmail.com",
        plan: "Scale",
        totalConversation: 654,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Snapdeal",
        description: "A leading Indian online shopping platform.",
        date: "04/21/2024",
        email: "snapdealbusiness@gmail.com",
        plan: "Launch",
        totalConversation: 456,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Amazon",
        description: "Amazon is a multinational technology company that sells a variety of products and services online.",
        date: "04/21/2024",
        email: "amazonbusiness@gmail.com",
        plan: "Launch",
        totalConversation: 2134,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Ajio",
        description: "An online marketplace.",
        date: "04/21/2024",
        email: "ajio@gmail.com",
        plan: "Scale",
        totalConversation: 3431,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Flipkart",
        description: "An Indian e-commerce company offering a wide range of products.",
        date: "04/21/2024",
        email: "flipkart@gmail.com",
        plan: "Enterprise",
        totalConversation: 987,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Myntra",
        description: "India's largest online fashion and lifestyle retailer.",
        date: "04/21/2024",
        email: "myntralogistics@gmail.com",
        plan: "Scale",
        totalConversation: 654,
        action: "View Details",
      },
      {
        imageUrl: "/assets/images/demo/demo.png",
        name: "Snapdeal",
        description: "A leading Indian online shopping platform.",
        date: "04/21/2024",
        email: "snapdealbusiness@gmail.com",
        plan: "Launch",
        totalConversation: 456,
        action: "View Details",
      },
    // Repeat as necessary for all the other partners
  ];
  
  const AllPartner = () => {
    const handleSelect = (selectedOption: string) => {
      console.log("Selected Option:", selectedOption);
    };
  
    const handleSearch = (query: string) => {
      console.log("Search Query:", query);
    };
  
    return (
      <div className={classes.mainWrap}>
        <div className={classes.headWrap}>
          <div className={classes.selectWrap}>
            <SelectButton
              options={["Most Popular", "Most Recent", "Most Products", "Join Date"]}
              onSelect={handleSelect}
              // className={classes.btn} // Now passing the className prop here
            />
            <div>
              <SearchInput
                placeholder="Search items..."
                onSearch={handleSearch}
                iconSrc="/assets/images/icons/search.png" // Path to your search icon image
              />
            </div>
          </div>
        </div>
  
        <div className={classes.topContainer}>
          <Table data={demoData} rowsPerPage={6} /> {/* Reuse your Table component */}
        </div>
      </div>
    );
  };
  
  export default AllPartner;


