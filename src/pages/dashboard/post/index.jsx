import React, { useMemo, useState } from "react"; // Added import for useState
import PageHeader from "../../../components/layout/header/pageHeader";
import { AddPostIcon, LeftArrowIcon } from "../../../components/helpers/icon";
import { IMAGES } from "../../../components/constants/assets";
import FormInput from "../../../components/common/inputs/formInput";
import { Form, Formik } from "formik";
import { Radio, Spinner } from "@material-tailwind/react";
import { ROUTES } from "../../../router/routes";
import Button from "../../../components/common/button";
import { APIS, postAPI } from "../../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Post = () => {
  const navigate = useNavigate();
  const subscriptions = useSelector((state) => state.auth?.subscription);
  const [uploadedFile, setUploadedFile] = useState();
  const [selectedType, setSelectedType] = useState("EXCLUSIVE");
  const [caption, setCaption] = useState("");
  const [price, setPrice] = useState("");
  const [fileUploading, setFileUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const SUBSCRIPTION_OPTIONS = useMemo(
    () => subscriptions?.filter((x) => x?.type === "SUBSCRIPTION") || [],
    [subscriptions]
  );

  const uploadFile = (file) => {
    setFileUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    postAPI(APIS.UPLOAD_FILE, formData)
      .then((res) => {
        setUploadedFile(res?.data?.url);
      })
      .finally(() => setFileUploading(false));
  };

  const uploadPost = () => {
    if (!uploadedFile || !caption) {
      toast.error("Please enter all details");
      return;
    }
    setLoading(true);
    postAPI(APIS.CREATE_POST, {
      caption: caption,
      type: selectedType,
      postType: "IMAGE",
      price: +price || 0,
      post: uploadedFile,
    })
      .then((res) => {
        toast.success("Post uploaded successfully!");
        navigate(ROUTES.FEED);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="mobileView fixed top-0 flex justify-between items-center py-4 px-2 w-full bg-[#190033]">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon />
          <span className="text-textWhite text-xl font-semibold">
            Create Post
          </span>
        </div>
        <Button onClick={uploadPost} disabled={loading}>
          {loading ? "Posting..." : "Post Now"}
        </Button>
      </div>
      <div className="mt-[90px] font-lato px-5">
        <div className="flex justify-between items-center">
          <div className="text-[#2C2138]">Photos/Videos</div>
          {/* <div className="text-primary text-sm flex items-center gap-x-[5px]">
            Add More <AddPostIcon />
          </div> */}
        </div>
        {uploadedFile ? (
          <img
            src={uploadedFile}
            className="mt-3 h-24 w-[105px] cursor-pointer rounded-md object-cover border-2"
          />
        ) : (
          <label htmlFor="upload">
            {fileUploading ? (
              <div className="w-[105px] h-24 rounded-md bg-gray-300 flex justify-center items-center">
                <Spinner className="h-12 w-12" />
              </div>
            ) : (
              <img
                className="mt-3 w-[105px] cursor-pointer"
                src={IMAGES.UPLOADPOSTIMAGE}
                alt="Upload Post"
              />
            )}
          </label>
        )}
        <input
          className="hidden"
          type="file"
          name="upload"
          id="upload"
          accept="image/*,video/mp4,video/x-m4v,video/*"
          onChange={(e) => uploadFile(e.target.files[0])}
        />
        <div className="flex flex-col mt-8">
          <label className="mb-1" htmlFor="caption">
            Caption
          </label>
          <input
            className="border-[1.5px] border-[#766F7E] text-[16px] my-2 rounded-lg w-full h-14 py-2 px-3 text-darkGray leading-tight focus:outline-none focus:shadow-outline bg-pink-light"
            type="text"
            id="caption"
            name="name"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className="flex gap-x-[5px]">
          <Radio
            name="type"
            className="font-normal"
            label="Exclusive"
            color="deep-purple"
            defaultChecked={selectedType === "EXCLUSIVE"}
            onChange={() => setSelectedType("EXCLUSIVE")}
          />
          <Radio
            name="type"
            color="deep-purple"
            label="Subscription"
            defaultChecked={selectedType === "SUBSCRIPTION"}
            onChange={() => setSelectedType("SUBSCRIPTION")}
          />
        </div>
        {selectedType === "EXCLUSIVE" && (
          <div className="flex flex-col mt-8">
            <label className="mb-1" htmlFor="price">
              Selling Price (₹)
            </label>
            <input
              className="border-[1.5px] hide-wheel appearance-none border-[#766F7E] text-[16px] my-2 rounded-lg w-full h-14 py-2 px-3 text-darkGray leading-tight focus:outline-none focus:shadow-outline bg-pink-light"
              type="number"
              id="price"
              name="name"
              placeholder="₹ 0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        )}

        {selectedType === "SUBSCRIPTION" && (
          <div className="mt-8">
            <label className="mt-8" htmlFor="cars">
              Subscription
            </label>
            <select
              className="border-[1.5px] border-[#766F7E] text-[16px] my-2 rounded-lg w-full h-14 py-2 px-3 text-darkGray leading-tight bg-pink-light"
              id="achievements"
            >
              {SUBSCRIPTION_OPTIONS?.map((option) => (
                <option key={option?.title} value={option?._id}>
                  {option?.title}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
