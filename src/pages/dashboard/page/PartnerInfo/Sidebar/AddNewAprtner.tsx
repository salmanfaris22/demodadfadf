import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./AddPartner.module.scss";
import InputField from "../../../../../common/Components/InputField/InputField";
import Button from "../../../../../common/Components/Button/Button";
import { hideToastById, showToast } from "../../../../../store/toastSlice";
import { partners } from "../../../../../services/partners";
import { isValidEmail } from "../../../../../utils/emailValidator";

interface AddPartnerProps {
  setOpen: (value: boolean) => void;
}

const AddPartner: React.FC<AddPartnerProps> = ({ setOpen }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // Reusable Toast //
  const showToastMessage = (message: string, type: "success" | "error" | "warning") => {
    dispatch(
      showToast({
        message,
        type,
        timeout: 3000,
      })
    );
  };

  // Validation functions
  const validateForm = () => {
    if (!name) return "Partner name is required.";
    if (!website) return "Partner website is required.";
    if (!email) return "Email is required.";
    if (!isValidEmail(email)) return "Please enter a valid email address.";
    if (!apiKey) return "API key is required.";
    if (!password) return "Password is required.";
    if (!plan) return "Please select a plan.";
    if (!description) return "Description is required.";
    if (!image) return "Please upload a partner image.";
    return "";
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // File type validation
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        showToastMessage("Invalid file type. Please upload an image (jpeg, png, jpg).", "error");
        return;
      }

      // File size validation (e.g., max size 2MB)
      const maxSizeInMB = 2;
      if (file.size > maxSizeInMB * 1024 * 1024) {
        showToastMessage(`File size exceeds ${maxSizeInMB}MB. Please upload a smaller image.`, "error");
        return;
      }

      setImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errorMessage = validateForm();

    if (errorMessage) {
      showToastMessage(errorMessage, "warning");
      return;
    }

    try {
      // Send FormData
      const response = await partners({
        name,
        website,
        email,
        api_key: apiKey,
        password,
        plan,
        description,
        image,
      });
      console.log("Partner Data Submitted: ", response);

      // Show success toast
      showToastMessage("Partner added successfully.", "success");

      // Close the modal after submission
      setOpen(false);
    } catch (error: any) {
      showToastMessage(error.response.data.error, "warning");
    } finally {
      dispatch(hideToastById(10));  // Example toast hiding logic
    }
  };

  return (
    <div className={classes.sideBarOver}>
      <div className={classes.sidebar}>
        <div>
          <div className={classes.maintext}>Add new Partner</div>
          <div className={classes.subtext}>
            Add new Partners by entering the following info
          </div>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <InputField
            label="Name"
            placeholder="Enter Partner Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.inputFields}
          />
          <InputField
            label="Partner Website"
            placeholder="Website URL"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className={classes.inputFields}
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Partner Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.inputFields}
          />
          <InputField
            label="API Key"
            placeholder="Eg: A1zaSyDaGmWKa4JsXZ"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className={classes.inputFields}
          />
          <InputField
            label="Password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.inputFields}
          />
          <div className={classes.inputField}>
            <label className={classes.fontLable}>Plan</label>
            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
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
              placeholder="Enter content"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                {image ? image.name : "Click to upload an image"}
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
              className={classes.resisetervtn}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPartner;
