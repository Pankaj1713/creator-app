import React, { useEffect, useState } from "react";
import Button from "../../../../components/common/button/index";
import { APIS, getAPI, putAPI } from "../../../../api";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const UserCategory = ({ onSuccess }) => {
  const user = useSelector((state) => state?.auth);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    getAPI(APIS.GET_INTERESTS).then((res) => {
      setInterests(res);
    });
  }, []);

  const toggleCategory = (index) => {
    setSelectedCategory(index === selectedCategory ? null : index);
  };

  const handleSubmit = (values) => {
    if (selectedCategory !== null) {
      const selectedInterest = interests?.[selectedCategory]?._id;
      putAPI(`${APIS.UPDATE_INTEREST}`, {
        interestId: selectedInterest,
      }).then((res) => {
        onSuccess(res?.data);
      });
    }
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <div className="md:text-[32px] text-[22px] font-semibold text-center md:my-10 my-5">
        What defines you best?
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-[600px] m-auto">
        {interests?.map((data, index) => (
          <div
            key={index}
            className={`border rounded-[15px] flex flex-col items-center p-[10px] cursor-pointer ${
              selectedCategory === index ? "bg-textViolet text-textWhite" : ""
            }`}
            onClick={() => toggleCategory(index)}
          >
            <div className="">
              <img
                className="w-40 h-32 object-contain "
                src={data.image.thumb}
                alt="Image"
              />
            </div>
            <div> {data.name} </div>
          </div>
        ))}
      </div>
      <Button
        className="text-[14px] mt-1 bg-accent w-full md:w-[40%]"
        onClick={handleSubmit}
        disabled={!selectedCategory === null}
      >
        PROCEED
      </Button>
    </div>
  );
};

export default UserCategory;
