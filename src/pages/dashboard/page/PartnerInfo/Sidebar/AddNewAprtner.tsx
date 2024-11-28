import React, { useState } from "react";
import classes from "./AddPartner.module.scss"; // Sidebar-specific styles
import InputField from "../../../../../common/Components/InputField/InputField"; // Reusable Input Field Component
import Button from "../../../../../common/Components/Button/Button";

const AddPartner: React.FC = ({setOpen}) => {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    email: "",
    apiKey: "",
    plan: "",
    description: "",
    image: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    console.log("Partner Data Submitted: ", formData);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={classes.sideBarOver}>
      <div className={classes.sidebar}>
        <div>
          <div className={classes.maintext}>Add new Partner</div>
          <div className={classes.subtext}>Add new Partners by entering following info</div>
        </div>
        <form className={classes.form}>
          <InputField
            label="Name"
            placeholder="Enter Partner Name"
            value={formData.name}
            onChange={handleChange}
            className={classes.inputFields}
          />
          <InputField
            label="Partner Website"
            placeholder="Website URL"
            value={formData.website}
            onChange={handleChange}
            className={classes.inputFields}
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Partner Email ID"
            value={formData.email}
            onChange={handleChange}
            className={classes.inputFields}
          />
          <InputField
            label="API Key"
            placeholder="Eg: A1zaSyDaGmWKa4JsXZ"
            value={formData.apiKey}
            onChange={handleChange}
            className={classes.inputFields}
            
          />
          <InputField
            label="Password"
            placeholder="Eg: A1zaSyDaGmWKa4JsXZ"
            value={formData.apiKey}
            onChange={handleChange}
            className={classes.inputFields}
          />
          <div className={classes.inputField}>
            <label className={classes.fontLable}>Plan</label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className={classes.input}
            >
              <option value="" disabled>Select Plan Type</option>
              <option value="Launch">Launch</option>
              <option value="Scale">Scale</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div className={classes.inputField}>
            <label className={classes.fontLable}>Description</label>
            <textarea
              name="description"
              placeholder="Enter content"
              value={formData.description}
              onChange={handleChange}
              className={classes.textArea}
            />
          </div>

         
            <div className={classes.modalOverlay}>
              <div className={classes.modalContent}>
                <div className={classes.uploadText}>Upload Partner Image</div>
                <label htmlFor="file-upload" className={classes.uploadLabel}>
                  <img
                    src="/assets/images/icons/upload.png"
                    alt="Upload"
                    className={classes.uploadIcon}
                  />
                  {formData.image ? formData?.image?.name : 'Click to upload an image'}
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className={classes.fileInput}
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                
              </div>
            </div>
          

          <div className={classes.actions}>
            <Button
              label="Cancel"
              type="button"
              onClick={() => setOpen(false)}
              className={classes.canclebtn}
            />
            <Button
              label="Register Partner"
              type="submit"
              onClick={() => handleSubmit()}
              className={classes.resisetervtn}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPartner;
